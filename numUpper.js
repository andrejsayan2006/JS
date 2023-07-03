//Подсчет количества заглавных букв
let s = "thisIsAstring";
let numUpper = s.length - s.replace(/[A-Z]/g, '').length;
console.log(numUpper)
