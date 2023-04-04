/*На этом этапе ваша программа должна:

Распечатайте приветственные и поздравительные сообщения.
Распечатайте список подарков с новой информацией.*/

let gifts = [
        { name: 'Teddy Bear', id: 1, price: 10},
        { name: 'Big Red Ball', id: 2, price: 5},
        { name: 'Huge Bear', id: 3, price: 50},
        { name: 'Candy', id: 4, price: 8},
        { name: 'Stuffed Tiger', id: 5, price: 15},
        { name: 'Stuffed Dragon', id: 6, price: 30},
        { name: 'Skateboard', id: 7, price: 100},
        { name: 'Toy Car', id: 8, price: 25},
        { name: 'Basketball', id: 9, price: 20},
        { name: 'Scary Mask', id: 10, price: 75}
];
function listOfGifts() {
        for (key of gifts) {
                console.log(`${key.id}- ${key.name}, Cost: ${key.price} tickets`);
        }
}
console.log (`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:
`)
listOfGifts();






