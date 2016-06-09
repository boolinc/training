var turno = Math.floor(Math.random() * 7 + 20);
var liveturn = Math.floor(Math.random() * 7 );
var segundos =  Math.floor(Math.random() * 7 + 3);
var notificacionuno = Math.floor(turno / 2);
var falta = (turno - liveturn);



function turn() {
    document.getElementById("static-turn").innerHTML = turno;
};

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            liveturn ++ ;
            document.getElementById("live-turn").innerHTML = liveturn;
        }

    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 1 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

if (--live-turn == --notificacionuno) {
alert ("Te faltan" + falta + " Turnos.");
};
