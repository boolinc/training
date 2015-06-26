var dibujo, lienzo;
function inicio()
{
    dibujo = document.getElementById("casa");
    lienzo = dibujo.getContext("2d");



    lienzo.moveTo(0,0);
    lienzo.lineTo(320,0);
    lienzo.lineTo(320,290);
    lienzo.lineTo(0,290);
    lienzo.lineTo(0,0);
    lienzo.strokeStyle = "#F00";
    lienzo.stroke();
    lienzo.beginPath();
    lienzo.strokeStyle = "#00F";

    lienzo.closePath();
    lienzo.stroke();
    lienzo.fillStyle="#008000";
    lienzo.fillRect(0,215,320,320);

    lienzo.fillStyle="#00ffff";
    lienzo.fillRect(0,0,320,215);

    lienzo.fillStyle="#ff9933";
    lienzo.fillRect(45,115,10,100);

    lienzo.fillStyle="#0000ff";
    lienzo.fillRect(100,120,150,95);

    lienzo.fillStyle="#ff0000";
    lienzo.fillRect(125,145,25,25);

    lienzo.fillStyle="#ff0000";
    lienzo.fillRect(210,145,25,25);

    lienzo.fillStyle="#ff0000";
    lienzo.fillRect(167,180,30,35);

    lienzo.beginPath();
    lienzo.strokeStyle = "#31c72d";
    lienzo.fillStyle="#31c72d";
    lienzo.arc(50,100,20, (Math.PI *2), false);
    lienzo.fill()
    lienzo.closePath();
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.strokeStyle = "#34d930";
    lienzo.fillStyle="#34d930";
    lienzo.arc(50,140,30, (Math.PI *2), false);
    lienzo.fill()
    lienzo.closePath();
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.strokeStyle = "#fffc00";
    lienzo.fillStyle="#fffc00";
    lienzo.arc(295,20,50, (Math.PI *2), false);
    lienzo.fill()
    lienzo.closePath();
    lienzo.stroke();
}


//{
    //var ancho = 320, alto = 290;
    //var lienzo;
    //for(lienzo = 0 ; linea < 30 ; linea ++)
    //{
        //l.beginPath();
        //l.strokeStyle = "#AAA";
        //l.moveTo(linea * 10 , 0);
        //l.lineTo(linea * 10 , 320);
        //l.closePath();
        //l.stroke();
    //}

//}
