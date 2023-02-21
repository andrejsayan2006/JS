/*Реализуйте функцию filterString(), принимающую на вход строку и символ, и возвращающую новую строку, 
в которой удален переданный символ во всех его позициях. Регистр символов важен.*/
const filterString = (str, symbol) => {
let i = 0;
let result = '';
while (i < str.length) {
  if (str[i] != symbol){
    result = `${result}${str[i]}`;
  }
  i++
}
  return result;
}
