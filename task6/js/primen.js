// Write a JAVASCRIPT Program to find the Prime number list of a given number using while loop.

// 1*1=1
// 11*11 = ans

let number = 17;
let prim = 1;
let prime = document.getElementById("task6");

while (prim < number) {
    if (number % prim == 0) {
        prime.innerHTML += (`${number} is not a prime number <br/>`);
        break;
    }
    else {
        prime.innerHTML += (`${number} is a  prime number <br/>`);
    }
    prim++;
}