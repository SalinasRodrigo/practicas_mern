import {Router} from 'express'
import {getPosts, createPost, updatePost, deletePost, getOne} from '../controllers/posts.controller.js'

const router = Router()

router.get('/posts',  getPosts)

router.post('/posts',  createPost)

router.put('/posts', updatePost)

router.delete('/posts',  deletePost)

router.get('/posts/:id',  getOne)


export default router