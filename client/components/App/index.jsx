import React from 'react';
import style from './style.scss';
import StartBar from '../StartBar';
import Folder from '../Folder';
import { usePosition } from '../../context/position';
import Window from '../Window';
// import StartMenu from './startMenu';

function App() {
  const { dispatch, state } = usePosition();
  const [windows, setWindows] = React.useState([]);

  const handleMouseMove = (e) => {
    if (state.targetElement === null) return;
    const left = e.clientX;
    const top = e.clientY;
    dispatch({
      type: 'move',
      payload: { top, left },
    });
  };

  const handleMouseUp = () => {
    dispatch({
      type: 'unset',
    });
  };

  const handleWindow = () => {
    setWindows([<Window initial={{ left: 100, top: 150 }} title="Resume"/>]);
  };

  return (
    <div onMouseMove={(e) => handleMouseMove(e)} onMouseUp={() => handleMouseUp() } className={style.app}>
      <StartBar />
      <Folder initial={{ left: 30, top: 5 }} title="Resume" window={handleWindow} />
      <Folder initial={{ left: 30, top: 75 }} title="Social" window={handleWindow} />
      <Folder initial={{ left: 30, top: 145 }} title="Contact" window={handleWindow} />
      <Folder initial={{ left: 30, top: 215 }} title="Explorer" window={handleWindow} />
      { windows }
    </div>
  );
}

export default App;
