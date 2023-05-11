const input = require('sync-input');

function userHello (bot_name, birth_year) {
    console.log (`Hello! My name is ${bot_name}.
I was created in ${birth_year}.`);
}

function userName () {
    console.log("Please, remind me your name.");
    let name = input();
    console.log(`What a great name you have, ${name}!`);
    }

function userAge () {
    console.log(`Let me guess your age.
Enter remainders of dividing your age by 3, 5 and 7.`);
    let rem3 = Number(input());
    let rem5 = Number(input());
    let rem7 = Number(input());

    let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;
    console.log(`Your age is ${age}; that's a good time to start programming!`);
    }

function count () {
    console.log("Now I will prove to you that I can count to any number you want.");
    const number = input();
    for (let i=0; i<=number; i++){
        console.log(`${i} !`);
    }
}

function userTest () {
    console.log(`Let's test your programming knowledge.
Why do we use methods?
1. To repeat a statement multiple times.
2. To decompose a program into several small subroutines.
3. To determine the execution time of a program.
4. To interrupt the execution of a program.`);

    let question = input();
    while (question !=2) {
        console.log("Please, try again.");
        question = input();
    }
}
function end() {
    console.log("Completed, have a nice day!");
    console.log("Congratulations, have a nice day!");
}
userHello('Aid', '2020')  // change it as you need
userName();
userAge();
count();
userTest();
end();
