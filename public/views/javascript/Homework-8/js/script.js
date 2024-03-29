'use strict';
// Unit link - https://learn.javascript.ru/array#tasks

// Task 1
// var lastElement = goods[goods.length - 1];

// Task 2
// goods.push('Компьютер');

// Task 3
// var styles = ['Джаз', 'Блюз'];
// console.log(styles);
// styles.push('Рок-н-Ролл');
// console.log(styles);
// styles[styles.length - 2] = 'Классика';
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// Task 4
// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// var min = 0;
// var max = arr.length - 1;
// var rand = min + Math.floor(Math.random() * (max + 1 - min));
// console.log(arr[rand]);
 
// Task 5
// function isNumeric (n) {
//   return !isNaN(parseInt(n)) && isFinite(n);
// }

// let arr = [];
// let char = 1;
// let sum = 0;

// while (isNumeric(char)) {
//   char = (prompt('Введите число для сложения', ''));
//   if (isNumeric(char)) {
//     arr.push(+char);
//   }
// }

// for (var i = 0; i < arr.length; i += 1) {
//   sum += arr[i]; 
// }
// console.log(sum);

// Task 6
// Код выведет 5 в обоих случаях, так как во вторую переменную присвоена ссылка на первый объект. Как пара ключей от одной квартиры, изменения будут вноситься в один и тот же объект.

// Task 7
// var arr = ['test', 2, 1.5, false];
// function find (arr, value) {
//   let n = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === value) {
//       n += 1;
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(find(arr, 'test')); // 0
// console.log(find(arr, 2)); // 1
// console.log(find(arr, 1.5)); // 2
// console.log(find(arr, 0)); // -1

// Task 8
// var arr = [5, 4, 3, 8, 0];

// function filterRange (arr, a, b) {
//   let filtered = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] >= a && arr[i] <= b) {
//       filtered.push(arr[i]);
//     }
//   }
//   return filtered;
// }

// console.log(filterRange(arr, 3, 5)); // [5, 4, 3]

// Task 9 // Решето Эратосфена
// function simpleNums (n) {
//   let p = 2;
//   let arr = [,,];
//   let sum = 0;
//   for (let i = 2; i < n; i += 1) {
//     arr.push(true);
//   }
//   do {
//     for (let i = p * 2; i < n; i += p) {
//       arr[i] = false;
//     }
//     for (let i = p + 1; i < n; i += 1) {
//       if (arr[i] = true) {
//         p = i;
//         break;
//       }
//     }
//   } while (p * p < n);
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === true) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(simpleNums(100));


// Task 10
// function getMaxSubSum (arr) {
//   let tmpSum = 0;
//   let maxSum = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     tmpSum += arr[i];
//     if (tmpSum < 0) {
//       tmpSum = 0;
//     } else {
//       maxSum = Math.max(tmpSum, maxSum);
//     }
//   }
//   return console.log(maxSum);
// }
// getMaxSubSum([-1, 2, 3, -9]); // 5
// getMaxSubSum([2, -1, 2, 3, -9]); // 6
// getMaxSubSum([-1, 2, 3, -9, 11]); // 11
// getMaxSubSum([-2, -1, 1, 2]); // 3
// getMaxSubSum([100, -9, 2, -3, 5]); // 100
// getMaxSubSum([1, 2, 3]); // 6 (неотрицательные - берем всех)

// Unit link: https://learn.javascript.ru/array-methods

// Task 1
// var obj = {
//   className: 'open menu'
// }
// function addClass (obj, cls) {
//   let result = '';
//   let arr = obj.className.split(' ');
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === cls) {
//       return 'Класс уже существует';
//     }
//   }
//   if (obj.className.length > 0) {
//     obj.className += ' ' + cls;
//   } else {
//     obj.className += cls;
//   }
//   return obj.className;
// }
// console.log(addClass(obj, 'new'));
// console.log(addClass(obj, 'open'));
// console.log(addClass(obj, 'me'));

// Task 2
// function camelize (str) {
//   let result = '';
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] !== '-') {
//       result += str[i];
//     } else {
//       result += str[i + 1].toUpperCase();
//       i += 1;
//     }
//   }
//   return result;
// }
// console.log(camelize('background-color'));
// console.log(camelize('list-style-image'));
// console.log(camelize('-webkit-transition'));

// Task 3
// var obj = {
//   className: 'open menu'
// };

// function removeClass (obj, cls) {
//   let arr = obj.className.split(' ');
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === cls) {
//       arr.splice(i, 1);
//       i -= 1;
//     }
//   }
//   obj.className = arr.join(' ');
//   return obj.className;
// }

// console.log(removeClass(obj, 'open')); // obj.className='menu'
// console.log(removeClass(obj, 'blabla')); // без изменений (нет такого класса)
// var obj = {
//   className: 'my menu menu'
// };
// console.log(removeClass(obj, 'menu'));

// Task 4
// var arr = [5, 3, 8, 1];
// function filterRangeInPlace (arr, a, b) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if ((arr[i] < a) || (arr[i] > b)) {
//       arr.splice(i, 1);
//       i -= 1;
//     }
//   }
//   return arr;
// }
// console.log(filterRangeInPlace(arr, 1, 4));

// Task 5
// var arr = [5, 2, 1, -10, 8];
// function sortNumDESC (a, b) {
//   return b - a;
// }
// arr.sort(sortNumDESC);
// console.log(arr); // 8, 5, 2, 1, -10

// Task 6 // Разобрали на уроке.

// var arr = ['HTML', 'JavaScript', 'CSS'];
// var arrSorted = arr.slice().sort((a, b) => a.localeCompare(b));
// console.log(arrSorted);


// console.log(arrSorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без изменений)

// Task 7
// Случайный порядок в массиве. Не решил.

// Task 8
// var vasya = {name: 'Вася', age: 23};
// var masha = {name: 'Маша', age: 18};
// var vovochka = {name: 'Вовочка', age: 6};
// var people = [vasya, masha, vovochka];

// function sortByField (arr, field) {
//   people.sort(function (a, b) {
//     return a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
//   });
// }
// sortByField(people, 'age');
// console.log(people[0].age) // 6

// Task 9 Не решил. 
// var list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList (list) { // Выводит элементы списка по очереди, при помощи цикла.
//   while (list) {
//     console.log(list.value);
//     list = list.next;
//   }
// }
// printList(list);

// function printList (list) { // Выводит элементы списка по очереди, при помощи рекурсии.
//   console.log(list.value);
//   if (list.next) {
//     printList(list.next);
//   }
// }
// printList(list);

// function printReverseList (list) { // Выводит элементы списка в обратном порядке, при помощи рекурсии.
//   if (list.next) {
//     printReverseList(list.next);
//   }
//   console.log(list.value);
// }
// printReverseList(list);

// function printReverseList (list) { // Выводит элементы списка в обратном порядке, используюя не рекурсию, а цикл.
//   let arr = [];
//   while (list) {
//     arr.push(list.value);
//     list = list.next;
//   }
//   for (let i = arr.length; i >= 0 ; i -= 1) {
//     console.log(arr[i]);
//   }
// }
// printReverseList(list);


// Task 10 Не решил. Разобрали на уроке.
// Отфильтровать анаграммы.

// Task 11
// Оставить уникальные элементы массива
// var strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];
// var uniqueStrings = [];

// function unique (arr) {
//   for (let i = 0; i < strings.length; i += 1) {
//     if (uniqueStrings.indexOf(strings[i]) === -1) {
//       uniqueStrings.push(strings[i]);
//     }
//   }
//   return uniqueStrings;
// }

// console.log(unique(strings)); // кришна, харе, 8-()

// Unit link: https://learn.javascript.ru/array-iteration

// Taks 1
// var arr = ["Есть", "жизнь", "на", "Марсе"];
// let elementsLen = arr.map(function (item) {
//   return item.length;
// });
// console.log(elementsLen); // 4,5,2,5

// Task 2
// var arr = [1, 2, 3, 4, 5]; // 1, 3, 6, 10, 15
// var arr2 = [-2, -1, 0, 1]; // -2, -3, -3, -2

// function getSums (arr) {
//   var result = [];
//   arr.reduce(function (acc, item) {
//     result.push(acc + item);
//     return acc + item;
//   }, 0);
//   return result;
// }

// console.log(getSums(arr));

// Additional task 1 // + every разобрали на уроке.
// const arr = [1, 10, 100, 1000, 10000]; // Проверка массива на положительные или отрицаельные элементы. Если все положительные - true. Иначе false.
// const arr = [1, 10, 100, 1000, 10000];
// function every (arr, cb) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (!cb(arr[i], i)) {
//       return false;
//     }
//   }
//   return true;
// }
// const res = every(arr, function (n) {
//   return n % 2 === 0;
// });
// console.log(res);

// Additional task 2
// const arr = [1, 0, 100, 1000, 10000]; // Проверка любого элемента массива на равество нулю. Если хотя бы 1 равен нулю, то true.

// const arr = [1, 10, 100, 1000, 10000];

// function some (arr, cb) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (cb(arr[i], i)) {
//       return true;
//     }
//   }
//   return false;
// }
// const res = some(arr, (n) => n === 0);
// console.log(res);

// Additional task 3 // + Рзобрали на уроке.
// filter. Создать массив в который войдут элементы из массива arr, которые больше 10.
// const arr = [1, 10, 100, 1000, 10000];

// function filter (arr, cb) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (cb(arr[i], i) === true) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const oddNums = filter(arr, function (n) {
//   return n % 2 !== 0;
// });
// console.log(oddNums);

// Additional task 4
// const arr = ['HTML', 'CSS', 'JavaScript']; // map. Создать массив с длинами элементов массива arr.
// const result = [];

// function map (arr, cb) {
//   for (let i = 0; i < arr.length; i += 1) {
//     result.push(cb(arr[i], i));
//   }
//   return result;
// }

// const arrLen = map(arr, (n) => n.length);

// console.log(arrLen);

// Additional task 5 // + Разобрали на уроке
// const arr = [1, 10, 100, 1000, 10000]; // reduce. Получить сумму всех элементов массива.

// function reduce (arr, cb, initialValue = undefined) {
//   let acc = initialValue !== undefined ? initialValue : arr[0];
//   let i = initialValue !== undefined ? 0 : 1;
//   for (; i < arr.length; i += 1) {
//     acc = cb(acc, arr[i], i);
//   }
//   return acc;
// }

// const sum = reduce(arr, (acc, item) => acc + item);
// console.log(sum); // 11111

// Additional task 6.
// const arr = [1, 10, 100, 1000, 10000]; // reduceRight. Получить сумму всех элементов массива, но справа-налево.

// function reduceRight (arr, cb, initialValue = undefined) {
//   let acc = initialValue !== undefined ? initialValue : arr[arr.length - 1];
//   let i = initialValue !== undefined ? arr.length - 1 : arr.length - 2;
//   for (; i >= 0; i -= 1) {
//     acc = cb(acc, arr[i], i);
//   }
//   return acc;
// }

// const sum = reduceRight(arr, (acc, item) => acc + item);
// console.log(sum); // 11111
