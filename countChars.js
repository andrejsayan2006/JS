/*Функция из теории учитывает регистр букв. То есть A и a с её точки зрения разные символы. Реализуйте вариант этой же функции, так чтобы регистр букв был не важен:*/
const countChars = (str, char) => {
let i = 0;
let count = 0;
let upStr = str.toUpperCase();
let upChar = char.toUpperCase();
while (i < upStr.length) {
if (upStr[i] === upChar) {
count = count + 1;
}
i = i + 1;
}
return count;
};
