import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"


export const ProfileList = () => {
    const { profile, getProfile } = useContext(ProfileContext)
    // const { userId } = useParams();
    // const userProfile = []
    
    useEffect(() => {
        getProfile();
    }, [])
    
    // const profile = parseInt(localStorage.getItem("rare_user_id"))
    return (
        <>
            <h2>Profile</h2>
            <section className="profile">
                <div className="user_info">
                    {/* <div>
                        {profile.rareuser && profile.rareuser.first_name}
                        {profile.rareuser && profile.rareuser.last_name}
                    </div> */}
                    <div>
                        {profile.rareuser && profile.rareuser.profile_image_url}
                    </div>
                    <div>
                        Bio: {profile.rareuser && profile.rareuser.bio}
                    </div>
                    <div>
                        Created on {profile.rareuser && profile.rareuser.created_on}
                    </div>
                </div>
            </section>
        </>
    )
}