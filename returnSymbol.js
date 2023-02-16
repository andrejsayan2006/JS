/*Реализуйте функцию getLetter(), которая функцию (по порядковому номеру, а не по его индексу) 
и возвращает его наружу. Если такого символа нет, то функция возвращает пустую строку.*/
const name = 'Hexlet';
const getLetter = (letter) => {
return (name.charAt(letter - 1)) || "";
}
console.log (getLetter(6));
