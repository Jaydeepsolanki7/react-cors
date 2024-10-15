import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Posts</h2>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
    </div>
  );
};

export default PostList;
