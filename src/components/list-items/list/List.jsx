import React, { useContext } from 'react';
import style from './css/style.module.css';

import Item from '../item/Item';

import { usersContext } from '../../../App';

export default function List() {
    const data = useContext(usersContext);
    return (
        <ul className={style.ul}>
            {data && data.map(item => {
                return (
                    <Item key={item.id} data={item}/>
                )
            })}
        </ul>
    )
}
