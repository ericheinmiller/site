import React from 'react';
import UnClickedFolder from './folder_closed.png';
// import ClickedFolder from './folder_closed_selected.png';
import style from './style.scss';

export default function Folder({ initialPosition }) {
  const targetElement = React.useRef(null);
  const [position, setPosition] = React.useState(initialPosition);
  const [initialPositions, setInitialPositions] = React.useState(null);
  const [isTarget, setIsTarget] = React.useState(false);

  const handleMouseDown = (e) => {
    const left = e.clientX - parseInt(targetElement.current.style.left, 10);
    const top = e.clientY - parseInt(targetElement.current.style.top, 10);
    setIsTarget(true);
    setInitialPositions({ left, top });
  };

  const handleMouseMove = (e) => {
    if (!isTarget) return;
    const left = e.clientX - initialPositions.left;
    const top = e.clientY - initialPositions.top;
    setPosition({ left, top });
  };

  return (
    <button ref={targetElement} onMouseDown={(e) => handleMouseDown(e)} onMouseMove={(e) => handleMouseMove(e)} type="button" className={style.folder} style={position}>
      <img alt="Folder" src={UnClickedFolder} />
      <p>Folder</p>
    </button>
  );
}
