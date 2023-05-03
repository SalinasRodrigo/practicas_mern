import dotenv from 'dotenv'
dotenv.config()
//Procesado de las variables de entrono
export const MONGODB_URI = process.env.MONGODB_URI
export const PORT = process.env.PORT || 3000