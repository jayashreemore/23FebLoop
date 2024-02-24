/*

/*
    for (let i = 2; i < input++; i++) 
    {   
        console.log(" value of i is  " + i);
        console.log(" value of input is  " + input);
        //console.log("is prime variable value is " + isprime);
        if (input % 2 == 0 || input % 3 ==0 ) 
        {
          //  console.log("input varible value is " + input );
          //  console.log("i varible value is " + i );
          //  console.log("is prime variable value is " + isprime);
            isprime = false;
            break;
        }
        
    }

    console.log("next prime number is : " + input);

    ----------------------------------*/

    function isPrime(n) { 
        // Corner case 
        if (n <= 1) 
            return false; 
  
        // Check from 2 to n-1 
        for (let i = 2; i < n; i++) 
            if (n % i == 0) 
                return false; 
  
        return true; 
    } 
  
    // Driver Code 
  
    isPrime(5)  
        ? console.log("true")  
        : console.log("false"); 




