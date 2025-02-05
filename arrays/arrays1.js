// array

// can be a mix of data typ
// can be resized
// can access teh value in the genral way , 0 indexing 
// based on shallow copy 
// same refernce point , like in heap
const myArr = [0, 1, 2, 3, 4, 5 , true , "Prachi"]
const myHeors = ["shaktiman", "naagraj"]


// no square bracket heere
// here we give the value direvtly 
const myArr2 = new Array(1, 2, 3, 4)
 console.log(myArr[1]);

// Array methods

 myArr.push(6)
myArr.push(7)
console.log(myArr);
 myArr.pop()
 console.log(myArr);

 // add the value att the beginning of the array - like fr to do maybe required
myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);

// boolean
 console.log(myArr.includes(9));

 // tell the index
 console.log(myArr.indexOf(3));


 //binds the array converting to string 
const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

// in splice the orignal array in manipulated 
// the range of index 1-3 inclduing the 3(unlike slice) is removed form the origivla array
const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);