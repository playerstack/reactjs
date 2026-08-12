import React from 'react';
import { render } from '@testing-library/react';
import AudioPlayerWrapper from '../../src/MediaPlayer/components/AudioMediaPlayerSkin/AudioPlayerWrapper';

describe('AudioPlayerWrapper', () => {
  it('renders children', () => {
    const { getByText } = render(
      <AudioPlayerWrapper>
        <div>Audio content</div>
      </AudioPlayerWrapper>,
    );
    expect(getByText('Audio content')).toBeTruthy();
  });

  it('forwards object ref to wrapper element', () => {
    const ref = React.createRef();
    render(
      <AudioPlayerWrapper ref={ref}>
        <span>Test</span>
      </AudioPlayerWrapper>,
    );
    expect(ref.current).not.toBeNull();
    expect(ref.current.tagName).toBe('DIV');
  });

  it('forwards function ref', () => {
    const refFn = jest.fn();
    render(
      <AudioPlayerWrapper ref={refFn}>
        <span>Test</span>
      </AudioPlayerWrapper>,
    );
    expect(refFn).toHaveBeenCalledWith(expect.any(HTMLDivElement));
  });

  it('passes extra props (tabIndex, role, dir)', () => {
    const { container } = render(
      <AudioPlayerWrapper tabIndex={0} role="application" dir="ltr">
        <span>Props</span>
      </AudioPlayerWrapper>,
    );
    const wrapper = container.firstChild;
    expect(wrapper.getAttribute('tabindex')).toBe('0');
    expect(wrapper.getAttribute('role')).toBe('application');
    expect(wrapper.getAttribute('dir')).toBe('ltr');
  });

  it('has styled-component class (scoped reset applied)', () => {
    const { container } = render(
      <AudioPlayerWrapper>
        <button>Click</button>
      </AudioPlayerWrapper>,
    );
    expect(container.firstChild.className).toBeTruthy();
    expect(container.querySelector('button')).toBeTruthy();
  });

  it('renders with null ref without crashing', () => {
    const { getByText } = render(
      <AudioPlayerWrapper ref={null}>
        <span>No ref</span>
      </AudioPlayerWrapper>,
    );
    expect(getByText('No ref')).toBeTruthy();
  });
});
