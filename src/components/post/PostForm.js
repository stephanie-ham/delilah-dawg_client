import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider.js"
import { useHistory } from "react-router-dom";
// import "./Events.css";
// import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";

export const PostForm = () => {
    const history = useHistory();
    const { posts, getPosts, createPosts, editPost, deletePost } = useContext(PostContext);

    const [currentPost, setCurrentPost] = useState({
        rare_user: 0,
        title: "",
        category: 0,
        publication_date: "",
        image_url: "",
        content: "",
        approved: false
    });

    const editInputChange = (event) => {
        const newPost = { ...post }
        newPost[event.target.id] = event.target.value
        setCurrentPost(newPost)
    }

    // useEffect(() => {
    //     getPosts()
    // }, [])

    return (
        <form>
            <h2>Create New Post</h2>
            <fieldset>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        required
                        autoFocus
                        value={currentPost.title}
                        onChange={editInputChange}
                    />
                </div>
            </fieldset>
        </form>
    );
}