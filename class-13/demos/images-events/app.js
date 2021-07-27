'use strict';

/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two goats

  App Flow:
  - Welcome and instructions
  - Randomly put 2 goats on the screen
    - Random number generator
    - a function to display goats
  - A user clicks on a goat
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 25 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which goat was clicked on
        - update clicke images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 goats, run the same code that put them on the screen to begin with

  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
    - let the user know what they are supposed to do
      - instructions

  More javascript details
  We need Objects with all the image properties
  var Image = function ()
  {
    name : 'cool goat',
    clicks: 0,
    times shown: 0,
    url : 'cool-goat.jpg'
  }

  We need an Array to hold all image Objects

  function to randomly pick an image{
    Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image, targetted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })

  function to display all the clicks at the end () {
    generate a table or list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }

*/


let imagesDiv = document.getElementById('images-div');

let buttonElement = document.getElementById('button');

let leftImageElement = document.getElementById('left-image');

let middleImageElement = document.getElementById('middle-image');

let rightImageElement = document.getElementById('right-image');

// console.log(leftImageElement,rightImageElement);

let maxAttempts = 10;
let userAttemptsCounter = 0;


let leftImageIndex;
let middleImageIndex;
let rightImageIndex;

let namesArr = [];

let votesArr = [];

let shownArr=[];

// Pascal
function Goat(name, src) {
  this.name = name;
  this.source = src;
  this.votes = 0;
  this.shown = 0;
  // "this" refers to the object that is being created 
  Goat.allGoats.push(this);
  // Goat.all.push(this);
  namesArr.push(this.name);
}

// let goats=[];
Goat.allGoats = [];
// Goat.prototype.allGoats=[];
// Goat.all=[];
// console.log(Goat.all);

// instances
new Goat('cruisin-goat', 'images/cruisin-goat.jpg');//0
new Goat('float-your-goat', 'images/float-your-goat.jpg');//1
new Goat('goat-away', 'images/goat-away.jpg');//2
new Goat('goat-out-of-hand', 'images/goat-out-of-hand.jpg');//3
new Goat('kissing-goat', 'images/kissing-goat.jpg');//4
new Goat('sweater-goat', 'images/sweater-goat.jpg');//5
new Goat('sassy-goat', 'images/sassy-goat.jpg');//6

// console.log(goats);

// from w3 schools
function getRandomIndex() {
  // 0=>6
  return Math.floor(Math.random() * Goat.allGoats.length);
}

console.log(getRandomIndex());


// render
let shownPictures=[];

function renderTwoImages() {

  console.log('before',shownPictures);
  leftImageIndex = getRandomIndex();
  rightImageIndex = getRandomIndex();
  middleImageIndex = getRandomIndex();
  
  
  while (leftImageIndex === rightImageIndex || leftImageIndex === middleImageIndex || rightImageIndex === middleImageIndex||shownPictures.includes(leftImageIndex)||shownPictures.includes(rightImageIndex)||shownPictures.includes(middleImageIndex)) {
    middleImageIndex=getRandomIndex();
    leftImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();
  }
  
  // numbers=[leftImageIndex,rightImageIndex,middleImageIndex];
  
  // console.log(leftImageIndex,rightImageIndex);
  // console.log(goats[leftImageIndex].name);
  // console.log(goats[rightImageIndex].name)
  // ;
  // shownPictures=[];
  // shownPictures.push(leftImageIndex,rightImageIndex,middleImageIndex);
  shownPictures=[leftImageIndex,rightImageIndex,middleImageIndex];

  console.log('after',shownPictures);


  // console.log(goats[0].name);
  leftImageElement.src = Goat.allGoats[leftImageIndex].source;

  Goat.allGoats[leftImageIndex].shown++
  console.log(Goat.allGoats[leftImageIndex]);

  middleImageElement.src = Goat.allGoats[middleImageIndex].source;

  Goat.allGoats[middleImageIndex].shown++;

  rightImageElement.src = Goat.allGoats[rightImageIndex].source;

  Goat.allGoats[rightImageIndex].shown++;


}

renderTwoImages();

// handle click:
// leftImageElement.addEventListener('click',handleUserClick);
// rightImageElement.addEventListener('click',handleUserClick);




imagesDiv.addEventListener('click', handleUserClick);

function handleUserClick(event) {

  console.log(event.target.id);



  // console.log(userAttemptsCounter);

  /*
  if the attempts is lower than the max tries
  -add to the votes based on id
  -render again

  ELSE
  -show list of results
  -remove clicking event

  */

  if (userAttemptsCounter < maxAttempts) {


    if (event.target.id === 'left-image') {

      Goat.allGoats[leftImageIndex].votes++;
      console.log(Goat.allGoats[leftImageIndex]);
      renderTwoImages();


    } else if (event.target.id === 'right-image') {
      Goat.allGoats[rightImageIndex].votes++;
      console.log(Goat.allGoats[rightImageIndex]);
      renderTwoImages();

    } else if (event.target.id === 'middle-image') {
      Goat.allGoats[middleImageIndex].votes++;
      renderTwoImages();

    } else {
      alert('please click on the images');
      userAttemptsCounter--;
    }

    // renderTwoImages();

  } else {



    buttonElement.hidden = false;



    // if you want to make the button from the JS
    // let button=document.createElement('button');
    // imagesDiv.appendChild(button);
    // button.textContent='View results'

    buttonElement.addEventListener('click', showingList);

    function showingList() {
      let list = document.getElementById('results-list');

      for (let i = 0; i < Goat.allGoats.length; i++) {
        // const element = goats[i];
        let listItem = document.createElement('li');

        list.appendChild(listItem);
        // banana had 3 votes, and was seen 5 times.

        listItem.textContent = `${Goat.allGoats[i].name} has ${Goat.allGoats[i].votes} votes, and was seen ${Goat.allGoats[i].shown} times`;

      }

      buttonElement.removeEventListener('click', showingList);
    }




    // remove event listener:
    // leftImageElement.removeEventListener('click',handleUserClick);
    // rightImageElement.removeEventListener('click',handleUserClick);

    for (let i = 0; i < Goat.allGoats.length; i++) {
      console.log(Goat.allGoats[i].votes);
      votesArr.push(Goat.allGoats[i].votes);
      shownArr.push(Goat.allGoats[i].shown);
      
    }

    console.log(votesArr);

    imagesDiv.removeEventListener('click', handleUserClick);

    showChart();

  }
  userAttemptsCounter++;

}


console.log(namesArr);
// console.log(votesArr);


function showChart() {

  const data = {
    labels: namesArr,
    datasets: [{
      label: 'Votes',
      data: votesArr,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    },
    {
      label: 'Shown',
      data: shownArr,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }
  
  ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };


  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

}