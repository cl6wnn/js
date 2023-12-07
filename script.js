var a=Number(prompt('Введите длину прямоугольника:'))
var b=Number(prompt('Введите высоту прямоугольника:'))

var answer=Number(prompt(`Какой параметр расчитать?
                    1 - периметр
                    2 - площадь`))
if (answer==1) {
    alert('Периметр прямоугольника равен '+String(2*a+2*b))
}
else if (answer==2){
    alert('Площадь прямоугольника равна'+String(a*b))
} else {
    alert('Вы ввели некорректный вариант')
}