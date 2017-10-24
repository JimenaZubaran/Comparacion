var comparar = function (arreglo1, arreglo2)
{
  if (arreglo1.length !== arreglo2.length)
  {
  / return false;
  } else
{
    for (var i = 0;i < arreglo1.length; i ++)
  {
       if(arreglo1[i]!==arreglo2[i])
     {
        return false;
      }
    }
      return true;
  }
}

 var array1 = [1,2,3,4,5,8,7];
 var array2 = [1,2,3,4,5,6,7];

 comparar (array1, array2);
