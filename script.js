
function oddEven(){                                       // function starts

    const num = Number(input.value);                      // input is converted to number

    if(num == ''){                                       // checking the input is empty or not
        alert("Enter Something !");
        input.value = "";
        output.innerHTML = "";
    }
    else if(num != input.value){                         // checking the input is number or not
        alert("Enter a Number !");
        input.value = "";
        output.innerHTML = "";
    }
    else if(num % 2 == 0){                              // checking the input is Even or not
        output.innerHTML = num + " is Even Number";
        input.value = "";
    }
    else{
        output.innerHTML = num + " is Odd Number";
        input.value = "";
    }
}                                                       // function ends



function isPrime(){                                     // function starts

    const num = Number(input.value);                     // input is converted to number
    let isPrime = true;

    if(num <= 1){                                       // checking number is greater than 1
        isPrime = false;
    }
    else{
        for(let i = 2; i <= Math.sqrt(num); i++){        // checking number is Prime or not
            if(num % i == 0){
                isPrime = false;
                break;
            }
        }
    }

    if(num == ''){                                       // checking the input is empty or not
        alert("Enter Something !");
        input.value = "";
        output.innerHTML = "";
    }
    else if(num != input.value){                         // checking the input is number or not
        alert("Enter a Number !");
        input.value = "";
        output.innerHTML = "";
    }
    else if(num <= 0){                                  // checking the input is positive or not
        alert("Enter a Positive Number !");
        input.value = "";
        output.innerHTML = "";
    }
    else if(isPrime){                                       // checking true or false
        output.innerHTML = num + " is Prime Number";
        input.value = "";
    }
    else{
        output.innerHTML = num + " is Composite Number";
        input.value = "";
    }
}                                                       // function ends



function factorial(){                                       // function starts

    const num = Number(input.value);                      // input is converted to number
    let fact = 1;

    if(num == ''){                                       // checking the input is empty or not
        alert("Enter Something !");
        input.value = "";
        output.innerHTML = "";
    }
    else if(num != input.value){                         // checking the input is number or not
        alert("Enter a Number !");
        input.value = "";
        output.innerHTML = "";
    }
    else if(num <= 0){                                  // checking the input is positive or not
        alert("Enter a Positive Number !");
        input.value = "";
        output.innerHTML = "";
    }
    else{    
        for (var i=2; i<=num; i++){                        // finding factorial for input
            fact *=i ;
        }
        output.innerHTML = "The Factorial of "+ num +" is "+ fact;
        input.value = "";
    }   
}                                                       // function ends



function fibonacci(){                                       // function starts

    const num = Number(input.value);                      // input is converted to number
    let fibo = [0, 1];

    if(num == ''){                                       // checking the input is empty or not
        alert("Enter Something !");
        input.value = "";
        output.innerHTML = "";
    }
    else if(num != input.value){                         // checking the input is number or not
        alert("Enter a Number !");
        input.value = "";
        output.innerHTML = "";
    }
    else if(num <= 0){                                  // checking the input is positive or not
        alert("Enter a Positive Number !");
        input.value = "";
        output.innerHTML = "";
    }
    else if(num < 2){                                  // checking the input is lesser than 2
        output.innerHTML = "The Fibonacci Sequence of "+ num +" is "+ fibo[num - 1];
        input.value = "";
    }
    else{    
        for (var i=2; i<num; i++){                        // finding fibonacci for input
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
        output.innerHTML = "The Fibonacci Sequence of "+ num +" is "+ fibo.join(", ");
        input.value = "";
    }     
}                                                       // function ends



function palindrome(){                                       // function starts

    let inputSt = input.value;
    var revInput = inputSt.split("").reverse().join("");       // Reverse the input

    if(inputSt == ''){                                       // checking the input is empty or not
        alert("Enter Something !");
        input.value = "";
        output.innerHTML = "";
    }
    else if (inputSt === revInput){                              // checking the input is Palindrome or not
        output.innerHTML = inputSt +" is a Palindrome";
        input.value = "";
    }
    else{
        output.innerHTML = inputSt +" is not a Palindrome";
        input.value = "";
    }
}                                                       // function ends




var input = document.getElementById('inputBx');         // assigning input to variable using Id and DOM
var output = document.getElementById('outputBx');       // assigning output to variable using Id and DOM
