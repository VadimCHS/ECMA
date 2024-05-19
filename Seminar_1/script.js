// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
// найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с 
// двумя методами: increment и decrement. Метод increment должен увеличивать значение 
// счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение 
// счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter(initValue) {
    let count = initValue;
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        },
        getCount() {
            return count;
        }
    }
}

const counter = createCounter(10);

console.log(counter.decrement());
console.log(counter.increment());
counter.decrement();
console.log(counter.getCount());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой 
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный 
// элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(rootElement, className) {

    if (rootElement.classList.contains(className)) {
        return rootElement;
    }

    for (let i = 0; i < rootElement.children.length; i++) {
        const foundElement = findElementByClass(rootElement.children[i], className);
        if (foundElement && foundElement !== "Элемент не найден") {
            return foundElement;
        }
    }
    
    return "Элемент не найден";
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);


