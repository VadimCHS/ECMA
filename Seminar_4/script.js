// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) 
// в качестве аргумента и использует fetch для получения данных о пользователе с заданным 
// ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными 
// о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен 
// быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. 
// Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью 
// response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, 
// функция отклоняет промис с сообщением об ошибке.

const url = 'https://jsonplaceholder.typicode.com/users';

async function getUserData(url, userId) {
    try {
        const res = await fetch(url + `/${userId}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const userId = 1;

const userData =  getUserData(url, userId);

console.log(`Пользователь с ID: ${userId}`);
console.log(userData);

// ""Отправка данных на сервер""

// Реализуйте функцию saveUserData, которая принимает объект с данными о 
// пользователе в качестве аргумента и использует fetch для отправки этих 
// данных на удаленный сервер для сохранения. Функция должна возвращать промис, 
// который разрешается, если данные успешно отправлены, или отклоняется в случае 
// ошибки.

// *Подсказка *
// // Пример использования функции
// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };

// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });

// saveUserData использует fetch для отправки данных о пользователе на удаленный 
// сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием 
// типа содержимого application/json и сериализует объект с данными о пользователе в 
// JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция 
// разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

async function saveUserData(url, user) {
    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    };

    try {
        const res = await fetch(url, init);
        // const data = await res.json();
        // return data;
    } catch (error) {
        console.log(error);
    }
}


const user = {
    id: 50,
    name: 'John Smith',
    age: 30,
    email: 'john@example.com',
};

saveUserData(url, user)
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch(error => {
        console.log(error.message);
    });


// ""Изменение стиля элемента через заданное время""

// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время 
// задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента 
// через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"


function changeStyleDelayed(elId, delay) {
    setTimeout(() => {
        const element = document.getElementById(elId);
        if (element) {
            element.style.color = 'red';
        }
    }, delay);
}

const delay = 2000;

changeStyleDelayed('myElement', delay); // Через 2 секунды изменяет стиль элемента с id 'myElement'"