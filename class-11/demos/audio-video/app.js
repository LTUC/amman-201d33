'use strict';

// get by id 

let randomButton=document.getElementById('randomizer');

console.log(randomButton);

// add event listener

randomButton.addEventListener('click',randomize);

function randomize() {
    let audioElement=document.getElementById('levees');

    audioElement.volume=Math.random();

    // audioElement.className='list-item';
}


