import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as postsAPI from '../../utilities/posts-api';
import './PostPage.css';

export default function PostPage() {
    const [post, setPost] = useState([]);
  async function handleAddPost(postData) {
    try {
        const createdPost = await postsAPI.createPost(postData);
        setPost(createdPost);

    } catch(error) {
        console.error('Error creating post:', error);
    }

  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {/* Render other details of the post */}
    </div>
  );
}
