import {v2 as cloudinary} from 'cloudinary'
import { CLOUDINARY_APIKEY, CLOUDINARY_APISECRET } from '../config.js'

// Configuration 
cloudinary.config({
    cloud_name: "dwoo8pwlg",
    api_key: CLOUDINARY_APIKEY,
    api_secret: CLOUDINARY_APISECRET
  });


export const uploadImage = async filePath => {
    //filePath: la dirección de la imagen a ser subida
    return await cloudinary.uploader.upload(filePath, {
        folder: 'post'
    } )
}

export const deleteImage = async id =>{
    return await cloudinary.uploader.destroy(id)
}

