import React from "react"
import { Route } from "react-router-dom"
import { CategoryForm } from "./category/CategoryForm"
import { CategoryList } from "./category/CategoryList"
import { CategoryProvider } from "./category/CategoryProvider"
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
      <CategoryProvider>
          <Route exact path="/categories">
              <CategoryList />
          </Route>
          <Route exact path="/categories/new">
            <CategoryForm />
          </Route>
      </CategoryProvider>
    </main>
  </>
}
