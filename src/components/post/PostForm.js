import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider.js"
import { useHistory } from "react-router-dom";
import { CategoryContext } from "../category/CategoryProvider.js";
import { TagContext } from "../tag/TagProvider.js";
// import { ReactionContext } from "../reaction/ReactionProvider.js";


export const PostForm = () => {
    const history = useHistory();
    const { posts, getPosts, createPosts, editPost, deletePost } = useContext(PostContext);
    const currentUser = parseInt(sessionStorage.getItem("dd_token"))
    const { categories, getCategories } = useContext(CategoryContext)
    // const { reactions, getReactions } = useContext(ReactionContext)
    const { tags, getTags } = useContext(TagContext)


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
        const newPost = { ...currentPost }
        newPost[event.target.id] = event.target.value
        setCurrentPost(newPost)
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        getTags()
    }, [])

    // useEffect(() => {
    //     getReactions()
    // }, [])

    const savePost = () => {
        setIsLoading(true);
        if (postId) {
            updatePost({
                id: parseInt(postId),
                rare_user: currentUser,
                title: currentPost.title,
                category: currentPost.category,
                reaction: currentPost.reaction,
                publication_date: currentPost.publication_date,
                image_url: currentPost.image_url,
                content: currentPost.content,
                approved: currentPost.approved,
                tag: currentPost.tag,

            })
                .then(() => history.push(`/post`))
        } else {
            addPost({
                rare_user: currentUser,
                title: currentPost.title,
                category: currentPost.category,
                reaction: currentPost.reaction,
                publication_date: currentPost.publication_date,
                image_url: currentPost.image_url,
                content: currentPost.content,
                approved: currentPost.approved,
                tag: currentPost.tag,
            })
                .then(() => history.push(`/post`))
        }
    }

    return (
        <>
            <form>
                <h2>Create New Post</h2>
                <fieldset>
                    <div>
                        <label htmlFor="title">Title</label> <br />
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
                <fieldset>
                    <div>
                        <select htmlFor="category" onChange={editInputChange}
                            value={parseInt(currentPost.category)} defaultValue={parseInt(currentPost.category)}>
                            <option>Select Category</option>
                            {categories.map(category => (
                                <option
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                {/* This below is for the reaction section */}
                {/* <fieldset>
                    <div>
                        <select htmlFor="reaction" onChange={editInputChange}
                            value={parseInt(currentPost.reaction)} defaultValue={parseInt(currentPost.reaction)}>
                            <option>Select Reaction</option>
                            {reactions.map(reaction => (
                                <option
                                    key={reaction.id}
                                    value={reaction.id}
                                >
                                    {reaction.label}
                                    {reaction.image_url}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset> */}
                <fieldset>
                    <div>
                        <label htmlFor="content">Content</label> <br />
                        <input
                            type="text"
                            name="content"
                            required
                            autoFocus
                            value={currentPost.content}
                            onChange={editInputChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <select htmlFor="tag" onChange={editInputChange}
                            value={parseInt(currentPost.tag)} defaultValue={parseInt(currentPost.tag)}>
                            <option>Select Tag</option>
                            {tags.map(tag => (
                                <option
                                    key={tag.id}
                                    value={tag.id}
                                >
                                    {tag.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label htmlFor="publication_date">Date Created</label>
                        {currentPost.publication_date}
                    </div>
                </fieldset>
            </form>
        </>
    );
}