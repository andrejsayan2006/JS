/*Напишите код для суммирования всех зарплат и сохраните результат в переменной sum*/
let salaries = {
    Vasya: 20000,
    Anna: 18500,
    Petka: 35000
};
let sum = 0;
for (let key in salaries){
    sum +=salaries[key];
}
console.log(sum);
