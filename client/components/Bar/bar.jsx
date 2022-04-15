import React from 'react';
import Logo from '../../items/directory_closed-1.png';
import style from './style.scss';
import { useDispatch } from '../../context/index';

export default function Bar({ title, isHighlight }) {
  const [pressed, setPressed] = React.useState(false);
  const [highlight, setHighlight] = React.useState(isHighlight);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isHighlight === title) {
      setHighlight(style.highlight);
    } else {
      setHighlight(null);
    }
  }, [isHighlight]);

  const handleButtonDown = () => {
    setPressed(true);
  };

  const handleButtonUp = () => {
    dispatch({
      type: 'closeWindow',
      payload: { title },
    });
    setPressed(false);
  };

  return (
    <div className={`${style.windowBar} ${highlight}`}>
      <div className={style.windowTitle}>
        <img src={Logo} className={style.windowTitle_icon} alt="Icon" />
        <p className={style.windowTitle__title}>{ title }</p>
      </div>
      <button type="button" onMouseDown={() => handleButtonDown()} onMouseUp={() => handleButtonUp()} className={pressed ? style.windowButton__pressed : style.windowButton}>
        <p className={style.windowButton__icon}>x</p>
      </button>
    </div>
  );
}
