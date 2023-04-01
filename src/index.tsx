import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './ui/main/app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App text="Hello World!" />
  </React.StrictMode>,
);
