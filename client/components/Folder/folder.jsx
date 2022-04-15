import React from 'react';
import UnClickedFolder from '../../items/folder_closed.png';
import { useState, useDispatch } from '../../context/index';
import style from './style.scss';

let timer = null;
export default function Folder({ initial, title, window }) {
  const [modification, setModification] = React.useState(initial);
  const targetElement = React.useRef(null);
  const state = useState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (state.targetElement === targetElement && state.top !== null) {
      setModification({ top: state.top, left: state.left });
    }
  }, [state]);

  const handleClick = (e) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      window(title);
    } else {
      timer = setTimeout(100);
      return () => clearTimeout(timer);
    }
  };

  const handleMouseDown = (e) => {
    const left = e.clientX - parseInt(targetElement.current.style.left, 10);
    const top = e.clientY - parseInt(targetElement.current.style.top, 10);
    dispatch({
      type: 'selectTarget',
      payload: {
        left,
        top,
        targetElement,
      },
    });
  };

  return (
    <button onClick={(e) => handleClick(e)} draggable="false" ref={targetElement} onMouseDown={(e) => handleMouseDown(e)} type="button" className={style.folder} style={modification}>
      <img draggable="false" alt="Folder" src={UnClickedFolder} />
      <p>{ title }</p>
    </button>
  );
}
