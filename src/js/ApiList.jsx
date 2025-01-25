import React from 'react';

export default async function ApiList() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const result = await response.json();

    return result;
  } catch (error) {
    console.log('Ошибка получения пользователей: ', error);
  }

  
}
