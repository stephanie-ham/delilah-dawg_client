import React from "react"
import { TagForm } from "./TagForm"
import { TagList } from "./TagList"
import "./Tag.css"

export const TagManagement = (props) => {
  return (
    <article className="tag__management">
      <section className="tag__list">
        <TagList />
      </section>
      <section className="tag__form">
        <TagForm />
      </section>
    </article>
  )
}