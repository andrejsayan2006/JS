/*Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку:*/

const joinNumbersFromRange = (oneNumber, twoNumber) => {
let i = oneNumber;
let result = '';
while (i <= twoNumber) {
result = `${result}${i}`
i++;
}
return result;
};
