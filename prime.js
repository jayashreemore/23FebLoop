let test = 8;
let isPrime = true;
for (var j = test; j < 15; j++)
{
    console.log("value of j is : " + j);
    for ( var i = 4; i < j; i++) 
    {   //console.log("value of i is : " + i)
        if (j % i == 0) 
        {   console.log("value of i is : " + i)
            isPrime = false;
            continue;
        }
        else{break;}
    }
    
    
}

if(isPrime)
console.log("next prime number is : " + j);