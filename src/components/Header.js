import React, { useEffect } from 'react'
import "./Header.css";
import HeaderLinks from './HeaderLinks';
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
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
                // go the home page
                history.push("/home");
            }
        })
    }, [])

    const signIn = () => {
        //we've to also enable signing into google from firebase for this to work correctly
        signInWithPopup(auth, provider)
            .then(result => {
                let user = result.user;
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                // go the home page
                history.push("/home");
            })
            .catch((err) => {
                alert("AN ERROR OCCURED!")
            })
    }
    const signOut = () => {
        auth.signOut()
            .then(() => {
                // the user signs out, we redirect back to the login page
                dispatch(setSignOut());
                //go to log out page
                history.push("/");
            })
            .catch(() => alert("ERROR SIGNING OUT!"))
    }

    return (
        <div id="header" className="container-fluid">
            <span id="firstChild">
                <img src="./images/logo.svg" alt="desney logo" id="header-logo" />

                <span>

                    {
                        // if the username isn't null, we want to share these links
                        userName && (
                            <>
                                <HeaderLinks src="./images/home-icon.svg" name="home" />
                                <HeaderLinks src="./images/search-icon.svg" name="search" />
                                <HeaderLinks src="./images/watchlist-icon.svg" name="watchlist" />
                                <HeaderLinks src="./images/original-icon.svg" name="original" />
                                <HeaderLinks src="./images/movie-icon.svg" name="movies" />
                                <HeaderLinks src="./images/series-icon.svg" name="series" />
                            </>
                        )
                    }
                </span>
            </span>
            <span id="profile">
                {
                    // if the user isn't loged in, we want to show the login button
                    // otherwise, show the user's profile image
                    !userName ? <button onClick={signIn}>Login</button> :
                        <div>
                            {/* <span>Profile</span> */}
                            <img src={userPhoto} alt="user profile" />
                            <span>
                                <small>{userName}</small>

                                <button onClick={signOut}>Log Out</button>
                            </span>
                        </div>
                }
            </span>
        </div>
    )
}

export default Header
