/*Реализуйте функцию even(), которая возвращает новую строку, состоящую из чётных символов исходной строки.*/
const even = (str) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    if (i % 2 !== 0) {
      result = `${result}${str[i]}`;
    }
    i = i + 1;
  }
  return result;
};
