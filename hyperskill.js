const input = require('sync-input');

function displayGifts() {
    console.log("Here's the list of gifts:\n");
    if (gifts.length != 0) //Пример 8
    {
        gifts.forEach(gift => {
            console.log(`${gift.id}- ${gift.name}, Cost: ${gift.price} tickets`);
        });
    }
    else console.log('Wow! There are no gifts to buy.');
}

function buyGift() {
    console.log('Enter the number of the gift you want to get:');
    const id = Number(input());
    //пример 4
    if (tickets > prices[0])
        {
        // пример 3
        if (id >= 1 && id <= 10) {
            if (isNaN(id)) {
                console.log(`Please enter a valid number!
            `);// пример 1/2
                return;
            }
            const chosenGiftIndex = gifts.findIndex(
                gift => gift.id === id
            );

            const chosenGift = gifts[chosenGiftIndex];
            if (typeof chosenGift === 'undefined') {
                console.log(`Wow! There are no gifts to buy.
        `)//There is no gift with that number! // пример 5
                return;
            }
            console.log(`Here you go, one ${chosenGift.name}!`);
            tickets -= chosenGift.price;
            gifts.splice(chosenGiftIndex, 1);
            console.log(`Total tickets: ${tickets}`);
        } else console.log(`There is no gift with that number!`);
    } else console.log(`You don't have enough tickets to buy this gift.`)
}
function addTickets() {
    console.log('Enter the ticket amount:');
    const ticketsToAdd = Number(input());
    if ((ticketsToAdd < 0 ) || (ticketsToAdd > 1001) || (isNaN(ticketsToAdd))){
        console.log ('Please enter a valid number between 0 and 1000.'); // пример 6/7
        return;
    }
    else (tickets += ticketsToAdd);
    displayTickets();
}

function displayTickets() {
    console.log(`Total tickets: ${tickets}`);
}

let tickets = 0;

const names = [
    'Teddy Bear',
    'Big Red Ball',
    'Huge Bear',
    'Candy',
    'Stuffed Tiger',
    'Stuffed Dragon',
    'Skateboard',
    'Toy Car',
    'Basketball',
    'Scary Mask'
];

const prices = [10, 5, 50, 8, 15, 30, 100, 25, 20, 75];

// Here we use the map() method to zip the two arrays together into objects,
// along with the ids
const gifts = names.map((name, index) => {
    return { name: name, price: prices[index], id: index + 1 };
});

console.log('WELCOME TO THE CARNIVAL GIFT SHOP!');
console.log('Hello friend! Thank you for visiting the carnival!');
displayGifts(gifts);
let choice = '5';
do {
    console.log(`
What do you want to do?`);
    console.log('1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop');
    choice = input();
    if (choice <= 5 && choice >=1 && !(typeof (choice) === String)) {
        switch (choice) {
            case '1':
                buyGift();
                break;
            case '2':
                addTickets();
                break;
            case '3':
                displayTickets();
                break;
            case '4':
                displayGifts();
                break;
            case '5':
                break;
            default:
                console.log('Invalid choice');
        }
    }
    else console.log (`Please enter a valid number!
    `);
} while (choice !== '5');
console.log('Have a nice day!');
