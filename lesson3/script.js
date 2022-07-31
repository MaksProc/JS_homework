let x = prompt('Введіть Х')
if (x == false) {
    document.write('Невірно')
} else {
    document.write('Вірно')
}



let time = prompt('time (0-59)')
if (0<=time && time<=15) {
    document.write('Перша чверть')
} else if (16<=time && time<=30) {
    document.write('Друга чверть')
} else if (31<=time && time<=45) {
    document.write('Третя чверть')
} else if (46<=time && time<=59) {
    document.write('Четверта чверть')
} else {
    document.write('?????')
}



let day = prompt('day (1-31)')
if (1<=day && day<=10) {
    document.write('Перша декада')
} else if (11<=day && day<=20) {
    document.write('Друга декада')
} else if (21<=day && day<=31) {
    document.write('Третя декада')
} else {
    document.write('?????')
}



switch (prompt('Котрий день?')) {
    case '1':
        document.write('Monday')
        break
    case '2':
        document.write('Tuesday')
        break
    case '3':
        document.write('Wednesday')
        break
    case '4':
        document.write('Thursday')
        break
    case '5':
        document.write('Friday')
        break
    case '6':
        document.write('Saturday')
        break
    case '7':
        document.write('Sunday')
        break
    default:
        document.write('?????')
}



let Ax = prompt('Перше число?')
let Bx = prompt('Друге число?')
if (Ax < Bx) {
    document.write('Перше число більше')
} else if (Ax > Bx) {
    document.write('Друге число більше')
} else {
    document.write('Числа рівні')
}



let WhateverX
WhateverX = WhateverX || 'default'
console.log(WhateverX)