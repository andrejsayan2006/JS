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
]
console.log (`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

${gifts[0].id}- ${gifts[0].name}, Cost: ${gifts[0].price} tickets
${gifts[1].id}- ${gifts[1].name}, Cost: ${gifts[1].price} tickets
${gifts[2].id}- ${gifts[2].name}, Cost: ${gifts[2].price} tickets
${gifts[3].id}- ${gifts[3].name}, Cost: ${gifts[3].price} tickets
${gifts[4].id}- ${gifts[4].name}, Cost: ${gifts[4].price} tickets
${gifts[5].id}- ${gifts[5].name}, Cost: ${gifts[5].price} tickets
${gifts[6].id}- ${gifts[6].name}, Cost: ${gifts[6].price} tickets
${gifts[7].id}- ${gifts[7].name}, Cost: ${gifts[7].price} tickets
${gifts[8].id}- ${gifts[8].name}, Cost: ${gifts[8].price} tickets
${gifts[9].id}- ${gifts[9].name}, Cost: ${gifts[9].price} tickets`);






