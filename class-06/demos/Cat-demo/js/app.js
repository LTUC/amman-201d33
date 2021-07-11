// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects


'use strict';

// Object literals
let frankie={
    name:'frankie',
    age:0,
    likes:['napping','cuddiling','eating'],
    isGoodWithKids:true,
    isGoodWithDogs:false,
    isGoodWithOtherCats:true,
    breed:'angora',

    getAge:function(){
        this.age=random(3,12)+' months'
        console.log(this.age);
        console.log(this);
    },

}



frankie.getAge();



// this is from w3Schooles
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// console.log(random(3,12));


// console.log(Math.random()*10);


// console.log(Math.floor(5.3));

// console.log(Math.ceil(5.3));

// console.log(Math.round(5.5));



// DOM 


// get the element by id from html, where i will be showing the kitten
let parent=document.getElementById('kittenProfiles');
console.log(parent);



// create the elements for frankie
let articleElement=document.createElement('article');

// append article to the parent
parent.appendChild(articleElement);



// creating the h2 
let h2Element=document.createElement('h2');

// append
articleElement.appendChild(h2Element);

// text content
h2Element.textContent=frankie.name;



// create ul
let ulElement=document.createElement('ul');


// append ul

articleElement.appendChild(ulElement);


// creating the li

for (let i = 0; i < frankie.likes.length; i++) {
    // create i
   let liElement= document.createElement('li');

    // append li
    ulElement.appendChild(liElement);

    // text content:
    liElement.textContent=frankie.likes[i];
    
}

// create the image:
let imageElement=document.createElement('img');

// append
articleElement.appendChild(imageElement);

// give src to img
imageElement.setAttribute('src','images/'+frankie.name+'.jpeg');
// 'images/frankie.jpeg'





// SERENA



let serena={
    name:'serena',
    age:0,
    likes:['napping','cuddiling','eating'],
    isGoodWithKids:true,
    isGoodWithDogs:false,
    isGoodWithOtherCats:true,
    breed:'angora',

    getAge:function(){
        this.age=random(3,12)+' months'
        console.log(this.age);
        console.log(this);
    },
    

}



serena.getAge();



// this is from w3Schooles
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// console.log(random(3,12));


// console.log(Math.random()*10);


// console.log(Math.floor(5.3));
// 5.87=>5 

// console.log(Math.ceil(5.3));
// 5.1 => 6 

// console.log(Math.round(5.5));
// 5.6 => 6
// 5.4 => 5


// DOM 


// get the element by id from html, where i will be showing the kitten

serena.render=function () {
    

// create the elements for frankie
let articleElement=document.createElement('article');

// append article to the parent
parent.appendChild(articleElement);



// creating the h2 
let h2Element=document.createElement('h2');

// append
articleElement.appendChild(h2Element);

// text content
h2Element.textContent=this.name;



// create ul
let ulElement=document.createElement('ul');


// append ul

articleElement.appendChild(ulElement);


// creating the li

for (let i = 0; i < this.likes.length; i++) {
    // create i
   let liElement= document.createElement('li');

    // append li
    ulElement.appendChild(liElement);

    // text content:
    liElement.textContent=this.likes[i];
    
}

// create the image:
let imageElement=document.createElement('img');

// append
articleElement.appendChild(imageElement);

// give src to img
imageElement.setAttribute('src','images/'+this.name+'.jpeg');
// 'images/frankie.jpeg'



}
serena.render();







// object literals
// bracket and dot notation
// math.random
// add kittens to the page
// each kitten gets an Article
// each kitten's name shown as a subhead
// each pic shown as an image with dynamically-created filename (involves setting attributes)
// each array of interests shown as a list
// getElementById
// createElement
// createTextNode
// appendChild



// let hours =[ 6am,7am,8am]

// name seattle
// min 23
// max 65
// avg 6.3
// randomCustomers:[]
// avgCookiesperHour:[]
// method for generating arandom num of customers each hour
// [23,40,50,27....]

// method for avgCOOKIES
// [23*6.3,]

// method for rendering:





// name tokyo
// min 3
// max24
// avg 1.2
// randomCustomers:[]
// avgCookiesperHour:[]
// method for generating arandom num of customers each hour
// [23,40,50,27....]

// method for avgCOOKIES
// [23*6.3,]  

// method for rendering:

