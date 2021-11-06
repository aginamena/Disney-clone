import React, { useEffect } from 'react'
import "./Header.css";
import HeaderLinks from './HeaderLinks';
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/user/userSlice";
import { connectAdvanced, useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import { signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { useHistory } from "react-router-dom"


function Header() {
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const dispatch = useDispatch()
    const history = useHistory();

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
        <nav id="header" className="container-fluid navbar navbar-expand-lg">
            <img src="./images/logo.svg" alt="desney logo" id="header-logo" className="navbar-brand" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                <i className="fas fa-bars navbar-toggler-icon"></i>
            </button>


            <div className="collapse navbar-collapse" id="navbarNav">
                {
                    // if the username isn't null, we want to share these links
                    userName ? (
                        <>
                            <ul className="navbar-nav">
                                <div>
                                    <HeaderLinks src="./images/home-icon.svg" name="home" />
                                    <HeaderLinks src="./images/search-icon.svg" name="search" />
                                    <HeaderLinks src="./images/watchlist-icon.svg" name="watchlist" />
                                    <HeaderLinks src="./images/original-icon.svg" name="original" />
                                    <HeaderLinks src="./images/movie-icon.svg" name="movies" />
                                    <HeaderLinks src="./images/series-icon.svg" name="series" />
                                </div>
                                <div>
                                    <img src={userPhoto} alt="user profile" />
                                    <span>
                                        <small>{userName}</small>

                                        <button onClick={signOut}>Log Out</button>
                                    </span>
                                </div>
                            </ul>

                        </>
                    )
                        : <button onClick={signIn}>Login</button>
                }

            </div>
        </nav>
    )
}

export default Header
