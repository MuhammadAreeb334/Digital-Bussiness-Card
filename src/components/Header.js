import React from "react";
import Profile from "../images/Profile.jpg"

export default function Header() {
    return(
        <img className="profile" src = {Profile} alt = "Profile picture" />
    )
}
