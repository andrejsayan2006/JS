/* 
Функция isPalindrome() определяет, является ли слово палиндромом или нет. Палиндром это слово, которое читается одинаково в обоих направлениях.
Функция isNotPalindrome() проверяет что слово НЕ является палиндромом:
*/
const reverse = (s) => s.split('').reverse().join('');
const isPalindrome = (text) =>{
reverse.toLowerCase;
const lowCase= text.toLowerCase();
return lowCase === reverse(lowCase);
}
const isNotPalindrome = (text) => !isPalindrome(text);
