const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//leads to creation of array within araay , 
// instead of merging the array
// it took array as an object 
 marvel_heros.push(dc_heros)

 //console.log(marvel_heros);
 //console.log(marvel_heros[3][1]);

 const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros);

 // it is a spread operator 
 // it spreads the elements in array as indivisual elemnt and then concatenats them 
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);





const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// helps in converting a single array till which depth 
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Prachi Mudgil "[12 , 34]))
console.log(Array.from("Prachi"))

//cnat understand what to convert ito array according to 
console.log(Array.from({name: "Prachi"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));