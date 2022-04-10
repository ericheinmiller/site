import React from 'react';
import style from './style.scss';
import StartBarButton from '../StartBarButton';
import Clock from '../Clock';
// import StartBarButton from '../components/startBarButton';
// import { toggleStartMenu } from '../actions/folderActions';

export default function StartBar() {
  return (
    <div className={style.startBar}>
      <StartBarButton />
      <div className={style.breakLeft} />
      <div className={style.break} />
      <Clock />
    </div>
  );
}
