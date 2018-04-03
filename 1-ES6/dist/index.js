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