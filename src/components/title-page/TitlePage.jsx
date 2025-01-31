import React from 'react'
import styles from './style/style.module.css';

export default function TitlePage({val}) {
  return (
    <h2 className={styles.title}>{val}</h2>
  )
}
