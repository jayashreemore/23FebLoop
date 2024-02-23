/*
/   Types of Loops that we will cover
/       for
/       for .. in
/       for .. of
/       while
/       do .. while
/       labeled statements 
*/

/*
/   for loops
*/
// General syntax
// for (initialization; condition; afterthought) {
//      statements
//  }

// start with i=0, so that the initialialization
// i<10 is the condition, so we check if that is true before we start the loop each time
// if it is TRUE, do the things {}
// then i++
// repeat starting with the check
for (let i=0; i<=9; i+=3) {
    // console.log(i);
    if (i>5) {
        // console.log('this is more than 5')
    }
}

/*
/   looping through iterables
/   for .. in
/   for .. of
*/
// what is an iterable?
// something where you can go through each individual element
// examples are strings, arrays...
const str = "Hello World";
// strings have a length property that you can access
// str.lenth of "Hello World" is 11
for (let i=0; i<str.length; i++) {
    // console.log(str[i]);
}

// for .. in
// general syntax
// FOR THIS ONE, I AM USING THE position in the string
// for (const i in _iterable_variable_)
// why might this be better?
for (let i in str) {
    // console.log(str[i]);
}

// for .. of
// FOR THIS ONE, I AM USING THE element that is in that position
// general syntax
// for (const _name_individual_var in _iterable_var_)
// how is this different?
// console.log(str);
for (const char of str) {
    // console.log(char);
}

/*
/   continue
*/
let str2 = 'blah blah blah blah blah'
for (let i=0; i<str2.length; i++) {
    // continue moves on to the next iteration of the loop
    if (str2[i] == 'l') {
        continue;
    }
    // console.log(str2[i]);
}

console.log('****');

// how does that look different from break?
for (let i=0; i<str2.length; i++) {
    // break moves out of the loop completely
    if (str2[i] == 'l') {
        break;
    }
    // console.log(str2[i]);
}

// console.log('i am no longer in the loop')

/*
/   while loops
*/ 
// you only do the things while the condition is true
// an example is that you are getting weather data from somewhere
// you have a variable that is isRaining
// while (isRaining) {
//  show umbrella icon
// }

let num = 40, count = 0;
while (num % 2 === 0) {
    count++;
    num /= 2;
    console.log(num)
}
console.log(`count is ${count}`)
console.log('count is ', count)

let a = 1;
while (a < 10) {
    console.log(a);
    a += 2;
}

// while (condition is true) {
//  do some things
//  change the variable that the condition is testing    
//}