var peso;
var pesoEnMarte; // Camel Case  , tecnica...


alert("¿Quieres saber tu peso en marte?");
peso = prompt ("¿ cual es tu peso en kg?" , "70");
peso = parseInt(peso);

pesoEnMarte = (peso / 9.81) * 3.711;

alert("Tu peso en marte es: " + pesoEnMarte + " kg.");


//alert("Hola mamá, ya sé programar!!!");
//var nombre = "Javier";
//var apellido = "Collazos";
//var edad = 16;

//alert (nombre + " " + apellido + "\n" + edad + " Años.");
//alert ( "2" + 5 * 8 );
