import React from 'react'
import HeaderLinks from './HeaderLinks'
import "./Header.css";


function test() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img src="./images/logo.svg" alt="desney logo" id="header-logo" className="navbar-brand" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">



                <ul class="navbar-nav">
                    <div>
                        <HeaderLinks src="./images/home-icon.svg" name="home" />
                        <HeaderLinks src="./images/search-icon.svg" name="search" />
                        <HeaderLinks src="./images/watchlist-icon.svg" name="watchlist" />
                        <HeaderLinks src="./images/original-icon.svg" name="original" />
                        <HeaderLinks src="./images/movie-icon.svg" name="movies" />
                        <HeaderLinks src="./images/series-icon.svg" name="series" />
                    </div>
                    {/* <div>
                        <img src={userPhoto} alt="user profile" />
                        <span>
                            <small>{userName}</small>

                            <button onClick={signOut}>Log Out</button>
                        </span>
                    </div> */}
                </ul>
            </div>
        </nav>
    )
}

export default test
