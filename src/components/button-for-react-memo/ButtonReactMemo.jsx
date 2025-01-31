import styles from './style/style.module.css';
import { memo } from 'react';

/**
 * React memo реагирует на изменения пропсов, соответственно если передаем примитивы
 * то значение не меняется, но если объект в широком смысле (функция, массив), то что сравнивается по ссылке
 * то соответственно будет получаться что пропс поменялся
 * */ 

const ButtonReactMemo = memo(
  ({ handler, name }) => {

    const s = () => console.log('Заново созданный button react memo');
    s();

    return (
      <button onClick={handler && handler} className={styles.button}>{name}</button>
    )
  }
)


export default ButtonReactMemo;