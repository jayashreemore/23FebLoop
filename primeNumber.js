// program to check if a number is prime or not

// take input from the user
let number = 5;
let isPrime = true;
let test = number + 1;
// check if number is equal to 1
//if (test == 1) {
//    console.log("enter number greater that 2");
//}

// check if number is greater than 1
// looping through 2 to number-1
for (let j = test; j < test * 2; j++) {
    console.log("value of j is : " + j);
    //    for (let i = 2; i < j; i++) {
    //        if (j % i == 0) {
    //            isPrime = false;
    //            break;
    //        }
    //    }
}
if (isPrime) {
    console.log(`${number} is a prime number`);
} else {
    console.log(`${number} is a not prime number`);
}


// check if number is less than 1
 {
    console.log("The number is not a prime number.");
}