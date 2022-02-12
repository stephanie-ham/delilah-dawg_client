import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TagContext } from "./TagProvider";
import './Tag.css'

export const TagForm = () => {
  const history = useHistory();
  const { createTag, getTags } = useContext(TagContext)

  const [currentTag, setCurrentTag] = useState({ label: "" })

  useEffect(() => {
    getTags();
  }, [])

  const changeTagState = (e) => {
    const newTagState = { ...currentTag }

    newTagState[e.target.name] = e.target.value

    setCurrentTag(newTagState)
  }

  return (
    <form className="form">
      <h2 className="form__title">Create a New Tag</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="label">Label:</label>
          <input
            type="text"
            name="label"
            required
            autoFocus
            className="form-control"
            value={currentTag.label}
            onChange={changeTagState}
          />
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();

          const tag = {
            label: currentTag.label
          };

          createTag(tag).then(() => history.push("./tags"))
        }}
        className="btn btn-4"
      >
        Create Tag
      </button>
    </form>
  )
}
