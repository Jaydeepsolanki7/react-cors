import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../actions/postActions';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    dispatch(addPost(newPost));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
