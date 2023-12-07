// Primitive


// 7types : String, Number, Boolean, Null, Undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const loggedIn = false 
const outsideTemp = null 
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')


console.log(id === anotherId);

const bigNumber = 345678907654567890n //autumatically it takes bigInt


//Reference type  (Non-Primittive)

// Arrays, Objects, Functions 

const heroes = ["Shaktiman", "Superman", "batman"]
console.log(heroes);
const myObj = {
    name : "John",
    age : 23,
}
console.log(myObj);

const myFunction = function(){
    console.log("Hello World");
}


console.log(typeof heroes)