import React, { useEffect, useRef, useState } from 'react';
import styles from './css/style.module.css';

import List from '../../components/list-items/list/List';
import Button from '../../components/button/Button';
import { createPortal } from 'react-dom';
import Modal from '../../components/modal/Modal';

export default function UserList() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    if(isOpenModal) setIsOpenModal(false);
    if(!isOpenModal) setIsOpenModal(true);

    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = '17px'
  }

  const closeModal = () => setIsOpenModal(false)

  return (
    <main className={styles['main__users-list']}>
        <Modal open={isOpenModal} handler={closeModal}/>
        <List />
        <div className={styles.wr_button}>
          <Button handler={openModal} name="Открыть модалку" />
        </div>
    </main>
  )
}
