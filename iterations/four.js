
const myObject = {
    //key -> myObject[key]
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}


// these loops are of the form for->in
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// array
//in arrays the kys are the indexes starting from 0
// but in objects we can have the keys accoding to our wish
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


// we cannot use for->in method to iterate in maps 
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }