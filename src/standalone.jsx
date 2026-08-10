import React from 'react';
import { createRoot } from 'react-dom/client';

import PlayerStack from './index';

export default function renderPlayerStack(container, props) {
  createRoot(container).render(<PlayerStack {...props} />);
}
