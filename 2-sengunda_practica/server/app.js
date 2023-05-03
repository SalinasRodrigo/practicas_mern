import express from 'express'
import postRoutes from './routes/posts.routes.js'
//Creamos nuestra app
const app = express()

//Le pasamos las rutas 
app.use(postRoutes)

export default app