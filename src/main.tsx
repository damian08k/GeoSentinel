import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/variables.module.css';
import './styles/global.module.css';

import App from './App.tsx';

const appContainer = document.getElementById('root') as HTMLElement;
const root = createRoot(appContainer);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
