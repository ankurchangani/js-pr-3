

let con = " ";
let patternq = document.getElementById("q13");
let numrows = 5;

for (p = numrows; p >= 1; p--) {
    for (let j = 5; j >= p; j--) {
        con += j + " ";
    }

    con += "<br/>";
}

patternq.innerHTML = (con);
