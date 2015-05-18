function numero (minimo , maximo)
{
  var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
  return numero;
}


var piedra = 0;
var papel = 1;
var tijera = 2;
var largato = 3;
var spock = 4;

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var opcionUsuario;
var opcionMaquina = numero (0,4);

opcionUsuario = prompt("¿Que eliges?\n piedra: 0 \n papel: 1 \n tijera: 2 \n lagarto: 3 \n spock: 4" , 0);

alert("Elegiste: " + opciones[opcionUsuario]);
alert("Javascript (tu pc) eligio: " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
  if(opcionMaquina == piedra)
  {
    alert("Empate! :O");
  }
  else if(opcionMaquina == papel)
  {
    alert("Perdiste! :(");
  }
  else if(opcionMaquina == tijera)
  {
    alert("Ganaste! :D");
  }
  else if(opcionMaquina == lagarto)
  {
    alert("Ganaste!:D");
  }
  else if(opcionMaquina == spock)
  {
    alert("Perdiste! :(");
  }
}
else if(opcionUsuario == papel)
{
  if(opcionMaquina == piedra)
  {
    alert("Ganaste! :D");
  }
  else if(opcionMaquina == papel)
  {
    alert("Empate! :O");
  }
  else if(opcionMaquina == tijera)
  {
    alert("Perdiste! :(");
  }
  else if(opcionMaquina == lagarto)
  {
    alert("Perfiste! :(");
  }
  else if(opcionMaquina == spock)
  {
    alert("Ganaste! :D");
  }
}
else if(opcionUsuario == tijera)
{
  if(opcionMaquina == piedra)
  {
    alert("Perdiste! :(");
  }
  else if(opcionMaquina == papel)
  {
    alert("Ganaste! :D");
  }
  else if(opcionMaquina == tijera)
  {
    alert("Empate! :O");
  }
  else if(opcionMaquina == lagarto)
  {
    alert("Ganaste! :D");
  }
  else if(opcionMaquina == spock)
  {
    alert("Perdite! :(");
  }
}
else if(opcionUsuario == lagarto)
{
  if(opcionMaquina == piedra)
  {
    alert("Perdiste! :(");
  }
  else if(opcionMaquina == papel)
  {
    alert("Ganaste! :D");
  }
  else if(opcionMaquina == tijera)
  {
    alert("Perdiste! :(");
  }
  else if(opcionMaquina == lagarto)
  {
    alert("Empate! :O");
  }
  else if(opcionMaquina == spock)
  {
    alert("Ganaste! :D");
  }
}
else if(opcionUsuario == spock)
{
  if(opcionMaquina == piedra)
  {
    alert("Ganaste! :D");
  }
  else if(opcionMaquina == papel)
  {
    alert("Perdiste! :(");
  }
  else if(opcionMaquina == tijera)
  {
    alert("Ganaste! :D");
  }
  else if(opcionMaquina == lagarto)
  {
    alert("Perdiste! :(");
  }
  else if(opcionMaquina == spock)
  {
    alert("Empate! :O");
  }
}
else
{
  alert("Debes Elegir una opcion Valida");
}

//ESTRUCTURA LARGA Y DESORNADA *NOTA MENTAL: INTENTAR HACERLA MAS CORTA Y ORDENADA*.
