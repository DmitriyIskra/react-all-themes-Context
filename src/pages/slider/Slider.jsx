import React, { useState, useRef, useMemo, useEffect } from 'react';
import styles from './styles/style.module.css';
import SliderList from '../../components/slider-list/SliderList';

import img1 from '../../images/harley1.jpg';
import img2 from '../../images/harley2.jpg';
import img3 from '../../images/harley3.jpg';
import img4 from '../../images/harley4.jpg';
import img5 from '../../images/harley5.jpg';

import prev from '../../svg/card-product-arrow-prev.svg';
import next from '../../svg/card-product-arrow-next.svg';


export default function Slider() {
  const [images, setImages] = useState([]);
  const [offset, setOffset] = useState({offset: 0, direction: '', transition: ''});

  
  // const slidesList = useRef();
  
  useEffect(() => {
    const arrImg = [img1, img2, img3, img4, img5];
    setImages(arrImg)
  }, [])


  
  const prevHandler = (e) => {
    console.log('prev')

    setOffset({
      offset: 196,
      direction: 'prev',
      transition: 'transform 0.2s linear',
    });

  }

  // console.log(images)
  
  const nextHandler = (e) => {
    console.log('next')
  }

  return (
    <div className={styles['wrapper-page']}>
      <div className={styles['wrapper-slider']}>

        <div className={styles.slider}>
          <SliderList images={images} setImages={setImages} offset={offset} setOffset={setOffset} />
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