
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);

})();
// in the above after () a ; is added to end the above iife , else it will show error in execution of below

//

// to prevent from the pollution of the global scope declaration 
  // ()()      (for the fucntion definition )(for the function execution )    ()() 

//

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Prachi Mudgil')