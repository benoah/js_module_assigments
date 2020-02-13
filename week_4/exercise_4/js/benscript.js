
console.log("hello world");

function greeting(name){
    alert("hello" + name);
}

function processUserInput(callback){
    let name = prompt ("please enter your name")
    callback(name);
}

processUserInput(greeting);

// function expression 
let printName3 = function (){
    console.log("john");
}


// fuction expression alsi 
let printName2 = function printName2(){
    console.log("Sally");
}



// function declaration 
function printName(){  //named functtion
    console.log("manny");
}

console.log(notHoisted)

notHoisted();

const notHoisted = function(){
    console.log( "hello")
}


// we are going to set the timeout for the function it can have to para

setTimeout(printName, 2000);
setTimeout(printName2, 4000);
setTimeout(printName3, 5000);






function getResponse(response){
    return response.json()
}

function useJson(json){
    let myData = json.results;
    console.log(myData);
    return myData;
}

function showError(error){
    console.log(error);
}

fetch("https://api.rawg.io/api/creators")
.then(getResponse)
.then(useJson)
.catch(showError)


