let display = " ";
let patternlast = document.getElementById("q14");
// let numberrows = 1;
let number = 1;

for (let k = 1; k <= 5; k++) {

    for (let b = 1; b <= k; b++) {
        display += number + " ";
        number++;
    }

    display += "<br/>"

}
patternlast.innerHTML = (display);


