import React, { useEffect } from 'react';

import useAppSelector from './context/useAppSelector';
import useAppDispatch from './context/useAppDispatch';
import { initialSettings } from './hooks.constants';
import { buildSettingsLabel } from '@playerstack/core';
import { buildSettingsOptions as settingsOverlayFn } from '@playerstack/core';
import { buildIconProps } from '@playerstack/core';

const useSettingsOptions = ({
  live,
  fullHDQualityBreak,
  qualities,
  captions,
  activeCaption,
  playbackRate,
  playbackQuality,
  changeSettings,
  onCaptionChange,
  fullscreen,
  adMode = false,
}) => {
  const { i18n } = useAppSelector();
  const dispatch = useAppDispatch();

  const dropdownRef = React.useRef(null);
  const playbackQualityRef = React.useRef(playbackQuality);
  playbackQualityRef.current = playbackQuality;

  const [settings, setSettings] = React.useState(initialSettings);
  const [isAutoQuality, setIsAutoQuality] = React.useState(true);
  const [values, setValues] = React.useState({
    quality: {
      label: i18n.auto,
      value: '0',
      isFullHD: false,
    },
    speed: {
      label: i18n.normal,
      value: '1',
    },
    captions: {
      label: i18n.off,
      value: 'off',
    },
  });

  useEffect(() => {
    const playbackRateStr = playbackRate.toString();
    setValues((prev) => ({
      ...prev,
      speed: {
        label: buildSettingsLabel({
          label: 'speed',
          value: playbackRateStr,
          i18n,
        }),
        value: playbackRateStr,
      },
    }));
  }, [i18n, playbackRate]);

  // Sync captions value when activeCaption changes externally (e.g. CC button toggle)
  useEffect(() => {
    const currentValue = values.captions?.value;
    if (activeCaption === null && currentValue !== 'off') {
      setValues((prev) => ({ ...prev, captions: { label: i18n.off, value: 'off' } }));
    } else if (activeCaption && currentValue !== activeCaption) {
      const track = captions?.find((c) => c.language === activeCaption);
      const label = track?.label || activeCaption;
      setValues((prev) => ({ ...prev, captions: { label, value: activeCaption } }));
    }
    // values.captions?.value is a guard read, not a reactive dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCaption, captions, i18n]);

  // Sync quality value when auto-selection or external change updates playbackQuality
  useEffect(() => {
    if (playbackQuality == null || playbackQuality === 0 || qualities.length === 0) return;
    const qualityStr = playbackQuality.toString();
    if (isAutoQuality) {
      // Show "Auto (720p)" format in the menu
      const autoLabel = `${i18n.auto} (${qualityStr}p)`;
      setValues((prev) => {
        if (prev.quality?.value === '0' && prev.quality?.label === autoLabel) return prev;
        return {
          ...prev,
          quality: {
            label: autoLabel,
            value: '0',
            isFullHD: fullHDQualityBreak !== undefined && Number(qualityStr) >= fullHDQualityBreak,
          },
        };
      });
    }
  }, [playbackQuality, qualities, i18n, fullHDQualityBreak, isAutoQuality]);

  const handleButtonClick = React.useCallback(
    (e) => {
      e.stopPropagation();
      dispatch((state) => {
        const shouldClose = !state.subMenuVisible ? !state.menuVisible : false;
        return {
          menuVisible: shouldClose,
          subMenuVisible: false,
        };
      });
      setSettings((state) => ({
        ...initialSettings,
        generalMenu: !state.speed && !state.quality && !state.captions ? !state.generalMenu : false,
      }));
    },
    [dispatch],
  );

  const handleMenuClick = React.useCallback(
    (itemValue) => {
      return (value) => {
        if (itemValue === 'quality') {
          if (value === '0') {
            setIsAutoQuality(true);
            const realQuality = playbackQualityRef.current;
            const autoLabel = realQuality && realQuality !== 0 ? `${i18n.auto} (${realQuality}p)` : i18n.auto;
            setValues((prev) => ({
              ...prev,
              quality: {
                label: autoLabel,
                value: '0',
                isFullHD: fullHDQualityBreak !== undefined && Number(realQuality ?? 0) >= fullHDQualityBreak,
              },
            }));
          } else {
            setIsAutoQuality(false);
            setValues((prev) => ({
              ...prev,
              quality: {
                label: buildSettingsLabel({ label: 'quality', value, i18n }),
                value: value,
                isFullHD: fullHDQualityBreak !== undefined && Number(value ?? '0') >= fullHDQualityBreak,
              },
            }));
          }
        } else if (itemValue === 'captions') {
          const selectedCaption = captions?.find((c) => c.language === value);
          const label = value === 'off' ? i18n.off : selectedCaption?.label || value;
          setValues((prev) => ({
            ...prev,
            captions: { label, value },
          }));
          if (onCaptionChange) {
            onCaptionChange(value === 'off' ? null : value);
          }
        } else {
          setValues((prev) => ({
            ...prev,
            [itemValue]: {
              label: buildSettingsLabel({ label: itemValue, value, i18n }),
              value: value,
              isFullHD: fullHDQualityBreak !== undefined && Number(value ?? '0') >= fullHDQualityBreak,
            },
          }));
        }
        dispatch({
          menuVisible: false,
          subMenuVisible: false,
        });
        setSettings(initialSettings);
      };
    },
    [fullHDQualityBreak, i18n, dispatch, captions, onCaptionChange],
  );

  const handleMenuItemClick = React.useCallback(
    (itemValue) => {
      dispatch({
        menuVisible: false,
        subMenuVisible: true,
      });
      setSettings((prev) => ({
        ...prev,
        generalMenu: false,
        [itemValue]: true,
      }));
    },
    [dispatch],
  );

  const handleGoBack = React.useCallback(
    (itemValue) => {
      return () => {
        dispatch({
          menuVisible: true,
          subMenuVisible: false,
        });
        setSettings((prev) => ({
          ...prev,
          generalMenu: true,
          [itemValue]: false,
        }));
      };
    },
    [dispatch],
  );

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current) return;
      // Use composedPath() to correctly detect clicks inside Shadow DOM
      const path = event.composedPath ? event.composedPath() : [];
      const isInside = path.includes(dropdownRef.current) || dropdownRef.current.contains(event.target);
      if (!isInside) {
        dispatch({
          menuVisible: false,
          subMenuVisible: false,
        });
        setSettings(initialSettings);
      }
    };

    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, [dispatch]);

  const captionOptions = React.useMemo(() => {
    if (!captions || captions.length === 0) return [];
    return captions.map((c) => ({
      label: c.label,
      value: c.language,
    }));
  }, [captions]);

  const settingsOptions = React.useMemo(() => {
    return settingsOverlayFn({
      qualityOptions: qualities,
      captionOptions,
      live,
      adMode,
      i18n,
    });
  }, [live, adMode, qualities, captionOptions, i18n]);

  const iconProps = React.useMemo(() => buildIconProps(fullscreen), [fullscreen]);

  // Track previous values to only call changeSettings when user makes a selection
  const prevValuesRef = React.useRef(values);
  React.useEffect(() => {
    const prev = prevValuesRef.current;
    if (prev !== values) {
      prevValuesRef.current = values;
      const changed = {};
      if (prev.speed?.value !== values.speed?.value) {
        changed.speed = values.speed;
      }
      if (prev.quality?.value !== values.quality?.value) {
        changed.quality = values.quality;
      }
      if (changed.speed || changed.quality) {
        changeSettings(changed);
      }
    }
  }, [values, changeSettings]);

  return {
    dropdownRef,
    settings,
    values,
    iconProps,
    settingsOptions,
    handleButtonClick,
    handleMenuItemClick,
    handleMenuClick,
    handleGoBack,
  };
};

export default useSettingsOptions;
