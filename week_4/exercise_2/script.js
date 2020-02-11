const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto/";
const apiUrl2 = "https://randomuser.me/api/";

const wrapperDiv = document.querySelector(".wrapper");

fetch(apiUrl2)
  .then(function(response) {
    if (response.status === 200) {
      return response.json();
    } else {
      console.log("oops error happend");
    }
  })
  .then(function(json) {
    const results = json.results;
    // pass in results array into function as an argument
    getName(results);
    getImage(results);
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

    returnHTML +=`${userFirstname} ${userLastname}`;

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

   AddPhotoToDiv .innerHTML = returnHTML;
  }
}



