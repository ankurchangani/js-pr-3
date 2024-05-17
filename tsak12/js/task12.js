// Write a JAVASCRIPT Program to find the Disarium number list of a given number using while loop

let i = 1;
let sum = 0;

for (i = 1; i <= 10; i++) {
    document.getElementById("i").innerHTML += (`${i * i} `);
    sum += i * i;
}
document.getElementById("sum").innerHTML += sum;