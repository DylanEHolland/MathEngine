import React from 'react';
import ReactDOM from 'react-dom/client';
import { WorkSpace } from './components/WorkSpace';
import { AppWrapper } from './components/AppWrapper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <React.StrictMode>
    <AppWrapper>
      <WorkSpace />
    </AppWrapper>
  </React.StrictMode>
);
