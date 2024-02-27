let num = 65;
let count = 0;
let foundPrime = false;
while (!foundPrime) {
    // console.log(num++);
    // count++;
    let isPrime = true;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && num > 1) {
        console.log(num + " is prime");
        foundPrime = true;
    }
    num++;
}