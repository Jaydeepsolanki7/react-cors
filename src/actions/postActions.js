import axios from 'axios';

// Action Types
export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';

// Action to fetch all posts
export const fetchPosts = () => async dispatch => {
  const response = await axios.get('http://localhost:3001/posts');
  
  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  });
};

// Action to add a new post
export const addPost = (postData) => async dispatch => {
  const response = await axios.post('http://localhost:3001/posts', postData);

  dispatch({
    type: ADD_POST,
    payload: response.data
  });
};
