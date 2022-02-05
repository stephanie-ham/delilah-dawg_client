import React, { useState } from "react";

export const TagContext = React.createContext();

export const TagProvider = (props) => {
  const [tags, setTags] = useState([]);

  const getTags = () => {
    return fetch("http://localhost:8000/tags", {
      headers: {
        Authorization: `Token ${localStorage.getItem("dd_token")}`
      },
    })
      .then((response) => response.json())
      .then(setTags);
  };

  const createTag = (tag) => {
    return fetch("http://localhost:8000/tags", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("dd_token")}`,
				"Content-Type": "application/json"
			},
      body: JSON.stringify(tag)
    }).then((response) => response.json())
      .then(getTags);
  }

  return (
    <TagContext.Provider value={{ tags, getTags, createTag }}>
      {props.children}
    </TagContext.Provider>
  );
};

