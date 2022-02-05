import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./profile/ProfileProvider"
import { ProfileList } from "./profile/ProfileList"
import { TagManagement } from "./tag/TagManagement"
import { TagProvider } from "./tag/TagProvider"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <ProfileProvider>
                <TagProvider>
                    <Route path="/rareusers">
                        <ProfileList />
                    </Route>

                    <Route exact path="/tags">
                        <TagManagement />
                    </Route>
                </TagProvider>
            </ProfileProvider>
        </main>
    </>
}
