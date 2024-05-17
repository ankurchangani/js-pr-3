let b;
let hyp = "";

for (b = 1; b <= 10; b++) {
    hyp += b;
    if (b < 10) {
        hyp += "-";
    }

}
document.getElementById("hypen").innerHTML = hyp;

