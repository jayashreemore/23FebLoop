// for (let i=0; i<10; i++){
//     console.log(i);
// }

// for (let i=0; i<10; i+1){
//     console.log(i);
// }

// you ll get so many zero so press control and c on keyboard 

// for (let i=0; i<10; i++){
//     console.log(i);
// }
console.log('count down') 
for (i = 10; i > 0; i--) {
     console.log(i);
}

console.log('even number')
for (let i = 0; i< 10; i+=2) {
     console.log(i);
 }


// for (let i = 0; i< 10; i+=2) {
//       console.log(i);
//      }
console.log('odd number')

for (let i =1; i<10; i+=2) {
    console.log(i);
}

console.log('multiple of 3')

// for (let i = 3; i<=60; i+=3){
//     console.log(i);
// }

// multiple of 3, starting form 6 till 60
console.log ('multiple of 3')
for (let i = 6; i<=60; i+=3){
    console.log(i);
}

// Output an increasing number of # symbols, from 1 to 7, as shown below.

// console.log('# symbols');
//     for (let i = 1 ; i <= 7; i++ ){
//         console.log (i); 
//     }
    
   console.log('# symbols');

   let symbol = '#'
   for (let i=1; i<=7; i++) {
    console.log(symbol);
    symbol=symbol+'#'
   }