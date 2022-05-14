import React from 'react';
import ReactDOM from 'react-dom/client';
import { Application } from './components/Application';
import { AppWrapper } from './components/AppWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <AppWrapper>
      <Application />
    </AppWrapper>
  </React.StrictMode>
);
