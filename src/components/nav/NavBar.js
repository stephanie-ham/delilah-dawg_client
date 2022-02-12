import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="nav-link" to="/post">Posts</Link>
            </li>
            <li className="navbar__item">
                Navigation link
            </li>
            <li className="navbar__item">
                <Link className="navbar_link" to="/categories">Categories</Link>
            </li>
            <li className="navbar_item">
                <Link className="navbar__item" to="/rareusers">
                    Profile
                </Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/tags">Tag Management</Link>
            </li>
            {
                (localStorage.getItem("dd_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("dd_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
