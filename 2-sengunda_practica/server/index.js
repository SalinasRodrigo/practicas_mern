import app from './app.js'
import {connectDB} from './db.js'
import { PORT } from './config.js'

//Conectamos con nuestra base de datos
connectDB()
//Seleccionamos el puerto para el servidor
app.listen(PORT)
//Imprimimos en consola que el servidor funcional en el localhost
console.log('server in running port', PORT)