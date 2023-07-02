import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as postsAPI from '../../utilities/posts-api';
import { PiArrowFatUpBold, PiArrowFatDownBold } from 'react-icons/pi';
import { AiOutlineEdit } from 'react-icons/ai';
import './PostPage.css';

export default function PostPage() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [showEditOptions, setShowEditOptions] = useState(false);
    const [likeClicked, setLikeClicked] = useState(false);
    const [dislikeClicked, setDislikeClicked] = useState(false);

    useEffect(() => {
        async function fetchPost() {
          try {
            const fetchedPost = await postsAPI.fetchPostById(postId);
            setPost(fetchedPost);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchPost().catch((error) => {
          console.error(error);
        });
      }, [postId]);

    const handleLike = () => {
        setLikeClicked(!likeClicked);
        setDislikeClicked(false);
    };

    const handleDislike = () => {
        setDislikeClicked(!dislikeClicked);
        setLikeClicked(false);
    };

    const handleEdit = () => {
        setShowEditOptions(!showEditOptions);
    };

    const handleDelete = () => {

    };

    if (!post) {
        return <h3 className="Loading-post-page">Loading...</h3>;  
    }

    return (
        <div className="post-page">
            <div className="post-on-postpage">
                <div className="postpage-buttons">
                    <div className="vertical-buttons">
                        <button onClick={handleLike} className={`like-button ${likeClicked ? 'liked' : ''}`} title="Like">
                            {likeClicked ? <PiArrowFatUpBold className="liked-icon" /> : <PiArrowFatUpBold />}
                        </button>
                        <button onClick={handleDislike} className={`dislike-button ${dislikeClicked ? 'disliked' : ''}`} title="Dislike">
                            {dislikeClicked ? <PiArrowFatDownBold className="disliked-icon" /> : <PiArrowFatDownBold />}
                        </button>
                    </div>
                </div>
                <div className="post-page-rest-of-post">
                    <div className="postedBy-postpage-div">
                        <h6 className="post-page-category">{`/${post.category}`}</h6>
                        <h6 className="post-page-user">{`Posted by: ${post.user.name}`}</h6>
                        <div className="edit-options">
                            <button onClick={handleEdit} className="edit-button-postpage" title="Edit">
                                {<AiOutlineEdit />}
                            </button>
                        </div>
                    </div>
                    <div className="postpage-title-div">
                        <h3 className="post-page-title">{post.title}</h3>
                    </div>
                    <div className="postpage-content-div">
                        <p className="post-page-content">{post.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
