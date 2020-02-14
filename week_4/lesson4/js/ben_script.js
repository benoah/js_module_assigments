// Lesson 4 -practice question

/* Question 1 
Looping through arrays of object
important because that's how lists of results get returned from API calls.
*/

// loop through the array below

const cars = [
  {
    type: "BMW",
    age: 4,
    beenInAccident: false
  },
  {
    type: "Toyota",
    beenInAccident: true
  },
  {
    type: "Ford",
    beenInAccident: true
  },
  {
    type: "Ferrari",
    age:10,
    beenInAccident: true
  }
];


for ( let i = 0; i< cars.length; i++){
    let carAge = "unknown age"
//console.log("what is it", cars[i].age)
    if (cars[i].age){
        carAge = cars[i].age;
    }
}

cars.forEach(function(car){
    let carAge = "unknown age";

    if (car.age){
        carAge = car.age;
    }
    console.log("foreach", carAge);
})

/*
Question 2
Functions allow us to create reusable code. 
We can return values from functions and assign those
return values to variables.
*/


// when we call the function pass th elefants array above into the function.
// create an img for each object  with src
// and alt attributes created from the properies in each object


const elephants = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: "Given to a Carolingian emperor." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "From the Mysore Dasara procession." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "Known for her tightrope walking act." }
];



function createPhoto(images){
    let html= ""

    for ( let i = 0; i< images.length; i++){
        html += `<img src="${images[i].image}" alt="${images[i].note}">`;
    }
    return html;
}

const htmlobj = createPhoto(elephants);
console.log(htmlobj);



// forEach loop
function createHtmlWithForEach(images) {
    let html = "";

    images.forEach(img => {
        html += `<img src="${img.image}" alt="${img.note}">`;
    });

    return html;
}

const html2 = createHtmlWithForEach(elephants);
console.log(html2);

// question 3

const elephants = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: null},
    { note: "From the Mysore Dasara procession." },
    { image: null, note: "Known for her tightrope walking act." }
];

let aDiv = document.getElementById("elephants")

for (let i = 0; i< elephants.length; i++){
    let img;
    let note;

    (elephants [i].image)? img = elephants[i].image :img = "placeholder or url"
    (elephants [i].note)? note = elephants[i].note : note = "default text"
    aDiv.innerHTML += `<img src"${img}" alt="${note}"`
}








