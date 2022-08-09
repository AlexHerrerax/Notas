"# Notas y recordatorios" 
## Operador Ternario
```javascript
const valor= "Alex"

valor === "Alex" ? "Si" : "No"
```
-----------
```javascript
const valor = 2

let mensaje = valor==2 ? "Es 2": "No es 2"
console.log(mensaje) //Es 2
```
-------
Evaluar multiples
```javascript
let nota =50

let mensaje = nota <=10 ? "Feo"
            : nota <=30 ? "Suficiente"
            :nota <=50 ? "Bien"
            :nota <=60 ? "Muy Bien"
            :nota <=69 ? "Maravilloso" : "Excelente"
console.log(mensaje)
```



## Mensaje de consola
```
console.log()
```
 ```
console.warn()
```
 ```
console.error()
```
 ```
console.table()
```



```
console.time()
AQUI LO QUE QUIERO EVALUAR 
console.timeEnd()
```



## Primitivos
- bolean
- Null
- undefined 
- string
- number
- symbol

## Symbol
```
let symbol1= Symbol('a')
let symbol2= Symbol('a')
console.log(symbol1===symbol2) // false
```

## ARREGLO
```
const arr = new Array(10)
const arr =[]
consr arr = ["Alex","Perro","Casa"]
```

## Romper referencias.

```
const frutas = [ bla bla]
const nuevo = [...frutas] 
```

Se rompe referencia.

Tambien sirve:
`const nuevo = frutas.slice()` 
Sin argumentosm rompe la relacion



## OBJETOS
**Leer un objeto**
`objeto.propiedad `

**Leer objeto dinamico**
`objeto[propiedad]`

**Borrar una propiedad**
`delete objeto.propiedad` 

## Algunos metodos

**Hace un arreglo con pares de valores**
`Object.entries(objeto)`


**Ver todas las propiedades de un objeto**
`Object.getOwnPropertyNames(objeto)`

**Ver todos los valores de un objeto**
`Object.values(objeto)`

## Romper referencia
**Los objetos se copian por referencia. 
Para romepr esa referencia se usar el *spreed operator***

```
let valor = { 
nombre:"Alex",
apellido:"Herrera"
}

let nuevo = {...valor};

```
**Ahora tengo un nuevo objeto nuevo sin referencia.**




## FUNCIONES

**Funcion normal**
```
function nombre(parametro) {
return "Hola"
}
```

**Funcion anonima**
```
const nombre = function (parametro) {
return "Hola"
}
```

**Funcion de flecha o lamdba function**
```
const nombre = (parametro) =>{
return "Hola"
}
```
**Se puede omitir el return y dejar todo en una sola linea quitando las llaves**

```
const nombre = (parametro) => "Hola"
```
**Si quiero devolver un objeto, se coloca entre parentesis**

```
const nombre = (parametro) => (
{nombre:"Alex",apellido:"Herrera"}
)
```


**Si va con llaves { } se debe colocar el return. Si va con () se puede omitir el return**

**Las funciones normales se puede usar antes de declararse. Las funciones de flecha no.**
- - - -
**Las funciones tradicionales pueden recibir todos los parametros dentro de un arreglo con "arguments".**
**(No validado. Tener en cuenta que no se pueden colocar algo mas que args despues, pero si antes, para definir algun argumento explicito.)
Ej.**
```
function hola() {
  console.log(arguments);
}
hola("Alex", "Sol");
//["Alex","Sol"]
```
**No se debe definir en el parametro, Lo trae directo.**
- - - -
**Las funciones de flecha no usar el arguments, para ellos se usa el *parametro rest*. Despues del paramentro no puede venir otra cosa. Se puede extraer algo antes del paramentro para usarlo individualmente**

```
const hola = (...args) =>{
console.log(args)
}
hola("Alex", "Sol")
```

## Destructuracion Arreglo
```
const arr= ["Raton","Perro","Gato"]
const [raton, gato] = arr;

console.log(gato)
//Perro
```
**No asigna el nombre al orden. 
Si se quiere utilizar alguno en especifico se debe colocan espacios con ","**

```
const arr= ["Raton","Perro","Gato"]
const [,,otro] = arr;

console.log(otro)
//Gato
```

## Destructuracion objetos
```
const objeto = {nombre:"Alex", apellido:"Herrera"}

const {apellido, nombre} = objeto;

console.log(apellido)
```


**En una funcion puedo desetructurar directamente desde los paramentros**
```
const objeto ={nombre:"Alex", apellido:"Herrera"}

const funcion = ({apellido, nombre}) =>{
    console.log(apellido)
}

funcion(objeto)
//Herrera
```


-----
## FOR
**for of recorrre los valores
for in muestra los indices**


----
## Callbacks
**Una funcion que se pasa como parametro.

Para definir un error en el callback, se debe definir siempre primero el error como parametro. Ejemplo en callback.js**





## Notas extras

**Al mostrar una variable en consola con {} Te muestra el nombre de la variable y su valor.

Metodo: Funcion dentro de un objeto

constate. Van en mayuscula**

