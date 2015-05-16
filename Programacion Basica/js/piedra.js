//funcion!
//intentar hacer pidrea , papel , tijera , largarto , spock
function aleatorio (minimo, maximo)
{
  var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
  return numero;
}


var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,2);

opcionUsuario = prompt("¿Que eliges?\n Piedra: 0 \n Papel: 1 \n Tijera: 2" , 0);

alert("Elegiste: " + opciones[opcionUsuario]);
alert("Javascript (tu pc) eligió: " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
  //alert("Elegiste piedra");
  if(opcionMaquina == piedra)
  {
    alert("Empate ! :O");
  }
  else if(opcionMaquina == papel)
  {
    alert("Perdiste D:");
  }
  else if(opcionMaquina == tijera)
  {
    alert("Ganaste! :D");
  }
}
else if(opcionUsuario == papel)
{
  //alert("Elegiste papel");
  if(opcionMaquina == piedra)
  {
    alert("Ganaste! :D");
  }
  else if(opcionMaquina == papel)
  {
    alert("Empate ! :O");
  }
  else if(opcionMaquina == tijera)
  {
    alert("Perdiste D:");
  }
}
else if(opcionUsuario == tijera)
{
  //alert("Elegiste tijera");
  if(opcionMaquina == piedra)
  {
    alert("Perdiste D:");
  }
  else if(opcionMaquina == papel)
  {
    alert("Ganaste! :D");
  }
  else if(opcionMaquina == tijera)
  {
    alert("Empate ! :O");
  }
}
else
{
  alert("Eso no esta bien ._.");
}
