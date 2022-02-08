import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider.js"
import { useHistory } from "react-router-dom";

export const PostList = () => {
    const { posts, getPosts } = useContext(PostContext);
    const history = useHistory()

    useEffect(() => {
        getPosts();
    }, []);

    <button
        onClick={() => {
            history.push({ pathname: "/posts/new" });
        }}
    >
        Create New Post
    </button>

    return (
        <>
            <article>
                <h1>Current Posts</h1>
                {posts.map((post) => {
                    return (
                        <section key={`post--${post.id}`}>
                            <div>
                                <p>Creator: {post.id}</p>
                                <p> This is where my {post.title} should be.</p>
                                <p> {post.reaction}</p>
                            </div>
                        </section>
                    )
                })}
                <section>
                    <p>Does this unit have a soul?</p>
                </section>

            </article>
        </>
    );
};