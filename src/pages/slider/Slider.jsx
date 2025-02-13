import React, { useState, useRef, useMemo, useEffect } from 'react';
import styles from './styles/style.module.css';

import img1 from '../../images/harley1.jpg';
import img2 from '../../images/harley2.jpg';
import img3 from '../../images/harley3.jpg';
import img4 from '../../images/harley4.jpg';
import img5 from '../../images/harley5.jpg';

import prev from '../../svg/card-product-arrow-prev.svg';
import next from '../../svg/card-product-arrow-next.svg';

const arrImg = [img1, img2, img3, img4, img5];

export default function Slider() {
  const [images, setImages] = useState(arrImg);
  const [prv, setPrv] = useState(false);
  const [sizeOffset, setSizeOffset] = useState(0);

  const slidesList = useRef();
  
  let stylesOffset = {
    transition: 'left 0.2s linear',
    position: 'absolute',
    top: '0',
    left: '0',
    // transform: `translateX(-${sizeOffset})`
  }

  useEffect(() => {
    setSizeOffset(slidesList.current.children[0].offsetWidth);
  }, [])

  const prevHandler = (e) => {
    console.log('prev')
    stylesOffset = {...stylesOffset, left: '-100px'}
    // setPrv(true);
  }


  const nextHandler = (e) => {
    console.log('next')
  }

  return (
    <div className={styles['wrapper-page']}>
      <div className={styles['wrapper-slider']}>

        <div className={styles.slider}>
          <ul 
            ref={slidesList} 
            className={styles['slides-list']} 
            // style={prv ? stylesOffset : {}}
            style={stylesOffset}
          >
            {images && images.map((img, i) => {
              return (
                <li key={i} className={styles['slides-item']}>
                  <img src={img} alt="" className={styles['slide-image']} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.controll}>
          <div className={styles.prev + ' ' + styles['controll-button']} onClick={prevHandler} >
            <img src={prev} alt="" />
          </div>
          <div className={`${styles.next} ${styles['controll-button']}`} onClick={nextHandler}>
            <img src={next} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}
// style={{transform: `translateX(0)`}}