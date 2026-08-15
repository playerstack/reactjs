import { lazy as ReactLazy } from 'react';

/**
 * Lazy load a React component.
 * @param {Function} componentImportFn - Function that imports the component.
 * @returns {React.Component} - Lazy loaded component.
 */
export const lazy = (componentImportFn) => {
  return ReactLazy(async () => {
    const obj = await componentImportFn();
    return typeof obj.default === 'function' ? obj : obj.default;
  });
};
