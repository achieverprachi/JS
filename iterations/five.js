const coding = ["js", "ruby", "java", "python", "cpp"]

// coding. krkr use kiya j
// where coding is an aarray
// fucntion name hata do
// add a callback fucntion in the ()
coding.forEach( function (val){
    console.log(val);
} )


coding.forEach( (item) => {
    console.log(item);
} )

function printMe(item){
    console.log(item);
}


//can even pass a fucntion in th ()
coding.forEach(printMe)



coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )




//array ke andar multiple onjects hn 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]


// to iterate an array having multiple objects 
// item has refernce to the object 
// object has two propertoies and it can access both 
myCoding.forEach( (item) => {
    console.log("Object is ");
    console.log(item.languageName);
    console.log(item.languageFileName);
} )