/*Реализуйте функцию printReversedWordBySymbol(), которая печатает переданное слово посимвольно, делает это в обратном порядке.*/

const printReversedWordBySymbol = (name) => {
let i = 0;
let revers = name.split('').reverse().join('');
while (i < revers.length) {
console.log(revers[i]);
i = i + 1;
}
};
