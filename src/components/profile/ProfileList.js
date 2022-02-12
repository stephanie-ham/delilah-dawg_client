import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProfileContext } from "./ProfileProvider"


export const ProfileList = () => {
    const { profile, getProfile, getPostsByUser, posts } = useContext(ProfileContext)
    // const { userId } = useParams();
    // const userProfile = []

    useEffect(() => {
        getProfile();
    }, [])

    useEffect(() => {
        if (profile.rareuser) {
            getPostsByUser(profile.rareuser.id);
        }
    }, [profile])

    // const userPosts =

    // const profile = parseInt(localStorage.getItem("rare_user_id"))
    return (
        <>
            <h2>{profile.rareuser?.user.first_name} {profile.rareuser?.user.last_name}</h2>
            <section className="profile">
                <div className="user_info">
                    <div>
                        {profile.rareuser?.profile_image_url}
                    </div>
                    <div>
                        Bio: {profile.rareuser?.bio}
                    </div>
                    <div>
                        Created on {profile.rareuser?.created_on}
                    </div>
                </div>
            </section>
            <section className="posts">
                <div className="user_posts">
                    Posts: {profile.rareuser?.posts}
                </div>
            </section>
        </>
    )
}