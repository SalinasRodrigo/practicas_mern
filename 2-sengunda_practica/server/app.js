import express from 'express'
import postRoutes from './routes/posts.routes.js'
import fileUpload from 'express-fileupload'
//Creamos nuestra app
const app = express()
//middlewares 
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

//Le pasamos las rutas 
app.use(postRoutes)

export default app