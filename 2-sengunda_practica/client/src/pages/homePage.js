import {UsePost} from '../context/postContex'
import {VscEmptyWindow} from 'react-icons/vsc'
import {Link} from 'react-router-dom'
import {PostCard} from '../components/PostCard'

export function homePage() {

  const {posts} = UsePost()

  if (posts.length === 0) return (
    <div className='flex flex-col justify-center items-center'>
      <VscEmptyWindow className='w-48 h-48 text-white'/>
      <h1 className='text-white text-2xl'>No hay publicaciones</h1>
    </div>
  )

  return (
    <div className='text-white'>
      <header className="flex justify-between items-center my-4">
        <h1 className="text-2xl text-gray-300 font-bold">
          Posts ({posts.length})
        </h1>
        <Link
          to="/new"
          className="bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
        >
          Create Post
        </Link>
      </header>
      <div className='grid grid-cols-3 gap-2'>
        {posts.map(post => (
          <PostCard post={post} key={post._id}/>
        ))}
      </div>
      
    </div>

    
  )
}
