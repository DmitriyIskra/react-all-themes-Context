import styles from './style/style.module.css';

const Button = ({handler, name}) => {

  const s = () => console.log('Заново созданный button');
  s();

  return (
    <button onClick={handler && handler} className={styles.button}>{name}</button>
  )
}


export default Button;