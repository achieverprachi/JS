const score = 400
 console.log(score);

 // can see other properties which comes woth it ehoile using in the console also 
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
// to set the precision value
console.log(balance.toFixed(1));

// how many valuyes to focus  for the precision
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));


const hundreds = 1000000
// to add commas acc to indian standardd
 console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

 console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));
// gicv4 val between 0 nand 1
console.log(Math.random());
//to ecncounter the case of 0.004
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)