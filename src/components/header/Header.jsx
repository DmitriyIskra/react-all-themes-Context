import React from 'react';
import styles from './css/style.module.css';

import { NavLink } from 'react-router-dom';

export default function Header() {
    const activeClass = ({isActive}) => isActive ? `${styles['link-nav']} ${styles.active}` : styles['link-nav'];

    return (
        <header className={styles.header}>
            <NavLink className={activeClass} to="/">Главная</NavLink>
            <NavLink className={activeClass} to="/slider">Слайдер</NavLink>
            <NavLink className={activeClass} to="/form">Форма</NavLink>
            <NavLink className={activeClass} to="/use-memo">useMemo</NavLink>
            <NavLink className={activeClass} to="/use-callback">useCallback</NavLink>
            <NavLink className={activeClass} to="/use-react-memo">react-memo</NavLink>
            {/* <NavLink >ToDo</NavLink> */}
        </header>
  )
}
