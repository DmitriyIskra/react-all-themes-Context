import { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './styles/style.module.css';
import ButtonReactMemo from '../../components/button-for-react-memo/ButtonReactMemo';
import TitlePage from '../../components/title-page/TitlePage';

// Функция с console.log
function showConsole() {
    console.log('обновление цифры');
}

/**
 * React memo реагирует на изменения пропсов, соответственно если передаем примитивы
 * то значение не меняется, но если объект в широком смысле (функция, массив), то что сравнивается по ссылке
 * то соответственно будет получаться что пропс поменялся
 * */ 

const ReactMemo = () => {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState(true);

    const r = useCallback(() => { // возвращает одну и ту же функцию по ссылке, т.е. при ререндере, функция не пересоздается, 
        console.log('Поменялась тема');  // за чем и следит useEffect
    }, []);


    useEffect(() => {
        r();
    }, [theme, r]) // при смене темы и ререндере


    const changeNumber = e => {
        setNumber(e.target.value)
    };
    const changeTheme = useCallback(() => setTheme(prev => !prev), []); // для правильной работы React.memo

    // Мы мемоизировали Button
    return (
        <div className={styles.wrapper}>
            <TitlePage val='React.memo' />
            <div>
                <input type="number" name="number" id="" onChange={changeNumber} value={number} />
                <ButtonReactMemo handler={changeTheme} name="Change theme" />
            </div>
            <div className={`${styles.theme} ${styles[theme ? 'white' : 'dark']}`}>{number}</div>
        </div>
    )
}

export default ReactMemo;