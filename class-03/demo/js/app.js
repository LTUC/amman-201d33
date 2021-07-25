'use strict';

// let favouriteClub=prompt('is real madrid my favourite club?');

// yes y or no n

// favouriteClub=favouriteClub.toLowerCase();

// // using and both should be true
// if(favouriteClub==='yes'||favouriteClub==='y'){
//     console.log('favourite club:',favouriteClub);
//     alert('Good job');

// }else if(favouriteClub==='no'||favouriteClub==='n'){
//     console.log('favourite club:',favouriteClub);
//     alert('wrong answer');

// }else{
//     alert('please only write yes/y or no/n');
// }


// if(favouriteClub==='yes'||favouriteClub==='y'){
//     console.log('favourite club:',favouriteClub);
//     alert('wrong answer');

// }else {
//     console.log('favourite club:',favouriteClub);
//     alert('Good job');
// }


// let favouriteFood=prompt('is mlokheyeh my favourite?');

// console.log('before',favouriteFood);

// favouriteFood=favouriteFood.toUpperCase();
// 'YES'
// 'yes'==='YES';
// switch(favouriteFood){
//     case 'YES':
//     case 'Y':
//         alert('no you are wrong');
//         console.log('favourite food',favouriteFood);
//         break;
//     case 'NO':
//     case 'N':
//         alert('good job');
//         break;
//     default:
//         alert('please answer with yes/y or no/n');
//         break;
// }

// console.log(favouriteFood);




// Lecture:

/* operators:
comparison operators

== value
'5'==5 =>true


=== DataType and the value
'5'===5 =>false

> bigger than

< smaller than

>= bigger than and equal

<= smaller than or equal

!= NOT equal value
'5' != 5 =>false

!== NOT equal to data type and value
'5' !== 5 =>true


**logical operators:

AND
&&
its only true if two of them are true

OR
||
its only false when both of them are false


Truthy:
true
1
'car'
8/2
'true'
'false'
'0'


Falsy:
false
0
''
'string'/3 NaN NOT A NUMBER
undefined


*/

// console.log('5' !== 5);
// console.log(!false);

// let firstName=prompt('whats your name');

// if (firstName) {
//     alert('truthy value');
// }else{
//     alert('falsy value');
// }

// let number=5;
// console.log();
// let test='hello'/number;

// if (test) {
//     console.log('truthy');
// }

// let lastName;

// console.log(lastName);



/*
loops:
why:to repeat code for an amount of times without copy pasting the same code

for loop:

for(initiliaztion; condition; update){
    do code..
}

increment:

initilization: i=0;
condition: i<5;
update: i++;

decrement:
initilization: i=10;
condition: i>0;
update: i--;

*/

// increment example:
// for(let i=0; i<5; i++){
//     // 0
//     // 1
//     // 2
//     // 3
//     // 4
//     console.log('increment example:',i);

// }

// if (i===5) {
//     console.log('hi');
// }
// console.log(true&&false);


// decrement example:
// for(let i=10; i>0; i--){

//  console.log('decrement example:',i);

// }

// break: it stop the loop from looping

// continue: it skips this iteration

// for (let i = 0; i < 5; i++) {
//     // 0
    // console.log(i);
//     if (i===4) {
//         break;
//     }

    // if (i===1) {
    //    continue;
    // }
    
    // console.log('hello');
// }

// console.log('outside');


/*
while
if you dont know how many time you'll loop

while(condition){
    code will keep running while the condition is true
}




*/

// let number=0;

// while (number<5) {
//     console.log('hello');
//     number++;

// }

// let userName=prompt('whats your name?');
// console.log(typeof userName);


// user name= ''
// while (!userName) {
//     // if user name = ''
//    userName=prompt('please write anything');
// //    samer
// }




// console.log(parseInt(userName));

// while (parseInt(userName)) {
//        userName= prompt('please write an actual name and not a number');
// }


// console.log(userName);


// do while loop
// code will run once even if condition is false

// if condition is true it will keep running

// let i=5;

// do{
//   console.log('hello from do while');
// }while(i>10);





// let grade1=50;
// let grade2=100;
// let grade3=200;

let grades=[50,89,60,24,50,100];

// let names=['reem','ahmad','noor'];
// 0   1   2

// console.log('the whole array',grades);

// console.log('the first element',grades[0]);

// console.log('the fourth element',grades[3]);

// print the index of a value
// console.log('get index of the value 60',grades.indexOf(60));

// console.log(names.indexOf('noor'));


// print length
// console.log(grades.length);

// add elements at the end of the array:


// console.log('before',grades);

// grades.push(33);



// remove the element from the end:

// grades.pop();

// console.log('after',grades);


////////////////////////////////////////
// ########  DEMO  ######

/* to do list:
1) make sure the user name is not empty ( not a falsy value)
2)ask the user 2 yes or no questions the user can answer with yes/y or no/n 
3)keep track of the score of the user and display it at the end add 1 point when the user answers correctly 
4) show in the console these foods in order 'burger','steak','pizza','mansaf'*/

let userName=prompt('whats your name?');
// ''
while (!userName) {
  userName= prompt('please write anything');
}


alert('hello there '+userName+ ' glad to have you here');

let score=0;

let human=prompt('am i a human?');

if (human==='yes' || human==='y') {
    alert('think again');


}else if( human==='no'||human==='n'){
    alert('good job');
    score++;
}else{
    alert('please write yes or no');
}


let horse=prompt('do horses fly?');


// while (horse !=='yes'&&horse!=='y') {
//    horse= prompt('please write yes or y');
// }

function question3() {
    if (horse==='yes' || horse==='y') {
   
        alert('are you okay?');
    
    }else if( horse==='no'||horse==='n'){
        alert('wow really ');
        score++;
    }else{
        alert('please write yes or no');
    }  
}
question3();
// 7
// 7 functions



// console.log(score);

let food=['burger','steak','pizza','mansaf'];
// console.log(food.length);
// console.log(food[0]);
// console.log(food[1]);


for(let i=0; i<food.length; i++){
    // food[0]
    // food[1]
    // food[2]
    // food[3]

    console.log(food[i]);
}



// for (let i = 0; i < 5; i++) {
//     console.log('first loop',i);

//     for (let j = 0; j <10; j++) {
//         console.log('second loop',j);
//     }
// }

// alert('you have a score of '+ score+'/7');

// string interpolation:
alert(`you have a score of ${score} /7`);
