/*Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа. Если для числа нет объяснения, то возвращается null:*/
const getNumberExplanation = (count) => {
switch (count) {
case 666:
return 'devil number';
case 42:
return 'answer for everything';
case 7:
return 'prime number'
default:
return null;
}
};
