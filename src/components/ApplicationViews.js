import React from "react"
import { Route } from "react-router-dom"
//Posts
import { PostProvider } from "../post/PostProvider"
import { PostForm } from "../post/PostForm"
import { PostList } from "../post/PostList"

export const ApplicationViews = () => {
    return <>


        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            Application views

            <PostProvider>
                <Route path="/posts/createnew">
                    <PostForm />
                </Route>
                <Route path="/post">
                    <PostList />
                </Route>


            </PostProvider>
        </main>
    </>
}
