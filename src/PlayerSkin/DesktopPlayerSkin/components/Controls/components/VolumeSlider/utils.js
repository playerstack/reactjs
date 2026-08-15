import { getVolumePercentage, sliderWidth } from '@playerstack/core';

export const getVolume = ({ clientX, sliderRef, isFullcreen }) => {
  if (!sliderRef.current) {
    return 0;
  }

  const rect = sliderRef.current.getBoundingClientRect();
  const offsetX = clientX - rect.left;
  return getVolumePercentage(offsetX, sliderWidth(isFullcreen));
};
