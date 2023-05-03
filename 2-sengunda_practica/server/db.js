import mongoose from 'mongoose'
import { MONGODB_URI } from './config.js'

// Creamos nuestra función asincronica que conectara a la base de datos
//y la exportamos 
export async function connectDB(){
    try {
        //Conectamos a la URL de nuestra base de datos que estara guardada en una variable de entorno
        const db =  await mongoose.connect(MONGODB_URI)
        //Mostramos un mensaje que nos diga que estamos concetado a nuestra base de datos
        console.log("contected to mongodb", db.connection.name)
    } catch (error) {
        console.error(error)
    }
}

