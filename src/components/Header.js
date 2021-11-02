import React from 'react'
import "./Header.css";
import HeaderLinks from './HeaderLinks';

function Header() {
    return (
        <div id="header" className="container-fluid">
            <span id="firstChild">
                <img src="./images/logo.svg" alt="desney logo" id="header-logo" />
                <span>
                    <HeaderLinks src="./images/home-icon.svg" name="home" />
                    <HeaderLinks src="./images/search-icon.svg" name="search" />
                    <HeaderLinks src="./images/watchlist-icon.svg" name="watchlist" />
                    <HeaderLinks src="./images/original-icon.svg" name="original" />
                    <HeaderLinks src="./images/movie-icon.svg" name="movies" />
                    <HeaderLinks src="./images/series-icon.svg" name="series" />
                </span>
            </span>
            <span id="profile">
                <span>Profile</span>
                <img src="./images/my-profile.jpg" alt="user profile" />
            </span>
        </div>
    )
}

export default Header
