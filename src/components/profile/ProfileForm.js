import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProfileContext } from "./ProfileProvider";
import { useParams } from "react-router-dom"

export const ProfileForm = () => {
    const history = useHistory();
    const { editProfile, getProfile, getProfileById, profile } = useContext(ProfileContext)
    const [currentProfile, setCurrentProfile] = useState({ profile: "" })

    // const [rareuserId] = useParams();

    useEffect(() => {
        getProfile();
    }, [])

    useEffect(() => {
        if(profile.id)
        setCurrentProfile(profile);
    }, [profile])

    // useEffect(() => {
    //     getProfileById(rareuserId);
    //     .then((rareuser) => {
    //         setCurrentProfile(rareuser)
    //     })
    // }, [])

    const changeProfileState = (e) => {
        const newProfileState = { ...currentProfile }
        newProfileState[e.target.name] = e.target.value

        setCurrentProfile(newProfileState)
    }

    return (
        <form className="edit-user">
            <fieldset>
                <div className="profile_image_url">
                    Profile Pic:
                    <input
                        type="text"
                        name="Profile Pic"
                        required
                        autoFocus
                        classname="form-control"
                        value={currentProfile.profile_image_url}
                        onChange={changeProfileState}>
                    </input>
                </div>
                <div className="Bio">
                    Bio:
                    <input
                        type="text"
                        name="Profile Pic"
                        required
                        autoFocus
                        classname="form-control"
                        value={currentProfile.bio}
                        onChange={changeProfileState}>
                    </input>
                </div>
            </fieldset>
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    
                    const profile = {
                        id: currentProfile.id,
                        bio: currentProfile.bio,
                        profile_image_url: currentProfile.profile_image_url
                    };
                    
                    editProfile(profile).then(() => history.push("./rareusers"))
                }}
                className="btn btn-4"
            >
                Save
            </button>
        </form>
    )
}