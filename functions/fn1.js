function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

 sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
    // any line or code here wont execute 
}

console.log(addTwoNumbers(3 , "5"))
console.log(addTwoNumbers("5" , "a"))
console.log(addTwoNumbers("4" , 3))

const result = addTwoNumbers(3, 5)
console.log("Result: ", result);


//${} it is used to use the value of the declared variable
// username = "sam" this is setting a predefined default value 
function loginUserMessage(username = "sam"){
    if(!username){ ///// if(username === undefined){ // when we don not pass aany value 
        console.log("PLease enter a username");
        return
    }
    // '' is iused so that we can doo the string manipualrtion 
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/// ... is the rest operator
function calculateCartPrice(val1, val2, ...num1){
    console.log("the val1 is " ,val1)
    console.log("the val2 is " ,val2)
    return num1
}


// val1 200 , val2 400 , num1 -> rest of the parameters passsed
 console.log(calculateCartPrice(200, 400, 500, 2000))



const user = {
    username: "hitesh",
    prices: 199
}

// baacktick used here because of thevairiable used 
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// an object is passed
//handleObject(user)

// here created and passsed simultaneousy 
handleObject({
    username: "sam",
    price: 399
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                   ////////////////Array
                                    ////////////////A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));