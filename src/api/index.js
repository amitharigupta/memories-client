import axios from 'axios';
// https://memories-project-amit.herokuapp.com/posts
// const url = 'http://localhost:5000/posts/';
const url = 'https://memories-project-amit.herokuapp.com/posts/';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}${id}`);
export const likePost = (id) => axios.patch(`${url}${id}/likepost`);