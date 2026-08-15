import { getEventXCoordinate, getTimeFromSliderPosition } from '@playerstack/core';

export const getValue = (event, rect, duration) => {
  const clientX = getEventXCoordinate(event);
  return getTimeFromSliderPosition(clientX, rect, duration);
};

export const getOffset = (e) => {
  const t = e.getBoundingClientRect();
  const s = window.pageXOffset || document.documentElement.scrollLeft;
  const o = window.pageYOffset || document.documentElement.scrollTop;
  return { top: t.top + o, left: t.left + s };
};
