// API_URL comes from the .env.development file
import React, { useState, useEffect } from 'react';
import { API_URL } from "../../constants";
import { useParams, useNavigate, Link } from "react-router-dom";

function PostsList() {
    const [post, setPosts] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);
    //Fetch posts from API

    useEffect(() => {
        async function loadPosts() {
            try {
                const response = await fetch(API_URL);
                if (response.ok) {
                    const json = await response.json();
                    setPosts(json);
                } else {
                    throw response;
                }
            } catch (e) {
                setError("An error ocurred. Awkward...");
                console.log("An error ocurred:", e);
            } finally {
                setLoading(false);
            }
        }
        loadPosts();
    }, []);

    return (
        <div>
            {post.map((post) => (
                <div key={post.id} className="post-container">
                    <h2>
                        <Link to={`/posts/${post.id}`} className="post_title">
                            {post.title}
                        </Link>
                    </h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default PostsList;