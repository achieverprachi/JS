// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

//key, value
const JsUser = {
    name: "Hitesh",
    // cantt access it with dot
    "full name": "Hitesh Choudhary",

    // to make it a symbol , square bracket mein declaare krna padega
    // nhi to string bn jaayega ye 
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

 console.log(JsUser.email)

// here will have to pass as string 
// since all the keys are stored as string
 console.log(JsUser["email"])

// console.log(JsUser["full name"])

 console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
/// so that its valuecant be cghangd now 
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
 console.log(JsUser);


 ////

 ////

 /////
JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    // single used to do string interpolation 
    // also this. is used to access the object's propertoes and attribites associated
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greetingTwo());

