import { createPortal } from 'react-dom'
import styles from './style/style.module.css'
import { useEffect, useRef, useState } from 'react';
import Button from '../button/Button';

export default function Modal({open, handler}) {
    const [isLoad, setIsload] = useState(false);

    const modal = useRef();

    useEffect(() => {
        setIsload(true);
    }, [])

    useEffect(() => {
        if(open) {
            modal.current.showModal();
        } 
        
        if(modal.current && !open) {
            modal.current.close();
        };
    }, [open])

    // open={open}

    return isLoad && createPortal(
        <dialog ref={modal} className={styles.modal}>
            <div className={styles.content}>
                <p>Привет, я модалка</p>
                <Button handler={handler} name="Закрыть" />
            </div>
        </dialog>, 
        document.querySelector('#modal')
    )
}
