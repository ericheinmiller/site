import React from 'react';
import style from './style.scss';
import Logo from './startBarButton.png';

export default function StartBarButton() {
  return (
    <div className={style.startBarButton}>
      <div className={style.startBarButtonWrapper}>
        <img className={style.startBarButton__logo} alt="Logo" src={Logo} />
      </div>
    </div>
  );
}
