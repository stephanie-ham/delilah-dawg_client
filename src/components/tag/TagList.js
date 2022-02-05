import React, { useContext, useEffect } from "react";
import { TagContext } from "./TagProvider";
import './Tag.css'

export const TagList = (props) => {
  const { tags, getTags } = useContext(TagContext);

  useEffect(() => {
    getTags();
  }, []);

  return (
    <>
      <article className="tags">
        <h1 className="list__header">Tags</h1>
        <section className="list__section">
          {tags.map((tag) => {
            return (
              <section key={tag.id} className="tag">
                <div key={tag.label} className="tag__label">
                  {tag.label}
                </div>
              </section>
            )
          })}
        </section>
      </article>
    </>
  )
}