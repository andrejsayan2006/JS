/* Завершите squareNumberфункцию, которая должна быть асинхронной функцией. 
Он возвращает обещание, которое разрешается в квадрат заданного числа. 
Вы должны зарегистрировать окончательный результат (квадрат числа), 
а затем аналогичным образом зарегистрировать ошибку в случае отклонения обещания. */
async function squareNumber(number) {
    return Math.pow(number, 2);
}

squareNumber(4)
    .then((response) => console.log(response))
    .catch((error) => console.log(error)
    );
