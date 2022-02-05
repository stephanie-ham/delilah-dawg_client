import React, { useState, createContext} from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {
    const [profile, setProfile] = useState([])

    
    const getProfile = () => {
        return fetch("http://localhost:8000/rareusers", {
            headers: {
                Authorization: `Token ${localStorage.getItem("dd_token")}`,
            },
        })
        .then((response) => response.json())
        .then(setProfile);
    };
    
    return (
        <ProfileContext.Provider value={{
            getProfile, profile
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