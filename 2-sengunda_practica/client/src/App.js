import {PostForm, NotFoundPage, homePage as HomePage} from "./pages"
import {Routes, Route} from 'react-router-dom'
import {PostProvider} from './context/postContex'
import {Toaster} from 'react-hot-toast'


export default function App() {
  
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/new" element={<PostForm/>}/>
            <Route path="/posts/:id" element={<PostForm/>}/>
            <Route path="*" element={<NotFoundPage/>}/> 
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    </div>
  )

}
