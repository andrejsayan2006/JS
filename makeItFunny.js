/*Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. 
n – задается на входе в функцию.
Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.*/
const makeItFunny = (text, stepUpperCase) => {
  let i = 0;
  let result = '';

  while (i < text.length) {
    let char = text[i];
    if (++i % stepUpperCase === 0) {
      char = char.toUpperCase();
    }
    result = `${result}${char}`;
  }

  return result;
};
