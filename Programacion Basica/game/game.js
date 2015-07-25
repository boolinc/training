//"mover" id del boton predeterminado

var tablero;

var fondo = {
    imagenURL:"fondo.png",
    imagenOK: false
};

var tifis = {
    x: 100,
    y: 100,
    frenteURL: "diana-frente.png",
    frenteOK: false
};

function inicio()
{
    var canvas = document.getElementById("campo");
    tablero = canvas.getContext("2d");

    fondo.imagen = new Image();
    fondo.imagen.src = fondo.imagenURL;
    fondo.imagen.onload = confirmarFondo;

    tifis.frente = new Image();
    tifis.frente.src = tifis.frenteURL;
    tifis.frente.onload = confirmarFrente;

    var d = document.getElementById("derecha");
    d.addEventListener("click", derecha);

    var i = document.getElementById("izquierda");
    i.addEventListener("click", izquierda);

    var a = document.getElementById("arriba");
    a.addEventListener("click", arriba);

    var b = document.getElementById("abajo");
    b.addEventListener("click", abajo);
}
function confirmarFondo()
{
    fondo.imagenOK = true;
    dibujar();
}
function confirmarFrente()
{
    tifis.frenteOK = true;
    dibujar();
}
function dibujar()
{
    if(fondo.imagenOK == true)
    {
        tablero.drawImage(fondo.imagen, 0,0);
    }
    if(tifis.frenteOK == true)
    {
        tablero.drawImage(tifis.frente, tifis.x,tifis.y);
    }
}
function derecha()
{
    tifis.x += 10;
    dibujar();
}
function izquierda()
{
    tifis.x -= 10;
    dibujar();
}

function arriba()
{
    tifis.y -= 10;
    dibujar();
}

function abajo()
{
    tifis.y += 10;
    dibujar();
}
