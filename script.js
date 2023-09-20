
function calcuate(opt){                                             // function start
    const num = Number(input.value);                                // input is converted to number

    if((num == '') || (num != input.value)){                        // checking the input
        alert("Enter a Number !");
        output.innerHTML = "";
    }
    else if(opt == 'oddEven'){                                      // checking the input is Even or not
        (num % 2 == 0) ? output.innerHTML = num + " is Even Number." : output.innerHTML = num + " is Odd Number.";
    }
    else if(num <= 0){                                               // checking the input is positive or not
        alert("Enter a Positive Number !");
        output.innerHTML = "";
    }
    else{
        switch (opt) {
            case 'isPrime' :
                let Prime = true;
                if(num <= 1){                                       // checking number is greater than 1
                    Prime = false;
                }
                else{
                    for(let i = 2; i <= Math.sqrt(num); i++){        // checking number is Prime or not
                        if(num % i == 0){
                            Prime = false;
                            break;
                        }
                    }
                }        
                Prime ? output.innerHTML = num + " is Prime Number." : output.innerHTML = num + " is Composite Number." ;
                break;
        
            case 'factorial' :
                let fact = 1;
                for (var i=2; i<=num; i++){                              // Calculating factorial for input
                    fact *=i ;
                }
                output.innerHTML = "The Factorial of "+ num +" is "+ fact;
                break;
        
            case 'fibonacci' :
                let fibo = [0];
                for (var i=1; i<num; i++){                               // Calculating fibonacci for input
                    fibo[i] = fibo[i - 1] + fibo[i - 2];
                    fibo[1] = 1;
                }
                output.innerHTML = "The Fibonacci Sequence of "+ num +" is "+ fibo;
                break;
        }
    }
    input.value = "";
}                                                                           // function ends

function isPalindrome(){                                                    // function starts

    const inputSt = input.value;
    const revInput = inputSt.split("").reverse().join("");                  // Reverse the input

    if(inputSt == ''){                                                      // checking the input is empty or not
        alert("Enter Something !");
        output.innerHTML = "";
    }
    else                                                                     // checking the input is Palindrome or not
        (inputSt === revInput) ? output.innerHTML = inputSt +" is a Palindrome." : output.innerHTML = inputSt +" is not a Palindrome.";
    input.value = "";
}                                                                            // function ends


const input = document.getElementById('inputBx');                             // assigning input to variable using Id and DOM
const output = document.getElementById('outputBx');                           // assigning output to variable using Id and DOM
