import React from 'react';
import { render } from '@testing-library/react';

jest.mock('@playerstack/core', () => ({
  ...jest.requireActual('@playerstack/core'),
}));

import Tooltip from '../../src/PlayerSkin/Commons/Tooltip';
import { Provider } from '../../src/context/index';

const Wrapper = ({ children }) => <Provider language="en">{children}</Provider>;

describe('Tooltip', () => {
  test('renders children', () => {
    const { getByRole } = render(
      <Wrapper>
        <Tooltip label="Play">
          <button>Play</button>
        </Tooltip>
      </Wrapper>,
    );
    expect(getByRole('button')).toBeDefined();
  });

  test('renders with label prop', () => {
    const { container } = render(
      <Wrapper>
        <Tooltip label="Volume">
          <button>Vol</button>
        </Tooltip>
      </Wrapper>,
    );
    expect(container).toBeDefined();
  });

  test('renders when disabled', () => {
    const { getByText } = render(
      <Wrapper>
        <Tooltip label="Mute" disabled>
          <button>Mute</button>
        </Tooltip>
      </Wrapper>,
    );
    expect(getByText('Mute')).toBeDefined();
  });

  test('renders in fullscreen mode', () => {
    const { getByRole } = render(
      <Wrapper>
        <Tooltip label="FS" fullscreen>
          <button>FS</button>
        </Tooltip>
      </Wrapper>,
    );
    expect(getByRole('button')).toBeDefined();
  });
});
