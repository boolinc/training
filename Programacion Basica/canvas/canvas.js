var dibujo, lienzo;
function inicio()
{
    dibujo = document.getElementById("dibujito");
    lienzo = dibujo.getContext("2d");

    dibujarGrilla(lienzo);

    lienzo.moveTo(0,0);
    lienzo.lineTo(300,0);
    lienzo.lineTo(300,300);
    lienzo.lineTo(0,300);
    lienzo.lineTo(0,0);
    lienzo.strokeStyle = "#F00";
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.strokeStyle = "#00F";
    lienzo.arc(150,150,100, (Math.PI *2), false);
    lienzo.fillStyle = "#00F";
    lienzo.fill();
    lienzo.closePath();
    lienzo.stroke();

}

function dibujarGrilla (l)
{
    var ancho = 300, alto = 300;
    var linea;
    var anchoLinea = 30;
    var limiteX = ancho / anchoLinea;
    var limiteY = alto / anchoLinea;
    l.strokeStyle = "#AAA";

    for(linea = 0 ; linea <= 20 ; linea ++)
    {
        punto = linea * anchoLinea;
        l.beginPath();
        l.moveTo(punto , 0);
        l.lineTo(0 , punto);
        l.stroke();
        l.closePath();
    }



    //for(linea = 0 ; linea <= limiteY ; linea ++)
    {
    //    punto = linea * anchoLinea
        l.beginPath();
    //    l.moveTo(0 , punto);
    /    l.lineTo(punto , 0);
        //l.stroke();
        l.closePath();
    }

}
