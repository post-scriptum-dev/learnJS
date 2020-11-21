// let div = document.body.firstElementChild;

// let ul = document.body.children[1];

// let li = document.body.children[1].lastElementChild;

// console.log(div, ul, li);

// let table = document.body.children[2];

// console.log(table);
// console.dir(table);

// for(let i = 0; i < table.rows.length; i++){
//   table.rows[i].cells[i].style.backgroundColor = 'red';
// };

// let ulOne = document.getElementById("one");

// for(let li of ulOne.querySelectorAll('li')){
//   let title = li.firstChild.textContent;
//   let size = li.querySelectorAll('li').length;

//   alert(`${title.trim()}: ${size}`);
// };



// let links = document.querySelectorAll('a[href*="://"]:not([href^="http://internal.com"])');

// links.forEach(link => link.style.color = 'orange');



// let ul = document.createElement("ul");
// document.body.append(ul);

// ul = document.querySelector('ul');

// while (true){
//   let data = prompt("Введите пункт списка", "");

//   if(data == '' || data == null){
//     break;
//   };

//   let li = document.createElement('li');
//   li.textContent = data;
//   ul.append(li);
// }


// let data = {
//   "Рыбы": {
//     "форель": {},
//     "лосось": {}
//   },

//   "Деревья": {
//     "Огромные": {
//       "секвойя": {},
//       "дуб": {}
//     },
//     "Цветковые": {
//       "яблоня": {},
//       "магнолия": {}
//     }
//   }
// };

// function createTree(container, data){
//   container.innerHTML = createTreeText(data);
// };

// function createTreeText(data){

//   let li = '';
//   let ul;

//   for(let key in data){
//     li += "<li>" + key + createTreeText(data[key]) + "</li>";
//   }

//   if(li){
//     ul = '<ul>' + li + '</ul>';
//   }

//   return ul || '';
// };

// let container = document.getElementById('container');
// createTree(container, data);


// let lis = document.getElementsByTagName('li');

// for(let li of lis){

//   let count = li.getElementsByTagName('li').length;

//   if (!count) continue;

//   li.firstChild.data += ' [' + count + ']';
  
// }

// let container = document.getElementById('container');

// function createCalendar(elem, year, month) {
//   let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

//   let mon = month - 1;

//   let d = new Date(year, mon);

//   for (let i = 0; i < getDay(d); i++) {
//     table += '<td></td>';
//   }

//   while(d.getMonth() == mon){
//     table += `<td>${d.getDate()}</td>`;

//     if(getDay(d) % 7 == 6 ){
//       table += '</tr><tr>'
//     };

//     d.setDate(d.getDate() + 1);
//   };

//   if (getDay(d) != 0 ) {
//     for (let i = getDay(d); i < 7; i++) {
//       table += '<td></td>';
//     }
//   }

//   table += '</tr></table>';

//   elem.innerHTML = table;
// };

// function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
//   let day = date.getDay();
//   if (day == 0) day = 7; // сделать воскресенье (0) последним днем
//   return day - 1;
// };

// createCalendar(container, 2020, 9);

// function clockStarts() {
//   let now = new Date();

//   let h = now.getHours();
//   let m = now.getMinutes();
//   let s = now.getSeconds();

//   if(h < 10){
//     h = '0' + h;
//   }

//   if(m < 10){
//     m = '0' + m;
//   }

//   if(s < 10){
//     s = '0' + s;
//   }

//   let clock = `<p><span class='red'>${h}</span>:<span class='green'>${m}</span>:<span class='blue'>${s}</span></p>`;
//   container.innerHTML = clock;
// };

// let timerId;

// function clockStart(){
//   timerId = setInterval(clockStarts, 1000);
//   clockStarts();
// }

// function clockStop(){
//   clearInterval(timerId);
//   timerId = null;
// }

let ul = document.querySelector('#ul');

let liTwo = document.createElement('li');
liTwo.innerHTML = '2';

let liThree = document.createElement('li');
liThree.innerHTML = '3';

ul.children[0].after(liThree);
ul.children[0].after(liTwo);