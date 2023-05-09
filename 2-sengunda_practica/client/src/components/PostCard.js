import toast from 'react-hot-toast'
import {UsePost} from '../context/postContex'
import {useNavigate} from 'react-router-dom'

export function PostCard({ post }) {
  
  const {deletePost} = UsePost()
  const navidate = useNavigate()

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p className='text-white'>Do you want to delete? <strong>{id}</strong> </p>
        <button className='bg-red-500 hover:bg-red-400 px-3 py-2 text-white
        rounded-sm mx-2' onClick={() => {
          deletePost(id)
          toast.dismiss(t.id)
        } 
        }>
          Delete
        </button>
        <button className='bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white
        rounded-sm mx-2' onClick={() => toast.dismiss(t.id)}>
          Cancel
        </button>
      </div>
    ), {
      style: {
        background: "#202020"
      }
    }
    )
  }

  return (
    <div
      className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black
    hover:bg-zinc-700 hover:cursor-pointer px-4 py-7 flex justify-between"
    onClick={() => navidate(`/posts/${post._id}`)}
    >
      <div>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>

      <button className="bg-red-600 text-sm px-2 py-1 rounded-sm" 
        onClick={() => handleDelete(post._id)}
      >
        delete
      </button>
    </div>
  );
}
