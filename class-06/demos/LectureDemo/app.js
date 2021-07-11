'use strict';


// Objects
/*
properties:
key:value
name:ahmad
age:26


methods:
eat:function
sleep:function

phones:

properties:
model:apple
height:15cm
RAM:8GB

methods:
call:function
take pictures:function


*/

let human=['ahmad',25,'student',179,['sleep','sports','watching movies']];


// console.log(human[3]);

// console.log(human[4][0]);


let ahmad={
    name:'ahmad',
    age:25,
    job:'student',
    height:179,
    likes:['sleep','sports','watching movies'],

    talk:function(){
        console.log('hello my name is '+this.name);
    },
    info:function(){
        console.log(`hi my age is ${this.age} and my height is ${this.height}`);

    },

    whatIsThis:function(){
        console.log(this);
    },
    jobDisc:{
        title:'senior dev',
        experince:'5 years',
        salary:250000
    }
}

// console.log(this);

// let amani={
//     name:'amani',
//     age:25,
//     job:'student',
//     height:179,
//     likes:['sleep','sports','watching movies'],

//     talk:function(){
//         console.log('hello my name is '+this.name);
//     },
//     info:function(){
//         console.log(`hi my age is ${this.age} and my height is ${this.height}`);

//     },

//     whatIsThis:function(){
//         console.log(this);
//     }
// }

// console.log(ahmad);


// access values from an object:

// Dot notaion
// console.log(ahmad.name);
// console.log('age',ahmad.age);
// console.log(ahmad.height);
// console.log(ahmad.likes[1]);


// Bracket notation
// console.log(ahmad["name"]);
// console.log(ahmad["age"]);

// for (let i = 0; i < ahmad.likes.length;i++) {
    
//     console.log(ahmad.likes[i]);
// }

// adding a property

// ahmad.dislikes=['waking up early','math','read assignments'];
// console.log(ahmad);

// ahmad.weight=80;


// delete ahmad.job;
// ahmad.job='';
// console.log(ahmad);

// let car='bmw';

// console.log(car);


// car='marcedes';
// console.log(car);

// let arr1=[1,2,3];
// let arr2=arr1;

// arr2.push(5);
// console.log(arr1);
// console.log(arr2);


// call a method 

// ahmad.talk(); 
// ahmad.whatIsThis();
// ahmad.info();


// add a method 
// ahmad.logName=function(){
//     console.log(`hello my name is ${this.name}`);
// }

// ahmad.logName();
// console.log(ahmad);
// console.log(ahmad.jobDisc.title);




// DOM
// console.log(document);

// document.write('<h1>hello from JS </h1>');


// get the parent element from the html

let parent=document.getElementById('parent');

console.log(parent);


// create A child element
let child=document.createElement('p');
console.log(child);



// append child to the parent
parent.appendChild(child);


// let question=prompt('whats your name');

// add text content
child.textContent='hello from JS ';



// let child2=document.createElement('img');

// child2.setAttribute('src','https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg');

// parent.appendChild(child2);
