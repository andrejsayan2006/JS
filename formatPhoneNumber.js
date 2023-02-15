/*Реализуйте функцию, которая проверяет формат указанного телефона. Если телефон начинается с +, значит это международный формат.*/
const isInternationalPhone = (string) => {
const firstLetter = string[0];
return firstLetter === '+'
};
