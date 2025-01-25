export default async function apiGetUser(id) {
    try {
        const response  = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        const result = await response.json();
   
        return result;
    } catch (error) {
        console.error('Ошибка получения данных пользователя')
    }
}