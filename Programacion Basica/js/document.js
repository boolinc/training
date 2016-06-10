function Pokemon(n,v,a)
{
  this.grito = "Pika!";
  this.nombre = n;
  this.vida = v;
  this.ataque = a;
  this.gritar = function ()
  {
    alert(this.grito);
  }
}

function inicio()
{
  var rattata = new Pokemon ("Rattata", 40 , 2);
  rattata.vida = rattata.vida - 13;
  rattata.gritoPoke = "ÑAÑAÑA YOLO NaN";

  nombrePokemon.innerText = rattata.nombre;

  datosPokemon.innerText = "La vida del pokemon es de: " + rattata.vida + "\n"  + "El poder de ataque es de: " + rattata.ataque + "\n" +  "Y su grito es: " +  rattata.gritoPoke
}




//function Pokemon(nombrePokemon, vidaPoke, ataPoke)
//{
  //var estructuraPokemon =
  //{
    //nombre: nombrePokemon,
    //vida: vidaPoke,
    //ataque: ataPoke,
    //datos: {tipo: "Tierra", debilidad: "Fuego"}
  //};
  //return estructuraPokemon;
//}
//var pikachu = Pokemon("Pikachu", 100 , 55);
//var bulbasaur = Pokemon("Bulbasaur", 90 , 50);



//document.write(bulbasaur.datos.tipo);

//modelo de informacion para el navegador dentro de js.
//document.write("hola mamá !");

//principales objetos de js
// navigator , window , document

//var pi = 3.141592654;
//pi = Math.ceil(pi);
//document.write(pi);

//var maxima;
//maxima = Math.max( 5,23,4,5,12,24,23);
//document.write(maxima);

//function mostrar(pos)
//{
//  document.write(pos.coords.latitude + "," + pos.coords.longitude);
//}
//navigator.geolocation.getCurrentPosition( mostrar );
