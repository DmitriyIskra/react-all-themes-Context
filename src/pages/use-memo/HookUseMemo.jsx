import { useEffect, useMemo, useState } from 'react';
import styles from './styles/style.module.css';

// тяжелая функция для имитации нагрузки и задержки
function heavyComputation(number) {
  for(let i = 0; i <= 1999999999; i++) {}
  return number * 2
} 

export default function HookUseMemo() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(true);

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


  return (
    <div className={styles.wrapper}>
    <div>
      <input type="number" name="number" id="" onChange={changeNumber} value={number} />
      <button type='button' onClick={changeTheme}>Change theme</button>
    </div>
    <div className={`${styles.theme} ${styles[theme ? 'white' : 'dark']}`}>{valComp}</div>
    
    </div>
  )
}
 