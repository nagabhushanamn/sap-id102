"use strict"

// de-structuring

// a. array destructuring
//-----------------------------

// let arr = [10, 20, 30, 40, 50, 60, [70, 80], 90, 100, 110];

// let n1 = arr[0];
// let n2 = arr[1];
// let n3 = arr[2];

// or

// let [n1, n2, n3, n4 = 400, , n6, [n7, n8], ...n] = arr;


// b. object destructuring
//----------------------------

// let person = {
//     name: 'Nag',
//     age: 34,
//     sayName: function () {
//         console.log('im ' + this.name);
//     }
// };

// let myName=person.name;
// let myAge=person.age;
// let mySayName=person.sayName;

// or

// let { name: myName, age: myAge, sayName: mySayName } = person;
// let { name: name, age: age, sayName: sayName } = person;
// or
// let { name, age, sayName } = person;
// sayName.call(person);


//--------------------------------------------------------------------

// 6. Object-literal enhancements
//-------------------------------


// let name = "Nag";
// let age = 34;

// let addressType = "office"; // office | vacation
// // Es5
// let person = {
//     name: name,
//     age: age,
//     sayName: function () {
//         console.log('im ' + this.name);
//     },
//     address: 'chennai'
// };
// // es6
// let newPerson = {
//     name,
//     age,
//     sayName() {
//         console.log('im ' + this.name);
//     },
//     [addressType + '-address']: 'bengalore',
//     1:'One',
//     ['do something'](){
//         console.log('doing something');
//     }
// };

// newPerson['do something']();


//--------------------------------------------------------------------

// 7. spread operator


// function func(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// let nums = [10, 20, 30];
// // func(nums[0], nums[1], nums[2]);
// // or
// func(...nums);

// let a1 = [1, 2, 3]
// let a2 = [7, 8, 9];
// let str = "SAPIENT";

// let a3 = [...a1, 4, 5, 6, ...a2, ...str];

//--------------------------------------------------------------------

// Symbol type

/*

    unique & immutable value , used as object identifier property

    how to create symbol ?

*/


// let symbol=Symbol.for('someKey');

// let javaSymbol = Symbol.for('java');

// let e1 = { name: 'A', [javaSymbol]: 'java,spring,hibernate' }
// let e2 = { name: 'B', [javaSymbol]: 'java' }
// let e3 = { name: 'C', [Symbol.for('js')]: 'ES6,React JS' }


// if (e3[Symbol.for('js')]) {
//     console.log('welcome js employee');
//     console.log(e3[Symbol.for('js')]);
// }


// let person = {
//     name: 'Nag'
// };


// let menu = [
//     "item1",
//     "item2",
//     "item3"
// ];

// for (let item of menu) {
//     console.log(item);
// }


// let idMaker = {
//     [Symbol.iterator]: function () {
//         let id = 0;
//         return {
//             next: function () {
//                 id++;
//                 return { value: id <= 10 ? id : undefined, done: id <= 10 ? false : true };
//             }
//         };
//     }
// };
// // for (let id of idMaker) {
// //     console.log(id);
// // }
// // let ids = [...idMaker];
// let [id1, id2, id3] = idMaker;

//----------------------------------------------------------------


// function expression

// let getPrice = function () {
//     return 100 + 200;
// }

// arrow-function  : syntax

// let getPrice = () => {
//     return 100 + 200;
// }


// let getPrice = (count) => {
//     return count * (100 + 200);
// }


// let getPrice = count => {
//     return count * (100 + 200);
// }


// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }


// let getPrice = (count, tax) => count * (100 + 200) + tax;

// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200)
//     let total = cost + tax
//     return total;
// };



// function expression Vs Arrow-function

// why/where we need arrow function ?

/*
    use1 : to make compact function-argument
    use2 : to capture 'this'
*/


// let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// nums.sort(function (a, b) { return a - b; });

// or

// nums.sort((a, b) => a - b);



// let tnr = {
//     name: 'Nag',
//     doTeach: function () {
//         console.log(this.name + " teaching .js");
//         // let askQues = function (q) {
//         //     console.log(this.name + " anwering " + q);
//         // }
//         // or
//         let askQues = (q) => {
//             console.log(this.name + " anwering " + q);
//         }
//         return askQues;
//     }
// };

// let askQues = tnr.doTeach();
// // askQues("Q1");

// let newTnr = { name: 'Sidharth', askQues } // static function binding
// newTnr.askQues("Q2");

// let newTnr2 = { name: 'Sidharth' }
// askQues.call(newTnr2, 'Q3'); // dynamic function binding


//---------------------------------------------------------------------

// Quiz


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + " processed");
//     }
// };

// let invoice = {
//     num: 123,
//     process: () => {
//         console.log('INV-' + this.num + " processed");
//     }
// };

// let invoice = {
//     num: 123,
//     process: function () {
//         console.log('INV-' + this.num + " processed partially");
//         let complete = () => {
//             console.log('INV-' + this.num + " processed completly");
//         }
//         return complete;
//     }
// };

// let complete = invoice.process();
// complete();



// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//         let incAge = () => {
//             this.age++;
//             console.log(this.name + " - " + this.age);
//         }
//         setInterval(incAge, 1000);
//     }
// }
// let p = new Person('Nag', 34)


//-------------------------------------------------------------


// let sayName1 = function () {
//     console.dir('im ' + this.name);
// }
// let sayName2 = () => {
//     console.dir('im ' + this.name);
// }
// // sayName1();
// // sayName2();

// let p1 = {
//     name: 'Nag',
//     sayName: sayName1
// };
// p1.sayName();
// let p2 = {
//     name: 'Ria',
//     sayName: sayName2
// };
// p2.sayName();



//-------------------------------------------------------------

// collections

// let list = [];

// // in es6

// let set = new Set();
// set.add('item1');
// set.add('item1');
// set.add('item2');

// let map = new Map();

// let ow1 = { name: 'Nag' }
// let ow2 = { name: 'Ria' }

// let car1 = { name: 'fortuner' }
// let car2 = { name: 'toy-car' }

// map.set(ow1, car1);
// map.set(ow2, car2);
