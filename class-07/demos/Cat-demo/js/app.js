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
// let frankie={
//     name:'frankie',
//     age:0,
//     likes:['napping','cuddiling','eating'],
//     isGoodWithKids:true,
//     isGoodWithDogs:false,
//     isGoodWithOtherCats:true,
//     breed:'angora',

//     getAge:function(){
//         this.age=random(3,12)+' months'
//         console.log(this.age);
//         console.log(this);
//     },

// }



// frankie.getAge();



// this is from w3Schooles
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let kittens=[];

function Kitten(name, intersts, isGoodWithDogs, isGoodWithKids, isGoodWithOtherCats) {

    this.name = name;
    this.age = 0;

    this.intersts = intersts;
    this.isGoodWithDogs = isGoodWithDogs;
    this.isGoodWithKids = isGoodWithKids;
    this.isGoodWithOtherCats = isGoodWithOtherCats;


    kittens.push(this);


}

let total=0;


Kitten.prototype.getAge=function(){
    this.age=random(3,12);
    total+=this.age;
}

let frankie= new Kitten('frankie',['napping','cuddiling','eating'],true,false,true);
// frankie.getAge();

let serena= new Kitten('serena',['napping','cuddiling','eating'],true,false,true);

let jumper= new Kitten('jumper',['napping','cuddiling','eating'],true,false,true);

// serena.getAge()




function header(){

}



Kitten.prototype.render=function(){

    let parent=document.getElementById('kittenProfiles');

      // create a new element, or elements, that represent frankie
    // article
    // inside that article, h2 for the name, paragraph with their age, ul and some lis with their interests, image

    // create article
    let articleElement = document.createElement('article');

    // adding article to div
    parent.appendChild(articleElement);


    // creating element
    let h2Element = document.createElement('h2');

    // appending element
    articleElement.appendChild(h2Element);

    // text content
    h2Element.textContent = this.name;


    // create paragraph

    let paraElement = document.createElement('p');

    // append
    articleElement.appendChild(paraElement);

    // text content
    paraElement.textContent = ` ${this.name} is adorable and is ${this.age} old`;

        // create ul
        let ulElement = document.createElement('ul');

        // append
        articleElement.appendChild(ulElement);
    
    
        for (let i = 0; i < this.intersts.length; i++) {
            // create li
            let liElement = document.createElement('li');
    
            // appending li
            ulElement.appendChild(liElement);
    
            // text content
            liElement.textContent = this.intersts[i];
    
        }
        /*
         */
    
    
        let image = document.createElement('img');
        articleElement.appendChild(image);
    
        image.setAttribute('src', 'images/' + this.name + '.jpeg');



        let table=document.createElement('table');

        parent.appendChild(table);

        // heading row:
        let headingRow=document.createElement('tr');

        table.appendChild(headingRow);

        let interestsArr=['isGoodWithDogs', 'isGoodWithKids', 'isGoodWithOtherCats'];

        for (let i = 0; i < interestsArr.length; i++) {
            let thEl=document.createElement('th');

            headingRow.appendChild(thEl);

            thEl.textContent=interestsArr[i];
            
        }


        let dataRow=document.createElement('tr');

        table.appendChild(dataRow);


        let td1=document.createElement('td');
        dataRow.appendChild(td1);

        td1.textContent=this.isGoodWithDogs;



        let td2=document.createElement('td');
        dataRow.appendChild(td2);

        td2.textContent=this.isGoodWithKids;


        let td3=document.createElement('td');
        dataRow.appendChild(td3);

        td3.textContent=this.isGoodWithOtherCats;

}

function footer(){

}


for (let i = 0; i < kittens.length; i++) {
    kittens[i].getAge();
    kittens[i].render();
}
console.log(total);
console.log(kittens);