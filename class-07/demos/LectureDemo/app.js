'use strict';



// let abdulraheem={
//     name:'abdulraheem',
//     job:'student',
//     age:26,
//     slaray:200000,
    
//     walk:function () {
//         console.log('im walking here');
//     }



// }

// console.log(abdulraheem);
// abdulraheem.walk();

// let ahmad={
//     name:'ahmad',
//     job:'student',
//     age:30,
//     slaray:350,
    
//     walk:function () {
//         console.log('im walking here');
//     }



// }

// console.log(ahmad);
// ahmad.walk();


// camel case
// userName


// Pascal
// Math
// String
// console.log(String);


let students=[];

function Student(name,age,weight){
    this.userName=name;
    this.age=age;
    this.weight=weight;
    console.log(this);

    this.walk=function () {
        console.log('im walking here',this.userName);
    }

    students.push(this);

}

// new instance of the contstructor
let abdulraheem= new Student('abdulraheem',27,80);

abdulraheem.walk();

// console.log(abdulraheem);

console.log(abdulraheem.weight);

// console.log(Student.weight);

let ahmad= new Student('ahmad',30,95);
// console.log(ahmad);
ahmad.walk();

let mohamad= new Student('mohammad',22,120);
// console.log(mohamad);

let asmaa= new Student('asmaa',22,50);

// methods should be written outside:
Student.prototype.talk=function () {
    console.log('hello from prototype method',this.age);
    console.log(this.age+this.weight);
}

mohamad.talk();



// *****TABLES
/*
header:
the first row in the table it has table headings

<table>
 <tr>
   <th>
   </th>
  </tr>

</table>




normal rows they have table data
<table>
 <tr>
   <th>
   </th>
  </tr>


  <tr>
   <td>
   </td>
  </tr>
    <tr>
   <td>
   </td>
  </tr>
  

</table>



footer row

the last row in the table it has table headingsor table data

<table>
 <tr>
   <th>
   </th>
  </tr>


  <tr>
   <td>
   </td>
  </tr>
    <tr>
   <td>
   </td>
  </tr>


   <tr>
   <th>
   </th>
  </tr>
  

</table>




*/


let parent =document.getElementById('parent');
console.log(parent);
// create table
let table=document.createElement('table');

// append
parent.appendChild(table);


// creating the header row:
let headingRow=document.createElement('tr');

// append it o the table
table.appendChild(headingRow);


// MAKING THE TH
let headings=['name','age'];

for (let i = 0; i < headings.length; i++) {
    // make th element
    let thElement=document.createElement('th');

    // append
    headingRow.appendChild(thElement);

    // text conent
    thElement.textContent=headings[i];
    
}


// array of students
// let students=[ahmad,mohamad,abdulraheem];

// console.log(students);

for (let i = 0; i < students.length; i++) {
    // console.log(students[i].userName);
    let studentRow=document.createElement('tr');

    // append
    table.appendChild(studentRow);


    // creating the td for name
    let nameData=document.createElement('td');

    // append name td for tr
    studentRow.appendChild(nameData);
 
    // give text content 
    nameData.textContent=students[i].userName;

    
    let ageData=document.createElement('td');

    studentRow.appendChild(ageData);

    ageData.textContent=students[i].age
    
}
