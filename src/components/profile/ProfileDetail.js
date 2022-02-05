import React, { useState, createContext} from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {
    const [profiles, setProfile] = useState([])

    // const getRareUser = () => {
    //     return fetch("http://localhost:8000/rareuser")
    //     .then(res => res.json())
    //     .then(setProfiles)
    // }

    const getRareUser = () => {
        return fetch("http://localhost:8000/rareusers", {
          headers: {
            Authorization: `Token ${localStorage.getItem("lu_token")}`,
          },
        })
          .then((response) => response.json())
          .then(setProfile);
      };
    
    return (
        <ProfileContext.Provider value={{
            getRareUser, profiles
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}

