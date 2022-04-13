import React from 'react';
import ReactDomServer from 'react-dom/server';
import express from 'express';
import App from '../client/components/App/index';
import { PositionProvider } from '../client/context/position';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const jsx = ReactDomServer.renderToString(
    <PositionProvider>
      <App />
    </PositionProvider>,
  );

  const clientBundleScript = '<script src="http://localhost:8080/scripts/bundle.js"></script>';
  const clientBundleStyle = '<link rel="stylesheet" href="http://localhost:8080/styles/bundle.css">';

  res.send(`
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Eric Heinmiller's site</title>
        <style>
          html, body, #ssr-app {
            width: 100%;
            height: 100%;
            margin: 0px;
          }
        </style>
        ${clientBundleStyle}
      </head>
      <body>
        <div id='ssr-app'>${jsx}</div>
        ${clientBundleScript}
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
