/*Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки. 
Если первая буква заглавная, то строка возвращается без изменений. Если на вход передана пустая строка, функция должна вернуть пустую строку.*/

import { reverse } from '../../../src/hexlet/string.js';

const convertText = (string) => {
if (string === "") {
return "";
}
const reversable = string[0] !== string[0].toUpperCase()
return reversable ? reverse(string) : string;
};

export default convertText;
