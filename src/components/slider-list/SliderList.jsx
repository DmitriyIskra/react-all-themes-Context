import React, { useRef } from 'react';
import styles from './css/style.module.css';

export default function SliderList({images, setImages, offset, setOffset}) {
    // console.log(images)

    const list = useRef()

    const transitionEndHandler = (e) => {
        if(offset.direction === 'prev') {
            console.log('transition ' + offset.direction)
            const newArrImg = images;
            const firstEl = newArrImg.shift();
            newArrImg.push(firstEl)

            setImages(newArrImg);
            setOffset({
                offset: 0,
                direction: 'prev',
                transition: ''
            });
            console.log('transitionend ' + images)
            console.log(list.current.children[0].offsetWidth)
        }
    }

    return (
        <ul ref={list} onTransitionEnd={transitionEndHandler}
            className={styles['slides-list']} 
            style={{
                transition: `${offset.transition}`,
                transform: `translateX(-${offset.offset * 100 / 1920}vw)`,
            }}
            
        >
            {images && images.map((img, i) => {
                return (
                <li key={i} className={styles['slides-item']}>
                    <img src={img} alt="" className={styles['slide-image']} />
                </li>
                );
            })}
        </ul>
    )
}
