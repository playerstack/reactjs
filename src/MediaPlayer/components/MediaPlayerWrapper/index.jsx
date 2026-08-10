import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheetManager } from 'styled-components';
import { StyledMediaPlayerWrapper } from './MediaPlayerWrapper.styled';

import { isTestEnv } from '../../../utils/env';

/**
 * MediaPlayerWrapper renders player content inside a Shadow DOM
 * to isolate styles from the host application.
 *
 * - Fullscreen: works on the host element (outside shadow)
 * - PiP: works on <video> element (accessible via ref inside shadow)
 * - styled-components: injected into shadow root via StyleSheetManager target
 * - In test env (globalThis.__TEST__ or jsdom), Shadow DOM is skipped for testability.
 */

const MediaPlayerWrapper = React.forwardRef(({ children, style, ...props }, ref) => {
  const hostRef = React.useRef(null);
  const [shadowRoot, setShadowRoot] = React.useState(null);

  const setRefs = React.useCallback(
    (node) => {
      hostRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    },
    [ref],
  );

  React.useEffect(() => {
    if (isTestEnv) return;
    if (hostRef.current && !hostRef.current.shadowRoot) {
      const shadow = hostRef.current.attachShadow({ mode: 'open' });

      // Inject base reset for user-agent styles inside shadow
      const resetStyle = document.createElement('style');
      resetStyle.textContent = `
        *, *::before, *::after { box-sizing: border-box; }
        button { 
          border: none; 
          background: none; 
          color: inherit; 
          font: inherit; 
          padding: 0; 
          margin: 0; 
          cursor: pointer;
          outline: none;
        }
        ul, ol { list-style: none; margin: 0; padding: 0; }
        li { margin: 0; padding: 0; }
        a { color: inherit; text-decoration: none; }
      `;
      shadow.appendChild(resetStyle);

      setShadowRoot(shadow);
    } else if (hostRef.current && hostRef.current.shadowRoot) {
      setShadowRoot(hostRef.current.shadowRoot);
    }
  }, []);

  // Fallback: no Shadow DOM (test env or unsupported)
  if (isTestEnv) {
    return (
      <StyledMediaPlayerWrapper ref={ref} style={style} {...props}>
        {children}
      </StyledMediaPlayerWrapper>
    );
  }

  return (
    <div
      ref={setRefs}
      style={{
        position: 'relative',
        width: style?.width || '100%',
        height: style?.height || '100%',
        overflow: 'hidden',
        background: '#000',
      }}
      {...props}
    >
      {shadowRoot &&
        ReactDOM.createPortal(
          <StyleSheetManager target={shadowRoot}>
            <StyledMediaPlayerWrapper>{children}</StyledMediaPlayerWrapper>
          </StyleSheetManager>,
          shadowRoot,
        )}
    </div>
  );
});

MediaPlayerWrapper.displayName = 'MediaPlayerWrapper';

export default MediaPlayerWrapper;
