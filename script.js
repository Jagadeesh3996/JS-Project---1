

function oddEven() {

    let input = document.getElementById('inputBx').value;
    let number = Number(input);

    if(number == ''){
        alert("Enter Something !");
        document.getElementById('outputBx').innerHTML = "";
    }
    else if(number != input){
        alert("Enter a Number !");
        document.getElementById('inputBx').value = "";
        document.getElementById('outputBx').innerHTML = "";
    }
    else if(number % 2 == 0){
        document.getElementById('outputBx').innerHTML = number + " is Even Number";
        document.getElementById('inputBx').value = "";
    }
    else{
        document.getElementById('outputBx').innerHTML = number + " is Odd Number";
        document.getElementById('inputBx').value = "";
    }
}


function isPrime(){

    const input = document.getElementById('inputBx').value;
    const number = Number(input);
    let isPrime = true;

    if (number <= 1) {
        isPrime = false;
    }
    else {
        for (let i = 2; i < number; i++) {
          if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if(number == ''){
        alert("Enter Something !");
        document.getElementById('outputBx').innerHTML = "";
    }
    else if(number != input){
        alert("Enter a Number !");
        document.getElementById('inputBx').value = "";
        document.getElementById('outputBx').innerHTML = "";
    }
    else if(isPrime){
        document.getElementById('outputBx').innerHTML = input + " is Prime Number";
        document.getElementById('inputBx').value = "";
    }
    else{
        document.getElementById('outputBx').innerHTML = input + " is Composite Number";
        document.getElementById('inputBx').value = "";
    }

}


function factorial(){

    const input = document.getElementById('inputBx').value;
    const number = Number(input);
    var fact = 1;

    if(number == ''){
        alert("Enter Something !");
        document.getElementById('outputBx').innerHTML = "";
    }
    else if(number != input){
        alert("Enter a Number !");
        document.getElementById('inputBx').value = "";
        document.getElementById('outputBx').innerHTML = "";
    }
    else {
        for (var i=2; i<=number; i++){
            fact *=i ;
        }
        document.getElementById('outputBx').innerHTML = "The Factorial of "+ number +" is "+ fact;
        document.getElementById('inputBx').value = "";
    }
}


function fibonacci(){

    const input = document.getElementById('inputBx').value;
    const number = Number(input);
    var fibo = [0, 1];

    if(number == ''){
        alert("Enter Something !");
        document.getElementById('outputBx').innerHTML = "";
    }
    else if(number != input){
        alert("Enter a Number !");
        document.getElementById('inputBx').value = "";
        document.getElementById('outputBx').innerHTML = "";
    }
    else if(number < 2){
        document.getElementById('outputBx').innerHTML = "The Fibonacci Sequence of "+ number +" is "+ fibo[number - 1];
        document.getElementById('inputBx').value = "";
    }
    else{
        for (var i=2; i<number; i++){
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
        document.getElementById('outputBx').innerHTML = "The Fibonacci Sequence of "+ number +" is "+ fibo.join(", ");
        document.getElementById('inputBx').value = "";
    }
}


function palindrome(){

    const input = document.getElementById('inputBx').value;
    var revInput = input.split("").reverse().join("");

    if(input == ''){
        alert("Enter Something !");
        document.getElementById('outputBx').innerHTML = "";
    }
    else {
        if (input === revInput) {
            document.getElementById('outputBx').innerHTML = input +" is a Palindrome";
            document.getElementById('inputBx').value = "";
          } else {
            document.getElementById('outputBx').innerHTML = input +" is not a Palindrome";
            document.getElementById('inputBx').value = "";
          }
    }
}
