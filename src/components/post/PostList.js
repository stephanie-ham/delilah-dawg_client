import React, { useContext, useEffect, useState, useParams } from "react"
import { PostContext } from "./PostProvider.js"
import { useHistory } from "react-router-dom";
import { CategoryContext } from "../category/CategoryProvider.js";

export const PostList = () => {
    const { posts, getPosts } = useContext(PostContext);
    const { categories, getCategories } = useContext(CategoryContext)
    const history = useHistory()
    // const [category, setCategory] = useState(category || { category: {} })
    // const { categoryId } = useParams();

    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
        getCategories();
    }, []);




    // useEffect(() => {
    //     if (posts.category) {
    //         const thisCategory = categories.find(category => category.id === parseInt(categoryId))
    //         setCategory(thisCategory)
    //     }
    // }, [categoryId])



    return (
        <>


            <article>
                <h1>Current Posts</h1>
                {posts.map((post) => {
                    return (
                        <section key={`post--${post.id}`}>
                            <div>
                                <button
                                    onClick={() => history.push(`/posts/${post.id}/edit`)}
                                >
                                    Edit
                                </button>
                            </div>
                            <div>

                                <p>Creator: {post.id}</p>
                                <p> Title: {post.title}</p>
                                <p> Category: {post.category}</p>
                                <p>Image: {post.image_url}</p>
                                <p>Reaction: {post.post_reactions}</p>
                                <p>Created On: {post.publication_date}</p>
                                <p>Content: {post.content}</p>
                                <p>Tag: {post.tag}</p>

                            </div>
                        </section>
                    )
                })}
            </article>
            <div>
                <button
                    onClick={() => history.push("/posts/new")}>
                    Create New Post
                </button>
            </div>
        </>
    );
};