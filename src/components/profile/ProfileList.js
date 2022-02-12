import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { ProfileContext } from "./ProfileProvider"


export const ProfileList = () => {
    const { profile, getProfile, getPostsByUser, posts } = useContext(ProfileContext)
    // const { userId } = useParams();
    // const userProfile = []
    const history = useHistory()

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
                    <button onClick={
                        () => history.push(`/rareusers/${profile.id}/edit`)
                    }>Edit Bio</button>
                    <div>
                        Created on {profile.rareuser?.created_on}
                    </div>
                </div>
            </section>
            <section className="posts">
                <div className="user_posts">
                    Posts: {profile.rareuser?.title}
                </div>
            </section>
        </>
    )
}

{/* Posts: {profile.map((profiles) => {
    return (
        <div>{profiles.rareuser.posts}</div>
    )
})} */}