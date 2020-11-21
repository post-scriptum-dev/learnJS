// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function() {
//     this.value += +prompt('need a number', '');
//   };
  
// };

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// function ucFirst(str) {
//   if (!str) return str;
  
//   return str[0].toUpperCase() + str.slice(1);

// };

// let string = "johnny";

// console.log(ucFirst(string));

// function checkSpam(str) {

//   if (str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX')) {
//     return true;
//   } else {
//     return false;
//   };

// };

// function checkSpam(str) {
//   let lowerStr = str.toLowerCase();

//   return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

// function truncate(str, maxlength) {

//   if (str.length <= maxlength) {
//     return str;
//   } else {
//     return str.substring(0,19) + '\u2026';
//   };

// };

// const styles = ["Jazz" , "Blues",];

// styles.push("Rock'n'Roll");

// styles[Math.floor((styles.length - 1) / 2)] = "Classic";

// console.log(styles);

// console.log(styles.shift());

// styles.unshift("Rap", "Reggae");

// console.log(styles);

// function sumInput() {
//   let arr = [];
  

//   do {
//     let num = prompt('type a number', 0);
//     if (num != null && num != '' && isFinite(num)) {
//        arr.push(+num);     
//     } else {
//       break
//     };
//   } while (true);

//   console.log(arr);

//   let sum = 0;
  
//   for (let number of arr) {
//     sum += number;
//   };

//   return sum;
// };

// console.log(sumInput());

// let arr = [1, -2, 3, 4, -9, 6];

// function getMaxSubSum(arr) {
//   let sum = 0;
//   let maxSum = 0;

//   for(let num in arr) {
//     sum += arr[num];
//     if (sum >= maxSum) {
//       maxSum = sum;
//     } else {
//       sum = 0;
//     };
//   };

//   return maxSum;
// };

// console.log(getMaxSubSum(arr));
// console.log(getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
// console.log(getMaxSubSum([1, 2, 3]) ); // 6
// console.log(getMaxSubSum([-1, -2, -3]) ); // 0

// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// let arr = [ 1, 2, 15 ];

// arr.sort(compareNumeric);

// alert(arr);  // 1, 2, 15

// function camelize(str) {

//   return str.split('-')
//             .map(
//               (item, index) => index > 0 ? item[0].toUpperCase() + item.slice(1) : item
//             )
//             .join('');
// };

// console.log(`
//   ${camelize("background-color")}\n
//   ${camelize("list-style-image")}\n
//   ${camelize("-webkit-transition")}`
// );

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {

//   return arr.filter(item => (item >= a && item <= b));
  
// };

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1 (совпадающие значения)
// console.log(arr); // 5,3,8,1 (без изменений)

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++){

//     let val = arr[i];

//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     };
//   };

// };

// filterRangeInPlace(arr, 1, 4);

// console.log(arr); // [3, 1]

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b) => {
//   if (a > b) return -1;
//   if (a == b) return 0;
//   if (a < b) return 1;
// });

// console.log(arr); // 8, 5, 2, 1, -10

// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b,
//   };

//   this.calculate = function(str) {

//     let split = str.split(" "),
//       a = +split[0],
//       op = split[1],
//       b = +split[2]
    
//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     };

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// };

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// function sortByAge(users) {

//   arr.sort((a, b) => a.age > b.age ? 1 : a.age == b.age ? 0 : -1);
// };

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let pasha = { name: "Паша", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, pasha, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// console.log(arr);

// простой не совсем правильный вариант. некоторые значения появятся чаще других
// function shuffle(array) {

//   array.sort(() => 0.5 - Math.random() );

// };

// // правильный вариант. Тасование Фишера — Йетса
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// };

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]
// console.log( arr );

// shuffle(arr);
// // arr = [2, 1, 3]
// console.log( arr );

// shuffle(arr);
// // arr = [3, 1, 2]
// console.log( arr );

// function getAverageAge(users) {

//   return users.reduce((sum, currnet) => sum += currnet.age, 0) / users.length;

// };

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// function unique(arr) {
//   let result = [];

//   for(let str of arr) {
//     if(!result.includes(str)){
//       result.push(str);
//     };
//   };

//   return result;
// };

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log(unique(strings));

// let range = {
//   from: 1,
//   to: 5,
// };

// range[Symbol.iterator] = function() {

//   // ...она возвращает объект итератора:
//   // Далее, for..of работает только с этим итератором, запрашивая у него новые значения
//   return {
//     current: this.from,
//     last: this.to,

//     // next() вызывается на каждой итерации цикла for..of
//     next() {
//       // он должен вернуть значение в виде объекта {done:.., value :...}
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// };

// let arr = Array.from(range);

// let arr2 = Array.from(range, num => num * num);

// console.log( arr, arr2);

// function unique(arr) {
  
//   return Array.from(new Set(arr));

// };

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(values) ); // Hare, Krishna, :-O

// function aclean(arr) {

//   let map = new Map();

//   for(let word of arr){
//     let sorted = word.toLowerCase()
//                     .split("")
//                     .sort()
//                     .join("");
//     map.set(sorted, word);
//   };

//   return Array.from(map.values());
// };

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

// function sumSalaries(sal) {
//   let sum = 0;

//   for(value of Object.values(sal)){
//     sum += value;
//   };

//   return sum;
// };

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2

// function count(obj) {

//   return Object.keys(obj).length

// };

// let user = {
//   name: "John",
//   years: 30
// };

// let {
//   name,
//   years: age,
//   isAdmin = false,
// } = user;

// console.log(name, age, isAdmin);

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// let topSalary = (salaries) => {

//   let maxName = null;
//   let max = 0;


//     for(let [key, value] of Object.entries(salaries)){
//       if(value > max){
//         max = value;
//         maxName = key;
//       };
//     };


//   return maxName;

// };

// console.log(topSalary(salaries));

// const date = new Date(2012, 0, 3);

// console.log(date);

// function getWeekDay(date) {

//   let days = [7, 1, 2, 3, 4, 5, 6];

//   return days[date.getDay()];
// };

// console.log(getWeekDay(date));

// let date = new Date(2015, 0, 2);

// console.log(date);

// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 100) );
// console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// console.log(date);

// function getDateAgo(date, days) {
//   let dateAgo = new Date(date.getTime() - days * 24 * 3600 * 1000);
//   return dateAgo.getDate();

// };

// function getLastDayOfMonth(year, month) {

//   const date = new Date(year, month+1, 0);

//   return date.getDate();

// };

// console.log(getLastDayOfMonth(2012, 1));

// function getSecondsToTomorrow() {

//   let now = new Date();

//   console.log(now);

//   let nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

//   return Math.round((nextDay - now) / 1000);

// };

// console.log(getSecondsToTomorrow());

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

// console.log(user);

// let userJSON = JSON.parse(JSON.stringify(user));

// console.log(userJSON);

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log( JSON.stringify(meetup, function replacer(key, value) {
//   return (key != "" && value == meetup) ? undefined : value;
// }));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

// function sumTo(n) {

//   // цикл
//   // let sum = 0;

//   // for(let i = 0; i <= n; i++){
//   //   sum += i;
//   // };

//   // return sum;

//   // рекурсия
//   if(n == 1){
//     return n;
//   } else {
//     return n + sumTo(n-1);
//   };

//   // сумма членов ариф.прогрессии
//   // return (1+n)/2*n;
// };

// console.log(sumTo(4));

// function factorial(n){

//   if(n == 1){
//     return n;
//   } else {
//     return n * factorial(n-1);
//   };
// };

// console.log(factorial(5));

// function fib(n){

//   let sum ;
//   let a = 1;
//   let b = 1;

//   for(let i = 3; i<=n; i++){
//     sum = a + b;
//     a = b;
//     b = sum;
//   };
//   return b;
// };

// console.log(fib(77));

// function printList(list){

//   // let tmp = list;

//   // while (tmp) {
//   //   console.log(tmp.value);
//   //   tmp = tmp.next;
//   // };

  
//   if(list.next){
//     printList(list.next)
//   };
//   console.log(list.value);
  
// };

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// console.log(printList(list));

// function sum(a){
//   return function(b) {
//     return a+b;
//   };
// };

// console.log(sum(1)(2));
// console.log(sum(5)(-1));

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   };
// };

// function inArray(arr) {
//     return function(x) {
//       return arr.includes(x);
//     };
// };

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

// function byField(field) {
//   return function(a, b) {
//     return a[field] > b[field] ? 1 : -1;
//   };
// };

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];
// users.sort(byField('name'));
// users.forEach(user => console.log(user.name));
// users.sort(byField('age'));
// users.forEach(user => console.log(user.name));

// function makeCounter() {

//   function counter() {
//     return counter.count++;
//   };

//   counter.count = 0;

//   counter.set = (value) => counter.count = value;

//   counter.decrease = () => counter.count--

//   return counter;
// }

// let counter = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1

// counter.set(10); // установить новое значение счётчика

// alert( counter() ); // 10

// counter.decrease(); // уменьшить значение счётчика на 1

// alert( counter() ); // 10 (вместо 11)

// function sum(a) {
//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   f.toString = function() {
//     return currentSum;
//   };

//   return f;
// };

// alert( sum(1)(2) ); // 3

// function printNumbers(from, to) {

//   let i = from;

//   // let timer = setInterval(function() {
//   //     console.log(i);

//   //     if(i == to) {
//   //       clearInterval(timer);
//   //     }

//   //     i++;
//   //   }, 1000);
//   setTimeout(function f() {
//     if(i <= to){
//       console.log(i);
//       i++;
//       setTimeout(f, 1000);
//     };
//   }, 1000);
  
// };

// printNumbers(1, 10);

// function work(a, b) {
//   alert( a + b ); // произвольная функция или метод
// };

// function spy(func){

//   function wrapper(...args){
//     wrapper.calls.push(args);
//     return func.apply(this, arguments);
//   };

//   wrapper.calls = [];

//   return wrapper;
// };

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

// function f(x) {
//   console.log(x);
// }

// // создаём обёртки
// function delay(f, ms){

//   return function(){
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// };

// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test1"); // показывает "test" после 1500 мс

// function debounce(f, ms){
//   let cooldown = false;

//   return function(){
//     if(cooldown) return;
    
//     f.apply(this, arguments);

//     cooldown = true;

//     setTimeout(() => cooldown = false, ms);
//   };

// };

// let f = debounce(alert, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

// function f(a) {
//   console.log(a)
// }

// function throttle(func, ms){

//   let throttle = false;
//   let savedArgs, savedThis;

//   function wrapper(){

//     if(throttle){
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     };

//     func.apply(this, arguments);

//     throttle = true;

//     setTimeout(function(){
//       throttle = false;
//       if(savedArgs){
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       };
//     }, ms);
//   };

//   return wrapper;
// };

// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)

// // когда 1000 мс истекли ...
// // ...выводим 3, промежуточное значение 2 было проигнорировано

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// Function.prototype.defer = function(ms){
//   let f = this;

//   return function(...args){
//     setTimeout(() => f.apply(this, args), ms);
//   };
// };

// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 2); //выведет 3 через 1 секунду.

// let dictionary = Object.create(null, {
//   toString: {
//     value() {
//       return Object.keys(this).join(",");
//     },
//   },
// });

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// class ExtendedClock extends Clock {
//   constructor(options){
//     super(options);
//     let { precision = 1000} = options;
//     this.precision = precision;
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// };

// let clocks = new ExtendedClock({template: 'h:m:s'});
// clocks.start();

// async function loadJson(url) {
//   let response = await fetch(url);

//   if (response.status == 200) {
//     return response.json();
//   };
  
  
//   throw new Error(response.status);
// };

// loadJson('no-such-user.json') // (3)
//   .catch(alert); // Error: 404

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url);

//   if (response.status == 200) {
//     let json = await response.json();
//     return json;
//   } else {  
//     throw new HttpError(response);
//   };
// }

// // Запрашивать логин, пока github не вернёт существующего пользователя.
// async function demoGithubUser() {

//   let user;
//   while(true) {
//     let name = prompt("Введите логин?", "iliakan");

//     try {
//       user = await loadJson(`https://api.github.com/users/${name}`);
//       break;
//     } catch(err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     };
//   };

//   alert(`Полное имя: ${user.name}.`);
//     return user;
// }

// demoGithubUser();

// function* pseudoRandom(seed) {

//   let value = seed;

//   while(true){
//     value = value * 16807 % 2147483647;
//     yield value;
//   };
// };

// let generator = pseudoRandom(1);

// alert(generator.next().value); // 16807
// alert(generator.next().value); // 282475249
// alert(generator.next().value); // 1622650073

// let user = {
//   name: "John"
// };

// function wrap(target) {
//   return new Proxy(target, {
//       get(target, prop, receiver) {
//         if(prop in target) {
//           return Reflect.get(target, prop, receiver);
//         } else {
//           throw new ReferenceError(`Property not found: "${prop}"`);
//         }
//       }
//   });
// }

// user = wrap(user);

// alert(user.name); // John
// alert(user.age); // Ошибка: такого свойства не существует

// let array = [1, 2, 3];

// array = new Proxy(array, {
//   get(target, prop, receiver) {
//     if(prop < 0) {
//       prop = +prop + target.length;
//     } 
//     return Reflect.get(target, prop, receiver);
//   }
// });

// alert( array[-1] ); // 3
// alert( array[-2] ); // 2

let handlers = Symbol('handlers');

function makeObservable(target) {
  target[handlers] = [];

  target.observe = function(handler){
    this[handlers].push(handler);
  };

  return new Proxy(target, {
    set(target, prop, value, receiver) {
      let sucsess = Reflect.set(...arguments);
      if (sucsess){
        target[handlers].forEach(handler => handler(prop, value));
      }
      return sucsess;
    }
  });
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John

// let ask = prompt("выражение",'');

// alert(eval(ask));

// let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// let collator = new Intl.Collator("ru", {
//   sensitivity: "base",
// });

// animals.sort((a,b) => collator.compare(a,b));

// console.log(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК

