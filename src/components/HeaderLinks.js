import React from 'react'
import "./HeaderLinks.css";

function HeaderLinks(props) {
    return (
        <span id="headerLinks">
            <img src={props.src} alt="header link" />
            <a href="">{props.name}</a>
        </span>
    )
}

export default HeaderLinks
