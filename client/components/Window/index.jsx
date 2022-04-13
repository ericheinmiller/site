import React from 'react';
import style from './style.scss';
import Icon from '../../items/directory_closed-1.png';
import { usePosition } from '../../context/position';

function Window({ title, initial }) {
  const targetElement = React.useRef(null);
  const [position, setPosition] = React.useState(initial);
  const { dispatch, state } = usePosition();

  React.useEffect(() => {
    if (state.targetElement === targetElement && state.top !== null) {
      setPosition({ top: state.top, left: state.left });
    }
  }, [state]);

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
    <div ref={targetElement} className={style.window} style={position}>
      <div onMouseDown={(e) => handleMouseDown(e)} className={style.windowBar}>
        <div className={style.windowTitle}>
          <img src={Icon} className={style.windowTitle_icon} alt="Icon" />
          <p className={style.windowTitle__title}>{ title }</p>
        </div>
        <div className={style.windowButton}> <p className={style.windowButton__icon}>x</p>
        </div>
      </div>
      <div className={style.windowWindow} />
    </div>
  );
}

export default Window;
