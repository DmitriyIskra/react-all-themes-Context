import styles from './style/style.module.css';

export default function Button({handler, name}) {
  return (
    <button onClick={handler && handler} className={styles.button}>{name}</button>
  )
}
