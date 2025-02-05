const user = {
    username: "hitesh",
    price: 999,
     

    // this refes to the current context
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // here the this is havinng the context of this fucntion welcomeMesaage
        console.log(this);
    }

}

 user.welcomeMessage()
// it is changing the current context , therofre the sam will be preinted in the welcom message 
user.username = "sam"
 user.welcomeMessage()



 // here we are in node env , there in no context of "this" right now 
 // return empty object {}
console.log(this);



/////////////Window is the globabl objct in tbe search engine , therofre on inspecting and calling this , we get the window as op
// also earlier , js was part of the engine
// but now it exists standalone


 function chai(){
     let username = "Prachi"
     // this type of this works in objects only not in the fucntions , theredore will come undefend
    console.log(this.username);
    console.log(this);
 }
 console.log("this is for the chai  fucntion ");
 chai()

 const chai2 = function () {
    let username = "Mudgil"
    console.log(this.username);
 }
 console.log("this is for the chai2  fucntion ");
 chai2()


// arrow function
// here this will return empty object 
const chai3 =  () => {
    let username = "Rachit"
    console.log(this);
}
console.log("this is for the arrow fucntion ");
 chai3()






// if parantheses {}, return likhna padega 
const addTwo = (num1, num2) => {
    return num1 + num2
 }

 // no need to write return here
 // no {} , no need to write return 
const addTwo1 = (num1, num2) =>  num1 + num2

// can add the () brackets also , making no differnce 
 const addTwo2 = (num1, num2) => ( num1 + num2 )

 // here {username: "hitesh"} is an object
 // and to retun an object it is mandatoru to add () 
 // without () , it will show undefiend
 const addTwo3 = (num1, num2) => ({username: "hitesh"})


 console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()