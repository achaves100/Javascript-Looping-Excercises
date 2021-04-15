function generateRandomArray()
{
  var auxArray = [];
  //defino un numero aleatorio del 0 al 99
  var randomLength = Math.floor(Math.random()*100);
  for(var i = 0;i<randomLength;i++) {
    //por cada iteraccion adiciono un elemento de manera aleatoria
      auxArray.push(Math.floor(Math.random()*100));    
  }
  //la funcion retorna un arreglo
  return auxArray;  
}
//invoco a la funcion y lo guardo en una variable
var myStupidArray = generateRandomArray();
//retorno el ultimo elemento de mi array
var theLastOne =myStupidArray[myStupidArray.length-1]
//lo muestro en la consola
console.log(theLastOne)

