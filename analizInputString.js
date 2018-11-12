'use strict';

// подключаем ввод с консоли через модуль readline
const readline = require('readline');

// открываем поток для считывания и записи
const string = readline.createInterface({
// ввод
  input: process.stdin,
// вывод
  output: process.stdout
});
// разделители
var regexpInputBot=/\s|\d|[.]|[,]|[;]|[:]|[!]|[?]|[-]|[_]/;

// ввод текста, иммитируем сообщени от бота
// strokaBot - переменная, которая содержит сообщение от бота
string.question('Введите текст: ', strokaBot => {
// arrayStrokaBot - строка бота разтитая в массив, разделение пробелом
  const arrayStrokaBot = strokaBot.split(regexpInputBot);
// [0] - использует первый элемент строки
  console.log(arrayStrokaBot[0]);
//  console.log(arrayStrokaBot[1]);
  string.close();
});
