import React from 'react';
import UnClickedFolder from '../../items/folder_closed.png';
import { usePosition } from '../../context/position';
import style from './style.scss';

let timer = null;
export default function Folder({ initial, title, window }) {
  const [position, setPosition] = React.useState(initial);
  const targetElement = React.useRef(null);
  const { dispatch, state } = usePosition();

  React.useEffect(() => {
    if (state.targetElement === targetElement && state.top !== null) {
      setPosition({ top: state.top, left: state.left });
    }
  }, [state]);

  const handleClick = (e) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      window();
    } else {
      timer = setTimeout(100);
      return () => clearTimeout(timer);
    }
  };

  const handleMouseDown = (e) => {
    const left = e.clientX - parseInt(targetElement.current.style.left, 10);
    const top = e.clientY - parseInt(targetElement.current.style.top, 10);
    dispatch({
      type: 'set',
      payload: {
        left,
        top,
        targetElement,
      },
    });
  };

  return (
    <button onClick={(e) => handleClick(e)} draggable="false" ref={targetElement} onMouseDown={(e) => handleMouseDown(e)} type="button" className={style.folder} style={position}>
      <img draggable="false" alt="Folder" src={UnClickedFolder} />
      <p>{ title }</p>
    </button>
  );
}
