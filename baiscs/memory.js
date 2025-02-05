
//Stack (Primitive),       Heap (Non-Primitive)
let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console. log (myYoutubename) ; 
console. log (anothername);


// here the userone and usertwo are ahvinh the memory location by refrence 
//if one changes the corresponding othe will also be chnaged which was poitining ot that location only in the heap
let userOne = {
    email: "user@google.com",
     upi: "user@ybl"
}
    let userTwo = userOne
    userTwo. email = "hitesh@google.com"

    // boths will have new chnages email now
    console.log(userOne.email)
    console.log(userTwo.email)
