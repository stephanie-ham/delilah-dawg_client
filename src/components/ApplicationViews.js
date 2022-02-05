import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./profile/ProfileProvider"
import { ProfileList } from "./profile/ProfileList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <ProfileProvider>
                <Route path="/rareusers">
                    <ProfileList />
                </Route>
            </ProfileProvider>
        </main>
    </>
}
