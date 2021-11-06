import React from 'react'
import HeaderLinks from './HeaderLinks'
import "./Header.css";


function test() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>


            {/* 

            if the username isn't null, we want to share these links
                        //     userName && (
                        //         <div id="headerLinkAndProfile">
                        //             <div id="headerLinks">
                        //                 <HeaderLinks src="./images/home-icon.svg" name="home" />
                        //                 <HeaderLinks src="./images/search-icon.svg" name="search" />
                        //                 <HeaderLinks src="./images/watchlist-icon.svg" name="watchlist" />
                        //                 <HeaderLinks src="./images/original-icon.svg" name="original" />
                        //                 <HeaderLinks src="./images/movie-icon.svg" name="movies" />
                        //                 <HeaderLinks src="./images/series-icon.svg" name="series" />
                        //             </div>

                        //             {/* second part */}

                        //             <div>
                        //                 <img src={userPhoto} alt="user profile" id="myImg" />
                        //                 <span>
                        //                     <small>{userName}</small>

                        //                     <button onClick={signOut}>Log Out</button>
                        //                 </span>
                        //             </div>
                        //         </div>
                        //     )
                        //     // : <button onClick={signIn}>Login</button>
                        // } */}


        </nav >
    )
}

export default test
