import React from 'react';
import style from './style.scss';
import StartBar from '../StartBar/startBar';
import Folder from '../Folder/folder';
import { useState, useDispatch } from '../../context/index';
import Window from '../Window/window';
// import StartMenu from './startMenu';

function App() {
  const state = useState();
  const dispatch = useDispatch();
  const [windows, setWindows] = React.useState([]);

  React.useEffect(() => {
    windows.forEach((window) => {
      if (window.title === state.toBeRemoved) {
        setWindows(windows.filter((item) => item.title !== state.toBeRemoved));
      }
    });
  }, [state.toBeRemoved]);

  const handleMouseMove = (e) => {
    if (state.targetElement === null) return;
    const left = e.clientX;
    const top = e.clientY;
    dispatch({
      type: 'moveTarget',
      payload: { top, left },
    });
  };

  const handleMouseUp = () => {
    dispatch({
      type: 'unSelectTarget',
    });
  };

  const launchWindow = (title) => {
    if (windows.length === 0) {
      setWindows([{
        title,
        content: <Window initial={{ left: 100, top: 150 }} title={title} key={title} />,
      }]);
      return;
    }
    let exists = false;
    windows.forEach((window) => {
      if (window.title === title) {
        exists = true;
      }
    });
    if (!exists) {
      setWindows([...windows, {
        title,
        content: <Window initial={{ left: 100, top: 150 }} title={title} key={title} />,
      }]);
    }
  };

  return (
    <div onMouseMove={(e) => handleMouseMove(e)} onMouseUp={() => handleMouseUp() } className={style.app}>
      <StartBar />
      <Folder initial={{ left: 30, top: 5 }} title="Resume" window={launchWindow} />
      <Folder initial={{ left: 30, top: 75 }} title="Social" window={launchWindow} />
      <Folder initial={{ left: 30, top: 145 }} title="Contact" window={launchWindow} />
      <Folder initial={{ left: 30, top: 215 }} title="Explorer" window={launchWindow} />
      { windows.map((window) => window.content) }
    </div>
  );
}

export default App;
