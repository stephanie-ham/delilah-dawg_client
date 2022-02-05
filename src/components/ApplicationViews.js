import React from "react"
import { Route } from "react-router-dom"
// import { TagList } from "./tag/TagList"
import { TagManagement } from "./tag/TagManagement"
import { TagProvider } from "./tag/TagProvider"

export const ApplicationViews = () => {
  return <>
    <main style={{
      margin: "5rem 10rem",
      // backgroundColor: "lightgoldenrodyellow"
    }}>
      <TagProvider>
        <Route exact path="/tags">
          <TagManagement />
        </Route>
      </TagProvider>
    </main>
  </>
}
