import React from "react"
import { Route } from "react-router-dom"
//Posts
import { PostProvider } from "../post/PostProvider"
import { PostList } from "../post/PostForm"

export const ApplicationViews = () => {
    return <>


        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            Application views

            <PostProvider>
                <Route path="/posts">
                    <PostList />
                </Route>

            </PostProvider>
        </main>
    </>
}
