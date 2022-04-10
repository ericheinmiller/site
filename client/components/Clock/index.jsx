import React, { useEffect, useState } from 'react';
import Internet from './internet.png';
import Sound from './sound.png';
import style from './style.scss';

export default function Clock() {
  const [textClass, setTextClass] = useState('text--visible');
  const today = new Date();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const seconds = today.getSeconds();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (textClass === 'text--visible') {
        setTextClass('text--invisible');
      } else {
        setTextClass('text--visible');
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [textClass, seconds]);

  return (
    <div className={style.clock}>
      <img src={Internet} alt="Internet" />
      <img src={Sound} alt="Sound" />
      <div className={style.clockText}>
        { hour }
        <div className={textClass}>
          :
        </div>
        { minute }
      </div>
    </div>
  );
}
