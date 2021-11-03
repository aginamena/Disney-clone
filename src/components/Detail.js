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
                <img src="./images/play-icon-black.png" alt="play button" />
                {
                    movie && (
                        <>
                            <p className="imageTitle">KING KONG</p>
                            <div>
                                <div>
                                    <img src="./images/play-icon-black.png" alt="play button" />
                                    <small>Play</small>
                                </div>
                                <button>
                                    {/* <img src="./images/play-icon-white.png" alt="trailer button" /> */}
                                    <small>Trailer</small>
                                </button>
                                <div>
                                    <img src="./images/group-icon.png" alt="group icon" />
                                </div>
                            </div>
                            <p className="producers">{movie.producers}</p>
                            <p className="description">{movie.description}</p>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default Detail
