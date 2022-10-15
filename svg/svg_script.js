function printCircle() {
    var color = "";
    for (var i = 0; i < 360; i+=5) {
        if (i % 2 == 0 ){
            color = "black";
        } else {
            color = "grey";
        }

        document.getElementById('clock').innerHTML += "<rect width='80' height='100' x='500' y='400' transform='rotate(" + i + " 500, 500 )' fill='" + color + "'>";
    }
}