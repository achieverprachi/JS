const name = "mudgil"
const names = 'prachi'
const repoCount = 50

// outdated
 console.log(name + repoCount + " Value");

 //$ is used to make the variable holder
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// here the values are sored as key-value pairs instead 
// iit is still an object only 
const gameName = new String('Prachi-Mudgil-17')

 console.log(gameName[0]);
 console.log(gameName.__proto__);
console.log(gameName.length);
 console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

// en value is not included
const newString = gameName.substring(0, 4)
console.log(newString);

// starts from back
// cannot gove negative values in the substring , can gvie in slice only 
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

// cna add limit also alongwth the separator
console.log(gameName.split('-'));