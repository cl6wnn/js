var a=Number(prompt('Введите длину прямоугольника:'))
var b=Number(prompt('Введите высоту прямоугольника:'))

var answer= prompt(`Какой параметр расчитать?
                     периметр
                     площадь`)
switch(answer){
    case 'периметр':
        alert('Периметр прямоугольника равен: '+String(2*a+2*b))
        break;
        case 'площадь':
            alert('Площадь прямоугольника равна'+String(a*b))
            break
            default:
                alert('Введены некоррентные данные')
}