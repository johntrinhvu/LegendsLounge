import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as postsAPI from '../../utilities/posts-api';
import { PiArrowFatUpBold, PiArrowFatDownBold } from 'react-icons/pi';
import './HomePage.css';

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [likeClicked, setLikeClicked] = useState(false);
    const [dislikeClicked, setDislikeClicked] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
        try {
            if (location.pathname === '/home') {
            const fetchedPosts = await postsAPI.fetchPosts();
            setPosts(fetchedPosts);
            }
        } catch (error) {
            console.error(error);
            setError('Failed to fetch posts');
        }
        };

        fetchPosts();
    }, [location.pathname]);

    const handleLike = () => {
        setLikeClicked(!likeClicked);
        setDislikeClicked(false);
    };

    const handleDislike = () => {
        setDislikeClicked(!dislikeClicked);
        setLikeClicked(false);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div classsName="home-page">
            <h1 className="home-page-header">Home Page</h1>
            {posts.map((post) => (
                <Link to={`/posts/${post._id}`} key={post._id} className="post-link">
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
                </Link>
            ))}
        </div>
    );

    // return (
    //     <div className="home-page">
    //       <h1>Home Page</h1>
    //       {posts.map((post) => (
    //             <div key={post._id}>
    //                 <h4>{post.user.name}</h4>
    //                 <h3>{post.title}</h3>
    //                 <p>{post.content}</p>
    //             </div>
    //         ))}
    //     </div>
    //   );
}
