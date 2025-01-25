import React, { useMemo } from 'react';
import style from './css/style.module.css';

import useUserAbout from '../../hooks/useUserAbout';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function UserAbout() {
    const {id} = useParams();
    const [user] = useUserAbout(id);

    const navigation = useNavigate();

    console.log(user)
    const c = {
        fontWeight : 700,
    }

    const button = {
        cursor: 'pointer',
        height: '50px',
        width: '150px',
        backgroundColor: '#fff',
        color: '#000',
        border: '1px solid grey',
    }

    const goBack = () => navigation(-1); // можно передать любой конкретный путь в виде строки

    return (
        <main className={style['main__user-about']}>
            <button onClick={goBack} style={button}>Назад</button>
            <div>
                <h1>Страница конкретного пользователя</h1>

                <div className={style.user__wrapper} style={c}>
                    <p>Имя пользователя {user?.name}</p> 
                    <p>Почта пользователя {user?.email}</p> 
                    <p>Компания {user?.company?.name}</p>
                </div>
            </div>
        </main>
    )
}
