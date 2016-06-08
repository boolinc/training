var turno = Math.floor(Math.random() * 7 + 100);
var liveturn = Math.floor(Math.random() * 7 );
var segundos =  Math.floor(Math.random() * 7 + 3);



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
    var fiveMinutes = segundos * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};s
