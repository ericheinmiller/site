import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { PositionProvider } from './context/position';
console.log('this isfafl', PositionProvider);

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.hydrate(
    <PositionProvider>
      <App />
    </PositionProvider>,
    document.getElementById('ssr-app'),
  );
});
