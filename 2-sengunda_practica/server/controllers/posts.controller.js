import Post from "../models/Post.js"
import { deleteImage, uploadImage } from "../libs/cloudinary.js"
import fs from 'fs-extra'

export const getPosts = async (req, res)=> {
    try {
        const posts = await Post.find()
        res.send(posts)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createPost = async (req, res)=> {
    try {
        //sacamos los datos del request
        const {title, description} = req.body
        let image;
        //si existe una imagen en el reques, se guardara el cloudinary
        if(req.files.image){
            const result = await uploadImage(req.files.image.tempFilePath)
            await fs.remove(req.files.image.tempFilePath)
            console.log(result)
            image = {
                url: result.secure_url,
                public_id: result.public_id
            }
        }

        //creamos un objeto con los datos 
        const newPost = new Post({title, description, image})

        //cargamos nuestro objeto a la base de datos
        await newPost.save()
        
        return res.json(newPost)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
} 
export const updatePost = async (req, res)=> {
    try {
        //en request prarams estara el id de la publicación que se tipeo en la ruta
        console.log(req.params)
        console.log(req.body)
        //buscamos por id y lo actualizamos 
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(updatedPost) 
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deletePost = async (req, res)=> {
    try {
        //buscamos por id y lo eliminamos
        const postRemove = await Post.findByIdAndDelete(req.params.id, req.body)

        if (!postRemove) return res.sendStatus(404)
        
        if(postRemove.image.public_id){
            await deleteImage(postRemove.image.public_id)
        }
        
        return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getOne = async (req, res)=> {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) return res.send(404)
        return res.send(post)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}