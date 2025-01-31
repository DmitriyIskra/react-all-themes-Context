import { useEffect, useMemo, useState } from 'react';
import styles from './styles/style.module.css';
import Button from '../../components/button/Button';
import TitlePage from '../../components/title-page/TitlePage';
// тяжелая функция для имитации нагрузки и задержки
function heavyComputation(number) {
  for(let i = 0; i <= 1999999999; i++) {}
  return number * 2
} 

// Функция с console.log
function showConsole() {
  console.log('обновление цифры');
} 

export default function HookUseMemo() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(true);

  // ВАРИАНТ 1 ПОПРОЩЕ

  //   showConsole();
  const r = useMemo(() => showConsole(), [number]); 



  // ВАРИАНТ 2 "СЛОЖНЕЕ"

  // таким образом при клике на смена темы, heavyComputation не будет
  // каждый раз вызываеться при перерендеринге, так мы закешировали значение number
  const valComp = useMemo(() => heavyComputation(number), [number]);
  // heavyComputation(number)

  const actuallyTheme = theme ? 'white' : 'dark';

  // либо можем кешировать c useMemo, либо использовать useEffect
  useMemo(() => {
    console.log(actuallyTheme)
  }, [actuallyTheme]);
  // console.log(actuallyTheme)
  useEffect(() => {
    console.log('changeTheme: ', actuallyTheme);
  }, [actuallyTheme]);
  
  const changeNumber = e => {
    setNumber(e.target.value)
  };
  const changeTheme = () => setTheme(prev => !prev);

// Мы мемоизировали Button (он не будет перерендерен)
  return (
    <div className={styles.wrapper}>
      <TitlePage val='HookUseMemo' />
    <div>
      <input type="number" name="number" id="" onChange={changeNumber} value={number} />
      {useMemo(() => <Button handler={changeTheme} name="Change theme" />, [])} 
    </div>
    <div className={`${styles.theme} ${styles[theme ? 'white' : 'dark']}`}>{valComp}</div>
    
    </div>
  )
}
 