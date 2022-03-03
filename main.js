var a = +prompt('Введите ваш возраст');

if (a > 0 && a <= 18 && !isNaN(a)) {
    alert('Вы ещё молоды. Вам нужно учиться');
}else if(a >= 19 && a <= 50 && !isNaN(a)) {
    alert('Вам надо работать');
}else if(a >= 51 && a <= 59 && !isNaN(a)) {
    alert('Вам скоро на пенсию');
}else if(a >= 60 && a <= 150 && !isNaN(a)) {
    alert('Вы пенсионер');
}else {
    alert('Я конечно не эксперт, но тут что то не так');
}

var num = +prompt('Введите ваше время на данный момент в цифрах от 0 до 24. Например: 3 или 14')

switch(num) {
    case 1:
        alert('час ночи');
        break;
    case 2:
        alert('2 часа ночи');
        break;
    case 3:
        alert('3 часа ночи');
        break;
    case 4:
        alert('4 часа ночи');
        break;
    case 5:
        alert('5 часов ночи');
        break;
    case 6:
        alert('6 часов утра');
        break;
    case 7:
        alert('7 часов утра');
        break;
    case 8:
        alert('8 часов утра');
        break;
    case 9:
        alert('9 часов утра');
        break;
    case 10:
        alert('10 часов утра');
        break;
    case 11:
        alert('11 часов утра');
        break;
    case 12:
        alert('12 часов дня');
        break;
    case 13:
        alert('1 час дня');
        break;
    case 14:
        alert('2 часа дня');
        break;
    case 15:
        alert('3 часа дня');
        break;
    case 16:
        alert('4 часа дня');
        break;
    case 17:
        alert('5 часов дня');
        break;
    case 18:
        alert('6 часов вечера');
        break;
    case 19:
        alert('7 часов вечера');
        break;
    case 20:
        alert('8часов вечера');
        break;
    case 21:
        alert('9 часов вечера');
        break;
    case 22:
        alert('10 часов вечера');
        break;
    case 23:
        alert('11 часов вечера');
        break;
    case 24:
        alert('12 часов ночи');
        break;
    default:
    alert('Нет такого часа');
    break;
}

var r = +prompt('Введите первое число')
var f = +prompt('Введите второе число')
var v = +prompt('Введите третье число')

if (r < f && f < v) {
    alert(f)
}else if (r > f && f > v) {
    alert(f)
}else if (f < v && v < r) {
    alert(v)
}else if (r < v && v < f) {
    alert(v)
}else if (f < r && r < v) {
    alert(r)
}else if (v < r && r < f) {
    alert(r)
}else {
    alert('Что то не так')
}
