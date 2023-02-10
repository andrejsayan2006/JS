let data = [5, -13, 3, 21, 0, 9]
let initialValue = 0;
let sumWithInitial = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
console.log(isFinite(sumWithInitial));