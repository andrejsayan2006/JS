/*Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву первого слова к верхнему регистру:*/
const name = 'arya';
const capitalize = () =>
console.log(name[0].toUpperCase() + name.substring(1));
capitalize();
