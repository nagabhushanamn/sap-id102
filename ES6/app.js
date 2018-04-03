// console.log('-app.js-');

// var myApp = myApp || {};
// myApp.mod1.doWork();

//------------------------------------------------------------------------


console.log('-app.js-');

const mod1=require('./greet');
mod1.greet("en");
mod1.greet("ka");
mod1.greet();
