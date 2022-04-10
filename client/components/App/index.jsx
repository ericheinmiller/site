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
      <Folder />
    </div>
  );
}

export default App;
