import React from 'react'
import "./HeaderLinks.css";

function HeaderLinks(props) {
    return (
        <a href="https://www.disney.com/">
            <span id="headerLinks">
                <img src={props.src} alt="header link" />
                <a >{props.name}</a>
            </span>
        </a>
    )
}

export default HeaderLinks
