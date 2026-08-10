export const buildSettingsLabel = ({ label, value, i18n }) => {
  if (label === 'quality') {
    if (value === '0') {
      return i18n.auto;
    }
    return `${value}p`;
  } else if (label === 'speed' && value === '1') {
    return i18n.normal;
  }

  return value;
};
