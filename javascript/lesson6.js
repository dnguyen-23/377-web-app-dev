function printSquares() {
    var items = "";

    // for (var i = 1; i <= 10; i++) {
    //     items += "<li>" + Math.pow(i, 2) + "</li>";
    // }
    document.getElementById("squares").innerHTML = items;
}

function printPow2() {
    var items = "";
    var idx = 0;
    while (idx < 10) {
        items += "<li>" + Math.pow(2, idx) + "</li>";
        idx++;
    }

    document.getElementById("powers_of_2").innerHTML = items;
}

// function nthPowers() {

// }