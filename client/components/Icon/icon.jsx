import React from 'react';
import style from './style.scss';

export default function Icon({ icon }) {
  const noUrl = (
    <div className={style.icon}>
      <a href={icon.file} download>
        <img src={icon.icon} alt="icon" className={style.icon__icon} />
        <p className={style.icon__title}>
          { icon.title }
        </p>
      </a>
    </div>
  );

  const withUrl = (
    <div className={style.icon}>
      <a href={icon.url}>
        <img src={icon.icon} alt="icon" className={style.icon__icon} />
        <p className={style.icon__title}>
          { icon.title }
        </p>
      </a>
    </div>
  );
  return icon.url ? withUrl : noUrl;
}
