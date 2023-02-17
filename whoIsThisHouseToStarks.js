/*На электронной карте Вестероса, которую реализовал Сэм, союзники Старков отображены зеленым кружком, враги — красным, а нейтральные семьи — серым.

Напишите для Сэма функцию whoIsThisHouseToStarks(), которая принимает на вход фамилию семьи и возвращает одно из трёх значений: 'friend', 'enemy', 'neutral'.

Правила определения:

Друзья ('friend'): 'Karstark', 'Tally'
Враги ('enemy'): 'Lannister', 'Frey'
Любые другие семьи считаются нейтральными*/
const whoIsThisHouseToStarks = (sentence) => {
const lastChar = sentence;
let sentenceType;
if (lastChar === 'Karstark' || lastChar === 'Tally') {
sentenceType = 'friend';
} else if (lastChar === 'Lannister' || lastChar === 'Frey') {
sentenceType = 'enemy';
} else {
sentenceType = 'neutral';
}
return sentenceType;
};
