const myNums = [1, 2, 3]
// initilal value i adde donly one 

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 5)
// in above , 5 is the current value fof the accumulatoar 

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);





const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


// here 0 i the initial price of the accumualator acc , whic is clear in its purpose by name itslef 
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);