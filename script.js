// // 1) сумма всех чисел в заданном пользователем диапазоне
// let num1 = +prompt('Введите первое число с диапазона')
// let num2 = +prompt('Введите последнее число с диапазона')
// let sum = 0
//
// while (num1 <= num2){
//   sum += num1
//   num1++
// }
// console.log(sum)

// 2) Наибольший общий делитель 2ух чисел ДОДЕЛАТЬ
let num1 = +prompt('Введите первое меньшее число')
let num2 = +prompt('Введите второе большее число')
let gcd = 1

for (let i = 1; i <= num1; i++) {
  if (num1 % i === 0 && num2 % i === 0 && i > gcd){
    gcd = i
  }
}
console.log(gcd)

// // 3) Вывести делители числа
// let num = +prompt('Введите число')
//
// for (let i = 1; i <= num; i++) {
//   if (num % i === 0){
//     console.log(i)
//   }
// }

// // 4) Определить количество цифр в введенном числе
// let num = prompt('Введите число')
//
// size = num.split("")
// console.log('В вашем числе', size.length ,'цифр')

// // 5) Длинное задание подсчитать цифры
// let userNumbers = prompt('Введите 10 чисел через пробел')
// let arrayOfNumbers = userNumbers.split(' ')
// let positive = 0
// let negative = 0
// let zero = 0
// let even = 0
// let odd = 0
//
// arrayOfNumbers.forEach((value, idx, array) => {
//   console.log(`${value}`)
//   if (Number(value) > 0) {
//     positive += 1
//   } else if (Number(value) < 0) {
//     negative += 1
//   } else if (Number(value) === 0) {
//     zero += 1
//   }
//   if (Number(value) % 2 === 0){
//     even += 1
//   } else if (Number(value) % 2 === 1){
//     odd += 1
//   }
//     })
// console.log(`Вы ввели ${positive} положительных чисел, ${negative} отрицательных, ${zero} нулей, из них ${even} четных и ${odd} нечетных`)
