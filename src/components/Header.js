import React from "react";
import ReactDOM from "react-dom";
import Profile from "../images/Profile.jpg"

export default function Header() {
    return(
        <img className="profile" src = {Profile} alt = "Profile picture" />
    )
}
