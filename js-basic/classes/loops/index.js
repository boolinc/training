"use strict";

/**
 * TODO: Crear un ciclo donde busque un número entre el 1 y el 100 que sea
 * mayor que el número primo más alto entre 1 y 100
 * TODO: Sumar números entre 1 y 100
 */


for( var i = 1; i <= 100 ; i++)
{
    if( i == 97)
    {
        console.log(i);
    }
}

function sumatoria()
{
    var suma = 0;

    for( var i = 1; i <= 100 ; i++)
    {
        suma = suma + i;
    }
    return suma;
}

function primos(callback)
{
    for( var i = 1; i <=100 ; i++)
    {
        if( i == 97)
        {
            callback(i);
        }
    }
}

module.exports - {
    primos: primos,
    suma: sumatoria
};


//crear objeto que incluya como propiedades esos dos funciones.

//PERFECT :v
