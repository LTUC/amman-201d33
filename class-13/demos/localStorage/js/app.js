'use strict';

// target our order form from the html
const orderForm = document.getElementById('orderForm');
const orders = document.getElementById('orders');


// constructor function to create a basic drink
function Coffee(name, size, milk, isHot, drinkType){
  this.name = name;
  this.size = size;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.milk = milk;

  // add every drink that gets created into an array
  Coffee.drinks.push(this);

  updateStorage();

}

// set the global array to empty
Coffee.drinks = [];

Coffee.prototype.drinking=function () {
  console.log(drinking);
}

function updateStorage() {
  
  // console.log(Coffee.drinks.toString());
  console.log(Coffee.drinks);

  let stringArr=JSON.stringify(Coffee.drinks);
  console.log(stringArr);

  localStorage.setItem('coffee',stringArr);

}

function getCoffeeOrders() {
  // get data from local storage
  let data=localStorage.getItem('coffee');
  console.log(data);

  // convert the string array into a normal one:
  let parsedArr=JSON.parse(data)
  console.log(parsedArr);

  // if the first time coming to the page, make sure there will be data in the storage and then make it equal to the Coffee.drinks
  if (parsedArr !==null) {
    // YOU can either do this But it wont have the prototype methods
    // Coffee.drinks=parsedArr;


    // this will cause an error because there is NO prototype methods for the data coming from local storage
    // for (let i = 0; i < parsedArr.length; i++) {
    //  parsedArr[i].drinking();
    // }
    

    // OR YOU DO reinstantiation TO HAVE THE PROTOTYPE AGAIN
    // reinstantiation
    for (let i = 0; i < parsedArr.length; i++) {
      console.log(parsedArr[i]);
      // name, size, milk, isHot, dType
      new Coffee(parsedArr[i].name,parsedArr[i].size,parsedArr[i].milk,parsedArr[i].isHot,parsedArr[i].drinkType);

      // new Shop(parsedArr[i].name)
    }
    console.log(Coffee.drinks);

  }

  renderOrders();
}



// event handler function to run everytime the form is submitted
function handleSubmit(event){
  event.preventDefault();
  console.log(event.target);

  // get all the values from the form
  const drink = event.target;
  const name = drink.name.value;
  const size = drink.size.value;
  const isHot = drink.isHot.value;
  const dType  = drink.drinkType.value;
  const milk = drink.milk.value;

  new Coffee(name, size, milk, isHot, dType);

  // update the previous orders with the new order
  renderOrders();

  console.log(Coffee.drinks);

}


function renderOrders(){
  // clear all my current uls to prevent duplicate information
  orders.textContent = '';

  // go through the array and output the details of each drink in the array
  for(let i = 0; i < Coffee.drinks.length; i++){
    const drinkLI = document.createElement('li');
    const infoP = document.createElement('p');
    let temp;
    if(Coffee.drinks[i].isHot === 'on'){
      temp = 'cold';
    } else{
      temp = 'hot';
    }
    infoP.textContent = `${Coffee.drinks[i].name} orderd a ${temp} ${Coffee.drinks[i].size} ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk}`;
    drinkLI.appendChild(infoP);
    orders.appendChild(drinkLI);
  }
}

// Add an event listener to the submit button
orderForm.addEventListener('submit', handleSubmit);


getCoffeeOrders();