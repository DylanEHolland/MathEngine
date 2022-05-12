import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppWrapper } from './components/AppWrapper';
import { SpreadSheet } from './components/SpreadSheet';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppWrapper>
      <SpreadSheet />
    </AppWrapper>
  </React.StrictMode>
);
