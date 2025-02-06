// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]


// these are the loops of form for-> of
for (const it of arr) {
    console.log(it);
}

const greetings = "Hello Prachi!"
for (const it of greetings) {
    console.log(`Each char is ${it}`)
}


// Maps
 const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
 console.log(map);

for (const [key, value] of map) {
     console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// myObject is not iterable with the below code 
// it will have a difffernce way to iterate 
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}