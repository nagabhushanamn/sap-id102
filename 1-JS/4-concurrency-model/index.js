"use strict";

console.log('-index.js-');

// #1
// function foo(b) {
//     var a = 10;
//     return a + b + 11;
// }

// function bar(x) {
//     var y = 3;
//     return foo(x * y);
// }

// console.log(bar(7)); //returns 42 // 

//--------------------------------------------

// #2
// function foo() { }
// function bar() { foo() }
// function baz() { bar() }
// baz();

//--------------------------------------------

//#3

// function foo() { throw new Error('oops') }
// function bar() { foo() }
// function baz() { bar() }
// baz();

//--------------------------------------------

// #4

// function foo(){
//     foo();
// }
// foo();

//--------------------------------------------

// #5

// function longRunning(){
//     var i=0;
//     while(i<5){
//         console.log('long....');
//         i++;
//     }
// }
// function shortRunning(){
//     console.log('short...');
// }

// longRunning();
// shortRunning();

//--------------------------------------------

// #6

/*

    <button class="veg">button-1</button>
    <button class="non-veg">button-2</button>

*/

// console.log('start...');
// $.on('.veg','click',function vegHndler(e){
//     console.log('handling click event on .veg elements');
// });
// $.on('.non-veg','click',function nonVegHndler(e){
//     console.log('handling click event on .non-veg elements');
// });
// console.log('cont with other work...');
// function longRunning(){
//     var i=0;
//     while(i<5){
//         console.log('long....');
//         i++;
//     }
// }
// longRunning();

// //--------------------------------------------

// // #7

// console.log('start..');

// // IO ( n/w call )
// setTimeout(function timeout() {
//     console.log('after timeout..');
// }, 1000);

// console.log('cont with other work..');
// function longRunning() {
//     var i = 0;
//     while (i < 5) {
//         console.log('long....');
//         i++;
//     }
// }
// longRunning();


//----------------------------------------------------------


// Quiz:

function doTeach() {
    let name = "Nag"; // will move to Heap
    let other = "bla bla";
    try {
        console.log(name + '-teaching topic-1');
        //throw new Error('hate-topic-1');
        setTimeout(function () {
            console.log(name + '-teaching topic-2');
            //throw new Error('hate-topic-2');
            console.log('teaching topic-2 ends');
        }, 5000);
        console.log('teaching topic-1 ends');
    } catch (e) {
        console.log('i caught ' + e.message);
    }
}

doTeach();