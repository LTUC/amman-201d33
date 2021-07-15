'use strict';

// Refrence errors:
// when you try to use a varible that you never declared

// let car='bmw';
// console.log(car);


// Range errors
// this is thrown this is thrown when a numbert is outside of range of the allowed values:

// let arr=[1,2,3,4,5];
// arr.length=90**99;
// arr.length=3;
// console.log(arr);


// Syntax Error
// lt car='bmw';
// for (let i = 0; i < 5; i++) {
// console.log i);
    
    
// }


// TypeError
// let food='burger';
// food();



// Scopes

// global scope

let globalVar=50;

function scopePractice(num1,num2) {
    // local scope 
    let localResult=num1+num2+globalVar;
    return [localResult,num1];

}
// console.log(num1);
// console.log(localResult);
console.log( scopePractice(23,50));

