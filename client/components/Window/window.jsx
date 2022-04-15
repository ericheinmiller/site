import React from 'react';
import style from './style.scss';
import Icon from '../Icon/icon';
import Content from '../../content';
import Bar from '../Bar/bar';
import { useDispatch, useState } from '../../context/index';

function Window({ title, initial }) {
  const targetElement = React.useRef(null);
  const [modification, setModification] = React.useState(initial);
  const state = useState();
  const dispatch = useDispatch();
  const highlight = state.highlight === title ? style.zPriority : null;

  React.useEffect(() => {
    if (state.targetElement === targetElement && state.top !== null) {
      setModification({
        ...modification,
        top: state.top,
        left: state.left,
      });
    }
  }, [state]);

  const handleMouseDown = (e) => {
    const left = e.clientX - parseInt(targetElement.current.style.left, 10);
    const top = e.clientY - parseInt(targetElement.current.style.top, 10);
    dispatch({
      type: 'selectTarget',
      payload: {
        left,
        top,
        targetElement,
        title,
      },
    });
  };

  return (
    <div onMouseDown={(e) => handleMouseDown(e)} ref={targetElement} className={`${style.window} ${highlight}`} style={modification}>
      <Bar title={title} isHighlight={state.highlight} />
      <div className={style.windowWindow}>
        { Content[title].map((icon) => <Icon icon={icon} />) }
      </div>
    </div>
  );
}

export default Window;
