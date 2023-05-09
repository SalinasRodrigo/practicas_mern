import { useState, createContext, useContext, useEffect } from "react";
import {
  getPostsRequests,
  createPostRequests,
  deletePostRequests,
  getPostRequests,
  updatePostRequests,
} from "../api/posts";

const postContext = createContext();

export const UsePost = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await getPostsRequests();
    setPosts(res.data);
  };

  const createPost = async (post) => {
    const res = await createPostRequests(post);
    setPosts([...posts, res.data]);
  };

  const deletePost = async (id) => {
    const res = await deletePostRequests(id);
    if (res.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
  };

  const getPost = async (id) => {
    const res = await getPostRequests(id);
    console.log(res.data);
    return res.data;
  };

  const updatePost = async (id, post) => {
    const res = await updatePostRequests(id, post);
    console.log(res);
    setPosts(posts.map((post) => post._id === id ? res.data : post))
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <postContext.Provider
      value={{
        posts,
        getPosts,
        createPost,
        deletePost,
        getPost,
        updatePost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};
