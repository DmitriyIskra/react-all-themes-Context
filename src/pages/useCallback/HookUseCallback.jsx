/**
 * useCallback отличает то что в мервый аргумент передаем нажу функцию, а не передаем коллбек, а потом в него нашу функцию
 * 
 */


import { useCallback, useEffect, useMemo, useState } from 'react';
import styles from './styles/style.module.css';
import Button from '../../components/button/Button';
import TitlePage from '../../components/title-page/TitlePage';

// Функция с console.log
function showConsole() {
  console.log('обновление цифры');
} 

export default function HookUseCallback() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(true);

//   БЕЗ useCallback
    // showConsole();

    // useEffect(() => {
    //     showConsole();
    // }, [showConsole])



// ===================
//  C useCallback
// -------------------
  const r = useCallback(() => { // возвращает одну и ту же функцию по ссылке, т.е. при ререндере, функция не пересоздается, 
    console.log('Поменялась тема');  // за чем и следит useEffect
  }, []); 


  useEffect(() => {
    r();
  }, [theme, r]) // при смене темы и ререндере
  
  
  const changeNumber = e => {
    setNumber(e.target.value)
  };
  const changeTheme = () => setTheme(prev => !prev);

// Мы мемоизировали Button
  return (
    <div className={styles.wrapper}>
      <TitlePage val='HookUseCallback' />
    <div>
      <input type="number" name="number" id="" onChange={changeNumber} value={number} />
      {useMemo(() => <Button handler={changeTheme} name="Change theme" />, [])} 
    </div>
    <div className={`${styles.theme} ${styles[theme ? 'white' : 'dark']}`}>{number}</div>
    
     </div>
  )
}
  