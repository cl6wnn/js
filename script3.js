var x
var y
var answer
var score=0
var round=1
while(round<=5) {
    alert('Раунд'+String(round))

 x=Math.random()
 x=x*10
 x=x.toFixed(0)
 y=Math.random()
y=y*10
y=y.toFixed(0)

alert('Сколько будет '+x+'x'+y+'?')
answer=Number(prompt('Введите Ваш ответ:'))
if (answer==x*y){
    alert('True!')
    score=score+1
} else{
    alert('faaalse')
}
}

alert('Ваш результат: '+String(score))
