import React from 'react';
import style from './style.scss';
import StartBar from '../StartBar';
import Folder from '../Folder';
// import Window from './window';
// import StartMenu from './startMenu';

function App() {
  return (
    <div className={style.app}>
      <StartBar />
      <Folder initialPosition={{ left: 5, top: 5 }} />
      <Folder initialPosition={{ left: 5, top: 75 }} />
      <Folder initialPosition={{ left: 5, top: 145 }} />
    </div>
  );
}

export default App;
