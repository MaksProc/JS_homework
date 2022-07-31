// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let a = 'hello'
let b = 'owu'
let c = 'com'
let d = 'ua'
let e = 1
let f = 10
let g = -999
let h = 123
let i = 3.14
let j = 2.7
let k = 16
let l = true
let m = false

console.log(a)
console.log(b,c,d)
console.log(e,f,g,h,i,j,k)
console.log(l,m)

document.write(a,b,d,c,e,f,g,h,i,j,k,l,m)

var firstName = 'Максим'
var middleName = 'Андрійович'
var lastName = 'Проценко'
var person = firstName+' '+middleName+' '+lastName
// alert(person)

let aa = 100
console.log(typeof(aa))
let bb = '100'
console.log(typeof(bb))
let cc = true
console.log(typeof(cc))

let guestFirstName = prompt("Iм'я:")
let guestMiddleName = prompt("По батьковi:")
let guestAge = prompt('Вiк:')
console.log(guestFirstName+' '+guestMiddleName+' '+guestAge)
