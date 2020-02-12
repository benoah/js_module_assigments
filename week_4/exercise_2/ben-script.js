const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto/";
const apiUrl2 = "https://randomuser.me/api/";
const apiUrl3 = "https://api.rawg.io/api/games";
const wrapperDiv = document.querySelector(".wrapper");

let pageNumber = 2;
let pageSize = 26;

let genre = "";
const queryString = document.location.search;
// we make template litteral
const combinedApiUrl = `${apiUrl3}${queryString}`; // backticks is option and the button on the right top
let giveMeQueryString = new URLSearchParams(queryString);

console.log("a", giveMeQueryString.has("genre"));
console.log("b", giveMeQueryString.get("genre"))





if (giveMeQueryString.get("genre") !== true) {
  genre = giveMeQueryString.get("genre");
  console.log(genre);
}

let newUrl = `${apiUrl3}${genre}`;



fetch(combinedApiUrl)
  .then(function(response) {
    if (response.status === 200) {
      return response.json();
    } else {
      console.log("oops error happend");
    }
  })
  .then(function(json) {
    const results = json;
     console.log (results);
    // pass in results array into function as an argument
    // getName(results);
    // getImage(results);
  })
  .catch(function(error) {
    console.log(error);
  });

// resultsArray is a parameter.waiting for
// and Array to be passed in

function getName(resultArray) {
  // console.log("it works", resultArray);
  for (let i = 0; i < resultArray.length; i++) {
    let returnHTML = "";
    let userFirstname = resultArray[i].name.first;
    let userLastname = resultArray[i].name.last;

    returnHTML += `${userFirstname} ${userLastname}`;

    let heading = document.createElement("h1");

    let addNameToFigure = wrapperDiv.appendChild(heading);
    addNameToFigure.innerHTML = returnHTML;
  }
}

function getImage(imageArray) {
  for (let i = 0; i < imageArray.length; i++) {
    let returnHTML = "";
    let photo = imageArray[i].picture.large;
    console.log(photo);
    returnHTML += `<img src="${photo}"/>`;
    let photoDiv = document.createElement("figure");
    let AddPhotoToDiv = wrapperDiv.appendChild(photoDiv);

    AddPhotoToDiv.innerHTML = returnHTML;
  }
}
