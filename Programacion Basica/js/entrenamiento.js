alert("Bienvenido!");
alert("Esto es una pagina donde sabras cuantos numeros tiene tu nombre (Buenisima para evitar la pereza de contar)");

var nombrecaja = prompt("Escribe tu nombre aca abajo (sin espacios pls)... (por ahora..)");
var nombreusuario = nombrecaja;

function numerosnombre()
{
    confirm("tu nombre tiene: " + nombreusuario.length + " numeros!");
}

numerosnombre();
