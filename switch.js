/*Cоздайте switch оператор внутри функции getSalary. Он должен отображать следующий текст в console.logзависимости от значений:
ценить	текст в console.log
"Bootstrap" 15 долларов в час
«Chrome Extension» 20 долларов в час
"React" 30 долларов в час
другие случаи 25 долларов в час*/

function getSalary(value){
    switch (value) {
        case "Bootstrap":
            console.log('$15 per hour');
            break;
        case "Chrome Extension":
            console.log('$20 per hour');
            break;
        case "React":
            console.log('$30 per hour');
            break;
        default:
            console.log('$25 per hour');
            break;
    }
}
