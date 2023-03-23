/*Напишите код для суммирования всех зарплат и сохраните результат в переменной sum
Добавил от себя вывод, если одно из полей не содержит цифры*/
let salaries = {
    Vasya: 'aaaa',
    Anna: 'bbbb',
    Petka: 'cccc',
};
let sum = 0;
let errorSymbol = 0;
for (let key in salaries) {
    if (typeof salaries[key] !== 'number') {
        errorSymbol = (`Ключ: ${key} cодержит не число, а следующий символ: ${salaries[key]}`);
        console.log(`Не верные значения в одном из свойств объекта, суммирование его пропустило! \n${errorSymbol}`);
    } else if (typeof salaries[key] == 'number') {
        sum += salaries[key];
    }
}
console.log(`Сумма значений составила: ${sum}`);
