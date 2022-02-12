import React, { useState, createContext } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {
    const [profile, setProfile] = useState([])
    const [posts, setPosts] = useState([])


    const getProfile = () => {
        return fetch("http://localhost:8000/rareusers", {
            headers: {
                Authorization: `Token ${localStorage.getItem("dd_token")}`,
            },
        })
            .then((response) => response.json())
            .then(res => {
                setProfile(res.rareuser)
            });
    };

    const getProfileById = (id) => {
        return fetch(`http://localhost:8000/rareusers/${id}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("dd_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setProfile)
    }

    const getPostsByUser = (id) => {
        return fetch(`http://localhost:8000/rareusers/${id}/posts`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("dd_token")}`,
            },
        })
            .then((response) => response.json())
            .then(setPosts)
    }

    const editProfile = (rareuser) => {
        return fetch(`http://localhost:8000/rareusers/${rareuser.id}`, {
            method: "PUT",
            headers: {
                Authorization: `Token ${localStorage.getItem("dd_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rareuser)
        })
            .then(getProfile)
    }

    const deleteProfile = (userId) => {
        return fetch(`http://localhost:8000/rareusers/${userId}`, {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("dd_token")}`,
            },
        })
            .then(getProfile)
    };

    return (
        <ProfileContext.Provider value={{
            getProfile, profile, getPostsByUser, deleteProfile, editProfile, posts, getProfileById
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}



// const getRareUser = () => {
    //     return fetch("http://localhost:8000/rareuser")
    //     .then(res => res.json())
    //     .then(setProfiles)

    // const getRareUserById = (userId) => {
    //     return fetch(`http://localhost:8088/rareusers/${userId}`), {
    //         headers: {
    //             Authorization: `Token ${localStorage.getItem("dd_token")}`,
    //         },
    //     }
    //     .then(res => res.json())
    //     .then(setCurrentUser)
    // }
// }