// const tinderUser = new Object() ------> this is singleton
const tinderUser = {}            //  ------> this is non singleton 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: { // again an object
        userfullname: { // one more object within an object
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj6 = {5: "a", 6: "b"}

// wil create an object within object 
 const obj3 = { obj1, obj2 }

 // to solve the above probem use this 
 // {} act as teh target storage place 
 const obj4 = Object.assign({}, obj1, obj2, obj6)


 // spread operator used here
const obj5 = {...obj1, ...obj2}
console.log(obj5);


// array of objetcs
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "x@gmail.com"
    },
]
// to access and print 
console.log(users[0].email);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// used in databases 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 console.log(tinderUser);
 console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Deconstrucotr 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// to avoid calling the belwo statement again and gain we can make this //const {courseInstructor: instructor} = course
// course.courseInstructor


// {} ye dekhkr samjh jaao ki destructuring kari jaarahi h
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//{
    // here it is a json structure
    // in an object key value has a choiuce 
    // but here it has to be a string only 
    // we cannot write only name here
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//https://api.github.com/users/hiteshchoudhary
//can have the api data in object or arrays

[
    {},
    {},
    {}
]