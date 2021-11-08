import React, { useEffect, useState } from 'react'
import "./Header.css";
import HeaderLinks from './HeaderLinks';
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/user/userSlice";
import { connectAdvanced, useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import { signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

function Header() {
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const dispatch = useDispatch()
    const history = useHistory();
    const [toggler, setToggler] = useState("block");

    function toggleNavbar() {
        if (toggler == "block") {
            // document.querySelector("#navbarNavAltMarkup").style = "display:block";
            document.querySelector("#navbarNavAltMarkup").style = "height:auto; display:block; opacity:1; transition: all 1s ease-in";
            setToggler("none");
        } else {
            // document.querySelector("#navbarNavAltMarkup").style = "display:none";
            document.querySelector("#navbarNavAltMarkup").style = "height:0; display:block; opacity:0; transition: all 1s ease-out";
            setToggler("block");
        }
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                // if the user refresed the page after login, we still
                // want to have the user loged in
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                //whenever the user logins we go to home page
                history.push("/home");
            }
        })
    }, [])

    const signIn = () => {
        //we've to also enable signing into google from firebase for this to work correctly

        if (window.innerWidth <= 540) {
            //sing in from mobile device
            signInWithRedirect(auth, provider);

        } else {
            //signing in from the tablet and above device
            signInWithPopup(auth, provider);
        }
    }
    const signOut = () => {
        auth.signOut()
            .then(() => {
                // the user signs out, we redirect back to the login page
                dispatch(setSignOut());
                //go to log out page
                history.push("/");
            })
            .catch(() => alert("YOU HAVEN'T SIGNED OUT!"))
    }
    return (

        <nav className="container-fluid navbar navbar-expand-lg" id="header">
            <img src="./images/logo.svg" alt="desney logo" id="header-logo" className="navbar-brand" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                <i className="fas fa-bars navbar-toggler-icon" style={{ color: "white" }} onClick={toggleNavbar} />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                <div className="navbar-nav">
                    {
                        userName ? (
                            <div id="headerLinkAndProfile">
                                <div id="headerLinksContainer">
                                    <HeaderLinks src="./images/home-icon.svg" name="home" />
                                    <HeaderLinks src="./images/search-icon.svg" name="search" />
                                    <HeaderLinks src="./images/watchlist-icon.svg" name="watchlist" />
                                    <HeaderLinks src="./images/original-icon.svg" name="original" />
                                    <HeaderLinks src="./images/movie-icon.svg" name="movies" />
                                    <HeaderLinks src="./images/series-icon.svg" name="series" />
                                </div>

                                {/* second part */}

                                <div id="userImgAndLogoutBtn">
                                    <img src={userPhoto} alt="user profile" id="userImage" />
                                    <span>
                                        <small>{userName}</small>

                                        <button onClick={signOut} className="signInAndOutBtn">Log Out</button>
                                    </span>
                                </div>
                            </div>
                        ) : <button onClick={signIn} className="signInAndOutBtn">Login</button>
                    }

                </div>
            </div>
        </nav>

    )
}

export default Header
