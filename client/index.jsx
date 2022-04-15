import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// import { PositionProvider } from './context/position';
import CombinedProviders from './context/index';

// console.log('this isfafl', PositionProvider);

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.hydrate(
    <CombinedProviders>
      <App />
    </CombinedProviders>,
    document.getElementById('ssr-app'),
  );
});
