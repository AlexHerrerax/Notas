**Promesas.**

**Metodo then.**
Al recibir una promesa, se suele guardar en una variable para luego trabajarla. En este caso, "Notification.requestPermission()" devuelve una promesa.

**Then**: El then es un calback. Se le pasa una funcion,y esa funcion se ejecuta cuando la promesa se termine.
**Catch**: Calback, se ejecuta cuando la promesa falla.
**Finally**: Callback, se ejecuta en cualquiera de los 2 casos.

```
const promesa = Notification.requestPermission()
promesa.then(()=>{
console.log("Termine")
})

promesa.catch(()=>{
console.log("Falle")
})
promesa.finally(()=>{
console.log("Falle")
})
```

**Async** 
```
const prueba = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();

  return resultado;
};
```
