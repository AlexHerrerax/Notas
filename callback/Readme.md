**Callback.**

Una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

Se suele usar en llamadas asincronas.

Por convencion, el error es el primer parametro que se indica, y luego los vaores a pasar. Tenemos un ejemplo en archivo app.js. 
Se le manda a la funcion un Id de Heroe y un callback. La funcion recibe el id. Si el Id Existe, llama al callback (con error en null) y le pasa el hereo. Si no existe, manda el error. 

En la funcion callback se valida si la Heroe existe o no
