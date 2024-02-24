// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.


for (var i = 1; i <= 100; i++) {
    if (i % 15 == 0)
        console.log("Number " + i + " is FizzBuzz");
    else if (i % 3 == 0)
        console.log("Number " + i + " is Fizz");
    else if (i % 5 == 0)
        console.log("Number " + i + " is Buzz");
    else
        console.log(i);

}

// for(i=0; i<=100;i++){
//     if(i/3==0){
//     console.log("Fizz");
//     }
//     else if( i%5==0 && i/3!==0){
//     console.log("Buzz");
//     }

//     }

/* solution 1---------
 
for (let x = 1; x <= 100; x++) {

     //Filter out the numbers indivisible by either 3 and 5
     if (!(x % 3 == 0) && !(x % 5 == 0)) console.log(x);
     //Filter out numbers divisible by 3 and 5
     else if ((x % 3 == 0) && (x % 5 == 0)) console.log("FizzBuzz");
     //Filter out numbers divisible by 3
     else if (x % 3 == 0) console.log("Fizz");
     //Filter out numbers divisible by 5
     else if (x % 5 == 0) console.log("Buzz");
     }
     */
// -----------------------

//Solution 2----------
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && 1 % 5 === 0) {
        console.log('FizzBuzz')
    }

    else if (i % 3 === 0) {
        console.log('Fizz')
    }
    else if (i % 5 == 0) {
        console.log('Buzz')
    }

    else {
        console.log(i)
    }
}*/

//-------------------