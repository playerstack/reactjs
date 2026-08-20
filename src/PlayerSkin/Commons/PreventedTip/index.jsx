import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledPreventedIcon,
  StyledPeventedTip,
  StyledPeventedTipClicked,
} from '@PlayerSkin/Commons/PreventedTip/PreventedTip.styled';
import { mutedIcon, playIcon } from '@playerstack/core/icons';
import Icon from '@components/Icon';
import { useAppSelector } from '@context/index';

const PreventedTip = ({ hasResource = false, prevented, paused, muted, currentTime, onClick }) => {
  const { i18n } = useAppSelector();

  const [preventedClicked, setPreventedClicked] = React.useState(false);

  const renderPreventedClickedTip = React.useCallback(() => {
    if (hasResource === false || prevented === false || paused) {
      return null;
    }

    if (muted === true && !preventedClicked) {
      const handleClickInner = (e) => {
        setPreventedClicked(true);
        onClick(e);
      };
      return (
        <React.Fragment key="preventedClickedTip">
          <StyledPeventedTipClicked onClick={handleClickInner} />
          <StyledPeventedTip>
            <StyledPreventedIcon>
              <Icon icon={mutedIcon} width={20} height={20} />
            </StyledPreventedIcon>
            {i18n.clickToUnmute}
          </StyledPeventedTip>
        </React.Fragment>
      );
    }

    return null;
  }, [hasResource, prevented, preventedClicked, onClick, i18n.clickToUnmute, muted, paused]);

  const renderPreventedTip = React.useCallback(() => {
    if (hasResource === false || prevented === false) {
      return null;
    }

    if (currentTime === 0 && paused) {
      return (
        <React.Fragment key="preventedTip">
          <StyledPeventedTip>
            <StyledPreventedIcon>
              <Icon icon={playIcon} width={20} height={20} />
            </StyledPreventedIcon>
            {i18n.playbackStuckClickResumePlayback}
          </StyledPeventedTip>
        </React.Fragment>
      );
    }

    return null;
  }, [currentTime, paused, hasResource, i18n.playbackStuckClickResumePlayback, prevented]);

  return [renderPreventedTip(), renderPreventedClickedTip()];
};

PreventedTip.propTypes = {
  hasResource: PropTypes.bool.isRequired,
  prevented: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  currentTime: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(
  PreventedTip,
  (p, n) =>
    p.hasResource === n.hasResource &&
    p.prevented === n.prevented &&
    p.paused === n.paused &&
    p.muted === n.muted &&
    p.currentTime === n.currentTime &&
    p.onClick === n.onClick,
);
