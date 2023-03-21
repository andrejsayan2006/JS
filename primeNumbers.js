Напишите код, который выводит все простые числа из интервала от 2 до n

let number = 20;
primeNumbers:
    for (let i = 2; i <= number; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue primeNumbers;
        }
        alert( i );
    }
