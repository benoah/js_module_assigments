/*console.log("hello world");

const greeting= "hello there people";
const lengthOfGreeting = greeting.length;

console.log("string chars", lengthOfGreeting);

const emptyString = "";
console.log("empty string", emptyString.length);


const spaceText= "ab";
console.log("spaceTest", spaceText.length);*/

const firstName = document.querySelector("#firstNmae");
firstName. addEventListener("keyup", loglength)


function loglength() {
  const inputValue = event.target.value;
  const valueLength = inputValue.length;
  // console.log(valueLength);
  // you can aslo write it like this
  // console.log(valueLength > 0);
  console.log(inputValue.length);

  if (valueLength > 0) {
    console.log("the input has a value");
  } else {
    console.log("the input does not have a value");
  }
}

// Dette er for å bryte lengden for å få kortere setning(rett og slett dekke space)
/*
const firstName = "manny";
console.log(firstName.length);

const trimedName = firstName.trim();
console.log(trimedName.length);

const space = " ";
console.log("how many spaces:"; space.length);
console.log("remove space" space.trim().length);
*/