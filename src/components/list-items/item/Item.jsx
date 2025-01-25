import React from 'react';
import style from './css/style.module.css';
import { Link } from 'react-router-dom';

export default function Item({data}) {
  return (
    <li className={style['userItem']}>
      <Link to={`/user/${data.id}`} className={style.link}>{data.name}</Link>
    </li>
  )
}
