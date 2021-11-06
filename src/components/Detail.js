import React, { useEffect, useState } from 'react'
import "./Detail.css";
import { useParams } from "react-router-dom"
import db from "../firebase"
import { doc, getDoc } from "firebase/firestore";

function Detail(props) {
    const { identifier } = useParams();
    const [movie, setMovie] = useState();

    async function getMovie() {
        const docRef = doc(db, "disneyMovies", identifier);
        const movieType = await getDoc(docRef);
        if (movieType.exists()) {
            //save the movie to the movie state
            setMovie(movieType.data());
        }
        else {
            // if the movie doesn't exist, redirect to home page
            console.log("No such document!");
        }
    }
    useEffect(() => {
        getMovie();
    }, [])

    return (


        <div id="detail" style={movie ? { backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + movie.backgroundImg + ")" } : {}}>
            <div className="container">

                {
                    movie && (
                        <>
                            <h1 className="imageTitle">{movie.titleImg}</h1>
                            <div id="btn-playList">
                                <button id="play-btn">
                                    <i className="fas fa-play" />
                                    <small>Play</small>
                                </button>
                                <button id="play-btn2">
                                    <i className="fas fa-play" />
                                    <small>Trailer</small>
                                </button>
                                <i className="fas fa-plus"></i>
                                <i className="fas fa-users"></i>
                            </div>
                            <p className="producers">By {movie.producers}</p>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default Detail
