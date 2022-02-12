import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CategoryContext } from "./CategoryProvider";

export const CategoryList = () => {
    const { categories, getCategories } = useContext(CategoryContext);
    const history = useHistory()

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <article className="categories">
      <header className="categories__header">
        <h1>Categories</h1>
      </header>
      {categories.map((category) => {
        return (
          <section className="category">
            <div className="category_name"></div>
            <div>{category.label}</div>
          </section>
        );
      })}
    <button
       className="btn btn-2 btn-sep icon-create"
       onClick={() => {
           history.push({ pathname: "/categories/new"});
       }}
       >
           Make New Category
       </button>
    </article>
    )
}