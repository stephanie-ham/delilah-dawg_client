import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        return fetch("http://localhost:8000/posts", {
            headers: {
                Authorization: `Token ${localStorage.getItem("dd_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setPosts);
    };

    const createPosts = (newPost) => {
        return fetch(`http://localhost:8000/posts`, {
            method: "POST",
            headers: {
                Authorization: `Token ${localStorage.getItem("dd_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
            .then((response) => response.json())
            .then(getPosts)
    }

    const editPost = (post) => {
        return fetch(`http://localhost:8000/posts/${post.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Token ${localStorage.getItem("dd_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then(getPosts)
    }

    const deletePost = (postId) => {
        return fetch(`http://localhost:8000/events/${postId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("dd_token")}`,
            },
        })
            .then(getPosts)
    };

    return (
        <PostContext.Provider value={{ posts, getPosts, createPosts, editPost, deletePost }}>
            {props.children}
        </PostContext.Provider>
    );
};