//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}

// console mein and working environment mein scope are differnt thing


console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "prachi"

    // iska scop bss within { } hi hoga 
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // cannot acces , out of scope
    // console.log(website);
}

// cannot access , out of scope
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


// it will be showing error becuase , here the fucnion decelartion is stored in a const addTwo , 
// therofre it will be genrating an error
// but im the above function it was decalred another way
// thereofre when addone called before the fucntion declearation it showed no errror and executed properly 
addTwo(5)
const addTwo = function(num){
    return num + 2
}