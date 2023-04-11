/*Теперь, когда у вас есть список подарков с деталями, посетители сами решат, чего они хотят.
Чтобы упростить ввод данных из консоли, мы используем библиотеку JS; ознакомьтесь с документацией , чтобы узнать, как вы можете ее использовать.
Во-первых, давайте получим этот ввод от посетителя:
What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts
Посетитель вводит соответствующий номер, чтобы выбрать вариант. Также посетитель будет иметь 100 билеты в начале.
В первом варианте мы попросим еще один ввод:Enter the number of the gift you want to get:
Посетитель введет id/номер заказа подарка, а мы выведем название подарка:Here you go, one %GIFT_NAME%!
Затем мы вычтем сумму билета выбранного подарка из общего количества билетов посетителя и покажем общее количество билетов:Total tickets: 90
Во втором варианте посетитель введет количество билетов, которое нужно добавить с помощью этого ввода:Enter the ticket amount:
После этого мы снова покажем общее количество билетов!
В третьем варианте покажем общее количество билетов, которое есть у посетителя:Total tickets: 90
И в последнем варианте снова показать список подарков, как в примере!
После любого из этих случаев выведите это сообщение перед завершением программы:Have a nice day!
*/

const input = require('sync-input');
let totalTickets = 100;
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
`);
listOfGifts();

let choice = Number(input(`
What do you want to do? 
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts
`));

switch (choice) {
        case 1:
           let choiceGift = Number(input(`Enter the number of the gift you want to get: `));
          {switch (choiceGift) {
           case 1: {
           console.log(`Here you go, one ${gifts[0].name}!
Total tickets: ${totalTickets - gifts[0].price}
Have a nice day!`);
           break;
           }
           case 2: {
           console.log(`
Here you go, one ${gifts[1].name}!
Total tickets: ${totalTickets - gifts[1].price}
Have a nice day!`);
            break;
            }
            case 3: {
            console.log(`
Here you go, one ${gifts[2].name}!
Total tickets: ${totalTickets - gifts[2].price}
Have a nice day!`);
            break;
            }
            case 4: {
            console.log(`
Here you go, one ${gifts[3].name}!
Total tickets: ${totalTickets - gifts[3].price}
Have a nice day!`);
             break;
             }
             case 5: {
             console.log(`
Here you go, one ${gifts[4].name}!
Total tickets: ${totalTickets - gifts[4].price}
Have a nice day!`);
             break;
             }
             case 6: {
             console.log(`
Here you go, one ${gifts[5].name}!
Total tickets: ${totalTickets - gifts[5].price}
Have a nice day!`);
             break;
             }
             case 7: {
             console.log(`
Here you go, one ${gifts[6].name}!
Total tickets: ${totalTickets - gifts[6].price}
Have a nice day!`);
             break;
             }
             case 8: {
             console.log(`
Here you go, one ${gifts[7].name}!
Total tickets: ${totalTickets - gifts[7].price}
Have a nice day!`);
             break;
             }
             case 9: {
             console.log(`
Here you go, one ${gifts[8].name}!
Total tickets: ${totalTickets - gifts[8].price}
Have a nice day!`);
              break;
              }
              case 10: {
              console.log(`
Here you go, one ${gifts[9].name}!
Total tickets: ${totalTickets - gifts[9].price}
Have a nice day!`);
              break;
              }
              default: {console.log('Menu item not selected');
              break;
              }
             }
             break;
            }

        case 2: {
                let choiceTicket = Number(input(`Enter the ticket amount: `));
                 console.log (`Total tickets: ${choiceTicket+totalTickets}
Have a nice day!`);
                }
                break;
        case 3: {
                console.log (`Total tickets: ${totalTickets}
Have a nice day!`);
                }
                break;
        case 4: {
                console.log(`Here's the list of gifts:
                `);
                listOfGifts();
                }
                break;
        default:
                console.log('Menu item not selected');
                break;
}

