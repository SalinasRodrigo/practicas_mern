import dotenv from 'dotenv'
dotenv.config()
//Procesado de las variables de entrono
export const MONGODB_URI = process.env.MONGODB_URI
export const PORT = process.env.PORT || 3000
export const CLOUDINARY_APIKEY = process.env.CLOUDINARY_APIKEY
export const CLOUDINARY_APISECRET = process.env.CLOUDINARY_APISECRET