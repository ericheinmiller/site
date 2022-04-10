import React from 'react';
import UnClickedFolder from './folder_closed.png';
// import ClickedFolder from './folder_closed_selected.png';
import style from './style.scss';

export default function Folder() {

  return (
    <div className={style.folderContainer}>
      <img alt="Folder" src={UnClickedFolder}/>
      <p>Folder</p>
    </div>
  );
}
