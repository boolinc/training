//var menu = ["Productos", "Ventas", "Contacto"];
//document.write( menu[0] );

//var dofa = [ ["Fortaleza", "Oportunidad"] , ["Debilidades", "Amenazas"] ];
//document.write(dofa[0][0]);

function explosion()
{
  alert("BOOOM!!");
  document.write("<h1>BOOM! Elegiste un area minada :(</h1>");
}

function ganaste()
{
  document.write("<h1>Eres un Ganador :3</h1>");
}
//1 = Bomba
//0 = no bomba
var campo = [[ 1 , 0 , 0 ] ,
             [ 0 , 1 , 0 ] ,
             [ 1 , 1 , 1 ] ];

var textos = ["Cesped", "Bomba"];

var x, y;

alert("Estas en un campo minado\n" + "Elije una posicion entre el 0 y 2 para el X y para Y");

x = prompt("posicion en X? (entre 0 y 2)");
y = prompt("posicion en Y? (entre 0 y 2)");


if(x <= 2 && y <= 2)
{
  var posicion = campo[x][y];
  document.write("Elegiste " + textos[posicion]);
  if(posicion ==1)
  {
    explosion();
  }
  else
  {
    ganaste();
  }
}
else
{
  document.write("te saliste del campo! D:");
  explosion();
}

var posicion = campo[x][y];
