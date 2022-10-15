var PROBLEM_TYPE = "";
function quadraticSolver() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    console.log("" + a);
    var discriminant = Math.pow(b, 2) - (4 * a * c);
    var resultNeg = ((-1) * b - Math.sqrt(discriminant)) / (2 * a);
    var resultPos = ((-1) * b + Math.sqrt(discriminant)) / (2 * a);

    var html = "Your result: ";

    if (isNaN(resultPos) && isNaN(resultNeg)) { //if disxriminant less than 0
        html += "No real solutions";
    } else {
        if (resultNeg != resultPos) {
            html += resultPos + " and " + resultNeg;
        } else {
            html += resultPos;
        }
    }

    document.getElementById("result").innerHTML = html;
}

function sphereVolumeSolver() {
    var radius = document.getElementById("radius").value;
    var result = 4 * Math.PI * Math.pow(radius, 3);
    result /= 3;
    var html = "Your result: " + result;
    document.getElementById("result").innerHTML = html;
}

function sphereSASolver() {
    var radius = document.getElementById("radius").value;
    var result = 4 * Math.PI * Math.pow(radius, 2);

    var html = "Your result: " + result;
    document.getElementById("result").innerHTML = html;
}

function display(equationType) {
    var html = "";
    PROBLEM_TYPE = equationType;
    if (equationType == "Quadratic") {
        html = "<input type='number' id='a' name'a' size='5' placeholder='Enter A'>" +
                    "<input type='number' id='b' name'b' size='5' placeholder='Enter B'>" +
                    "<input type='number' id='c' name'c' size='5' placeholder='Enter C'>";
        
    } else if (equationType == "Sphere Volume" || equationType == "Sphere Surface Area") {
        html = "<input type='number' id='radius' name'radius' size='5' placeholder='Enter a radius'>";
    }
    document.getElementById("input_form").innerHTML = html;
}

function solve() {
    if (PROBLEM_TYPE == "Quadratic") {
        quadraticSolver();
    } else if (PROBLEM_TYPE == "Sphere Volume") {
        sphereVolumeSolver();
    } else if (PROBLEM_TYPE == "Sphere Surface Area") {
        sphereSASolver();
    }
}

