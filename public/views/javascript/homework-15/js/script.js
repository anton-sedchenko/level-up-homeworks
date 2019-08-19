'use strict';
// Unit link - http://web.archive.org/web/20190405104501/https://learn.javascript.ru/bind

// Task 1 // Смотрел ответы.
// 1) Сохраняем в массив аргументы, начиная со второго.
// 2) создали функцию обертку и её же возвращаем.
// 3) обертка создает новый массив из arguments, а затем добавляет их к аргументам из первого шага через карирование.
// 4) передаем вызов функции с контекстом и набором аргументов.

// Task 2
// Ответ 'Hello', т.к. мы привязали этот контекст к ф-ции и потом вызвали её как метод объекта.

// Task 3
// Ответ "Вася", т.к. этот котекст был присвоен первым, после чего контекст уже присваивается возвращаемой обертке, что ни на что не повлияет.

// Task 4
// Ответ undefined, т.к. в bind присваивается обертка функции sayHi с привязаным контекстом. У этой функции нет свойства bind. Я думаю, если бы даже оно было, то была бы потеря контекста и тоже undefined.

// Task 5 не решил

// Task 6 не понял как работает выделеный участок кода, который надо исправить.

// Unit link - http://web.archive.org/web/20190405104501/https://learn.javascript.ru/decorator

// Task 1
function work(a) {
  let result = 0;
  return result += a;
}

function makeLogging(f, log) {
  return function (a) {
    let result = f.apply(this, arguments);
    log.push(a);
    return result;
  }
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
  console.log( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}
