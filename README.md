convertText.js 
Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки. Если первая буква заглавная, то строка возвращается без изменений. Если на вход передана пустая строка, функция должна вернуть пустую строку.

checkYear.js 
Реализуйте функцию isLeapYear(), которая определяет, является ли год високосным или нет. Год будет високосным, если он кратен (то есть делится без остатка) 400 или он одновременно кратен 4 и не кратен 100.

formatPhoneNumber.js 
Реализуйте функцию, которая проверяет формат указанного телефона. Если телефон начинается с +, значит это международный формат.

getHiddenCard.js 
Реализуйте функцию getHiddenCard(), которая принимает на вход номер кредитки (состоящий из 16 цифр) в виде строки и возвращает его скрытую версию, 
которая может использоваться на сайте для отображения. Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581. 
Другими словами, функция заменяет первые 12 символов, на звездочки. Количество звездочек регулируется вторым необязательным параметром. Значение по умолчанию — 4.

getNumberExplanation.js
Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа. Если для числа нет объяснения, то возвращается null:

printNumbers.js
Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке. Для этого нужно идти от верхней границы к нижней. 
То есть счётчик должен быть инициализирован максимальным значением, а в теле цикла его нужно уменьшать до нижней границы.

multiplyNumbersFromRange.js
Реализуйте функцию multiplyNumbersFromRange(), которая перемножает числа в указанном диапазоне включая границы диапазона.

joinNumbersFromRange.js
Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку

printReversedWordBySymbol.js
Реализуйте функцию printReversedWordBySymbol(), которая печатает переданное слово посимвольно, делает это в обратном порядке

countChars.js
Функция из теории учитывает регистр букв. То есть A и a с её точки зрения разные символы. Реализуйте вариант этой же функции, так чтобы регистр букв был не важен:

even.js
Реализуйте функцию even(), которая возвращает новую строку, состоящую из чётных символов исходной строки.

filterString.js
Реализуйте функцию filterString(), принимающую на вход строку и символ, и возвращающую новую строку, в которой удален переданный символ во всех его позициях. Регистр символов важен.

makeItFunny.js
Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.
Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.

checkLogin.js
Напишите код, который будет спрашивать логин с помощью prompt.
Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
Пароль проверять так:
Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».

primeNumbers.js
Напишите код, который выводит все простые числа из интервала от 2 до n

salaries.js
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum
Добавил от себя вывод, если одно из полей не содержит цифры

calculator.js
Калькулятор

gift.js
Распечатайте приветственные и поздравительные сообщения
Распечатайте список подарков с новой информацией.

findIndex.js
В приведенном ниже коде функции передается массив объектовsearch() . 
Измените его так, чтобы функция возвращала индекс элемента, имеющего следующие свойства : 
ключ nameсо значением "John"и ключ ageсо значением 30.

switch.js
/*Cоздайте switch оператор внутри функции getSalary. Он должен отображать следующий текст в console.logзависимости от значений:
ценить	текст в console.log
"Bootstrap" 15 долларов в час
«Chrome Extension» 20 долларов в час
"React" 30 долларов в час
другие случаи 25 долларов в час*/

giftSwitch.js
Теперь, когда у вас есть список подарков с деталями, посетители сами решат, чего они хотят.
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
https://hyperskill.org/projects/277/stages/1405/implement

sumArray.js
Вам дан массив чисел с именем numbers. 
Вычислите сумму чисел и верните ее из функции. 
Если следующее число равно 0, программа должна прекратить обработку чисел и вернуть результат.

loop.js
Создайте цикл, который будет отображать в консоли все числа от 10до 1(в обратном порядке).

object.js
Напишите конструктор функции, вызываемый Phone со свойствами name, height, width, screenSizeи resolution.
