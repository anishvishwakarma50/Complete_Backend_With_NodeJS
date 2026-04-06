import React, { useState, useEffect, use } from 'react'
import axios from 'axios'
const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // Fetch posts from the backend API and update the state
        const fetchPosts = axios.get('http://localhost:3000/posts')
        .then((response) => {
            console.log(response.data.posts)
            setPosts(response.data.posts)
        })
        .catch((error) => {
            console.error('Error fetching posts:', error)
        });
    }, [])

    return (
        <section className='feed-section'>
            <h1>My Social Feed</h1>
            {
                posts.length > 0 ? posts.map((post) => (
                    <div key={post._id} className='post'>
                        <img src={post.image} alt={`Post ${post._id}`} />
                        <p>{post.caption}</p>
                    </div>
                )) : <h2>No posts yet</h2>
            }
        </section>
    )
}

export default Feed