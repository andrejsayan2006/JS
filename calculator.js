/*Калькулятор*/

let numberA = Number (prompt('Введите первое число' , 0));
let numberB = Number (prompt('Введите второе число' , 0));
let numberC = prompt('Что делаем? Складываем +, вычитаем -, умножаем *, делим /?');
let result;

if (numberC == ('+' || '-' || '*' || '/')) {
    if (Number.isFinite(numberA && numberB) == true) {
        switch (numberC) {
            case '+':
                result = (numberA + numberB);
                break
            case '-':
                result = numberA - numberB;
                break
            case '*':
                result = numberA * numberB;
                break
            case '/':
                result = numberA / numberB;
                break
        }
        alert(result);
    } else {
        if (Number.isFinite(numberA) == false)
            alert('Расчет невозможен, первое значение не число');
        else {
            alert('Расчет невозможен, второе значение не число');
        }
    }
}
else {
    alert ('Не верный арифмитический оператор');
}
