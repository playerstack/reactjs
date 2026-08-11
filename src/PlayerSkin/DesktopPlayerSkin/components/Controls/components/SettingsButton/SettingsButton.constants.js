export const settingsOverlayFn = ({ qualityOptions, captionOptions, live, i18n }) => {
  const options = [];
  if (!live) {
    options.push({
      label: i18n.speed,
      value: 'speed',
      options: [
        { label: '2', value: '2' },
        { label: '1.5', value: '1.5' },
        { label: '1.25', value: '1.25' },
        { label: 'Normal', value: '1' },
        { label: '0.75', value: '0.75' },
        { label: '0.5', value: '0.5' },
        { label: '0.25', value: '0.25' },
      ],
    });
  }

  if (qualityOptions.length > 0) {
    options.push({
      label: i18n.quality,
      value: 'quality',
      options: [...qualityOptions, { label: i18n.auto, value: '0', isFullHD: false }],
    });
  }

  if (captionOptions && captionOptions.length > 0) {
    options.push({
      label: i18n.captions,
      value: 'captions',
      options: [{ label: i18n.off, value: 'off' }, ...captionOptions],
    });
  }

  return options;
};
