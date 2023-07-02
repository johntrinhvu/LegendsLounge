import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as postsAPI from '../../utilities/posts-api';
import './PostPage.css';

export default function PostPage() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function fetchPost() {
          try {
            console.log('test postpage');
            const fetchedPost = await postsAPI.fetchPostById(postId);
            // setPost(fetchedPost);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchPost().catch((error) => {
          console.error(error);
        });
      }, [postId]);

    if (!post) {
        return <h3 className="Loading-post-page">Loading...</h3>;  
    }

    // return (
    //     <div className="post-page">
    //         <h2>{post.title}</h2>
    //         {/* <h4>{post.user}</h4> */}
    //         <p>{post.content}</p>
    //     {/* Render other details of the post */}
    //     </div>
    // );
}
