const personajes = {
  capi: { nombre: "Capitan America", poder: "Escudo" },
  iron: { nombre: "Ironman", poder: "Dinero" },
  spider: { nombre: "Spiderman", poder: "Telaraña" },
};

const heroeId = "capi"

//Funcion
const buscarHeroe = (id, callback) =>{

    const heroe = personajes[id]

    if(heroe){
        callback(null, heroe)
    }else{
        //Error
        callback(`El id del heroe ${heroe} no existe`) 
    }
    

}



//Llamado de la funcion

buscarHeroe(heroeId, (error, heroe) =>{
    if(error){
        console.error(error)
    }else{
        console.log(heroe)
    }
})