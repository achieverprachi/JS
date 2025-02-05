//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


// Reference (Non primitive)
// Array, Objects, Functions


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')
// not same since symbol has been used
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions--> all of these have data type as object

const heros = ["shaktiman", "naagraj", "doga"];

// can just make it inside { } alsso 
let myObj = {
    name: "hitesh",
    age: 22,
}

// function trated as vaiable
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof myObj);
console.log(typeof outsideTemp);


// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object