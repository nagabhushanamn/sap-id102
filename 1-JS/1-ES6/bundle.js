(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


// export let itemName = "biryani";
// export let itemPrice = 200.00 


// let itemName = "biryani";
// let itemPrice = 200.00
// export { itemName, itemPrice }


// let item = {
//     name: 'Biryani',
//     price: 200.00
// };

// export { item };

//-------------------------------------------------------


let mainItem = {
    name: 'Biryani',
    price: 250
};
let drink = {
    name: 'coke'
};
let dessert = {
    name: 'payasam'
};

exports.default = mainItem;
exports.drink = drink;
exports.dessert = dessert;
},{}],2:[function(require,module,exports){
'use strict';

var _menu = require('./hotel/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log('-app.js-');

// var myApp = myApp || {};
// myApp.mod1.doWork();

//------------------------------------------------------------------------


// console.log('-index.js-');
// const greetMod=require('./greet');
// greetMod.greet("en");
// greetMod.greet("ka");
// greetMod.greet();

//------------------------------------------------------------------------
// commonJS
const gmiGreet = require('sapient-gmi-greet');
gmiGreet.greet('en');
gmiGreet.greet('ka');

//--------------------------------------------------------------------------
console.log('-----------------------------------------------');
//--------------------------------------------------------------------------

// ES module
// import {itemName,itemPrice} from './hotel/menu';
// console.log(itemName);
// console.log(itemPrice);


// import {itemName as name,itemPrice as price} from './hotel/menu';
// console.log(name);
// console.log(price);


// import * as item from './hotel/menu';
// console.log(item.itemName);
// console.log(item.itemPrice);


// import { item } from './hotel/menu';
// // item = null; // error
// item.price = 500.00
// console.log(item.name);
// console.log(item.price);


console.log(_menu2.default.name);
console.log(_menu.drink.name);

//--------------------------------------------------------------------------
},{"./hotel/menu":1,"sapient-gmi-greet":4}],3:[function(require,module,exports){

// var myApp = myApp || {};

// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod2');
//         }
//     };
//     myApp.mod2 = o;
// })();

//------------------------------------------------------------------------

console.log('-greet/en.js-');

function greet(){
    console.log("Good Morining");
}
module.exports=greet;
},{}],4:[function(require,module,exports){

// var myApp = myApp || {};

// (function () {
//     var i = 10;
//     myApp.mod2.doWork();
//     myApp.mod3.doWork();
//     var o = {
//         doWork: function () {
//             console.log('im mod1');
//         }
//     };
//     myApp.mod1 = o; // export , abstract
// })();

//------------------------------------------------------------------------

console.log('-greet/index.js-');

const en=require('./en');
const ka=require('./ka');

function greet(lang) {
    if (lang === "en") {
        en(); return;
    }
    if (lang === "ka") {
        ka(); return;
    }
    console.log("give me lang");
}
// greet();
module.exports = {
    greet
};
},{"./en":3,"./ka":5}],5:[function(require,module,exports){


// var myApp = myApp || {};
// (function () {
//     var o = {
//         doWork: function () {
//             console.log('im mod3');
//         }
//     };
//     myApp.mod3 = o;
// })();

//------------------------------------------------------------------------

console.log('-greet/ka.js-');
function greet() {
    console.log("Namaskara");
}
module.exports = greet;
},{}]},{},[2]);
