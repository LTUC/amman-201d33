'use strict';

// get the tag 
let button=document.getElementById('btn');

console.log(button);
button.addEventListener('click',makeParagraph);


// get the container:
let parent=document.getElementById('container');


function makeParagraph() {
    // console.log('hello form event listener');
    let para=document.createElement('p');


    parent.appendChild(para);

    para.textContent='hello from JavaScript';

}


// get the tag:
let paragraph=document.getElementById('paragraph');

console.log(paragraph);

// add event listner for the tag
paragraph.addEventListener('mouseover',changeText);
// create the function that runs when we move our mouse over the paragraph
function changeText() {
    paragraph.textContent='changed from JavaScript';
}

