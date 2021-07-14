'use strict';
// JavaScript Objects - what are objcts?

// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

let cats = [];

function Cat(name, likes, img, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats, breed) {
  this.name = name;
  this.age = 0;
  this.likes = likes;
  this.img = img;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithOtherCats = isGoodWithOtherCats;
  this.breed = breed;
  cats.push(this);
}

Cat.prototype.getAge = function () {
  this.age = getRandomNumber(1, 12);
  // console.log(this.name + ' is ' + this.age + ' months years old');
};

let parentElement = document.getElementById('kittenProfiles');
Cat.prototype.render = function () {

  let article = document.createElement('article');
  parentElement.appendChild(article);

  let h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);

  let p = document.createElement('p');
  p.textContent = ` Age : ${this.age}`;
  article.appendChild(p);

  let ul = document.createElement('ul');
  article.appendChild(ul);

  for (let i = 0; i < this.likes.length; i++) {
    let li = document.createElement('li');
    li.textContent = this.likes[i];
    ul.appendChild(li);
  }

  let img = document.createElement('img');
  img.setAttribute('src', this.img);
  img.setAttribute('alt', 'this is an image of ' + this.name);
  article.appendChild(img);


  let tableElement=document.createElement('table');
  article.appendChild(tableElement);


  let headingRow=document.createElement('tr');
  
  tableElement.appendChild(headingRow);

  let intrestsArr=['isGoodWithKids', 'isGoodWithDogs', 'isGoodWithOtherCats']

  for (let i = 0; i < intrestsArr.length; i++) {
      let thElement=document.createElement('th');
      headingRow.appendChild(thElement);
      thElement.textContent=intrestsArr[i]
      
  }

  let dataRow=document.createElement('tr');
  tableElement.appendChild(dataRow);
  
  let td1=document.createElement('td');
  dataRow.appendChild(td1);
  td1.textContent=this.isGoodWithKids;

  let td2=document.createElement('td');
  dataRow.appendChild(td2);
  td2.textContent=this.isGoodWithDogs;

  let td3=document.createElement('td');
  dataRow.appendChild(td3);
  td3.textContent=this.isGoodWithOtherCats;





};

let frankie = new Cat('frankie', ['chasin string', 'eating'], 'images/frankie.jpeg', true, false, true, 'british');

// frankie.getAge();
// frankie.render();

let jumper = new Cat('jumper', ['playing', 'eating'], 'images/jumper.jpeg', true, false, true, 'italian');

// jumper.getAge();
// jumper.render();


// console.log(frankie);
// console.log(jumper);





function getRandomNumber(min, max) {
  let random = Math.random(); // 0 - 1
  random = (random * (max - min + 1)) + min; // less than or equal max
  random = Math.floor(random); // remove fractions
  return random;
}





// getting the tag from html
let form=document.getElementById('form');

// adding the event listener
form.addEventListener('submit',formSubmitter);

// create the function that will rn when we submit the form

function formSubmitter(event) {
  event.preventDefault();
  console.log(event);
  // console.log(event.target.likesField.value);
  let name=event.target.nameField.value;
  // console.log(name);

  let likes=event.target.likesField.value;

  // console.log(likes);

  let likesArr=likes.split(',');
  // console.log(likesArr);


  let image=event.target.image.value;
  // console.log(image);



 let isGoodWithKids=event.target.isGoodWithKids.checked;
//  console.log(isGoodWithKids);

 let isGoodWithDogs=event.target.isGoodWithDogs.checked;

 let isGoodWithOtherCats=event.target.isGoodWithOtherCats.checked;

 let addedCat=new Cat(name,likesArr,image,isGoodWithKids,isGoodWithDogs,isGoodWithOtherCats)
 
//  addedCat.getAge();
//  addedCat.render();

//  console.log(addedCat);
//  console.log(addedCat.name); 

 console.log(cats);

 parentElement.textContent='';

//  header
console.log('after',cats);
 //  arryas cookies,customers and the total
  // arrays =[]
  // 
  // total=0
  

 for (let i = 0; i < cats.length; i++) {
 
  
  cats[i].getAge();
  cats[i].render();
}
// footer
 






  // name, likes, img, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats,

  // new Kitten(name,[])
  
}








console.log('before',cats);

for (let i = 0; i < cats.length; i++) {
  cats[i].getAge();
  cats[i].render();
}

