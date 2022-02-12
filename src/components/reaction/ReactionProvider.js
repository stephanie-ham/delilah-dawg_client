import React, { useState } from "react";

export const ReactionContext = React.createContext();

export const ReactionProvider = (props) => {
    const [reactions, setReactions] = useState([]);

    const getReactions = () => {
        return fetch("http://localhost:8000/reactions", {
            headers: {
                Authorization: `Token ${localStorage.getItem("dd_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setReactions);
    };

    const getReactionById = (reactionId) => {
        return fetch(`http://localhost:8000/reactions?id=${reactionId}`)
            .then(res => res.json())
    }

    const createReaction = (reaction) => {
        return fetch("http://localhost:8000/reactions", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("dd_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reaction)
        })
            .then((response) => response.json())
            .then(getReactions);
    };

    const removeReaction = reactionId => {
        return fetch(`http://localhost:8000/reactions/${reactionId}`, {
            method: "DELETE"
        })
            .then(getReactions)
    }


    const updateReaction = reaction => {
        return fetch(`http://localhost:8000/reactions/${reaction.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reaction)
        })
            .then(getReactions)
    }

    return (
        <ReactionContext.Provider value={{
            reactions, getReactions, createReaction,
            removeReaction, getReactionById, updateReaction
        }}>
            {props.children}
        </ReactionContext.Provider>
    );
};