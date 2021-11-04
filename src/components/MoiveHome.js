import React from 'react'
import "./MovieHome.css";
import Movies from './Movies';
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux"

function MoiveHome() {
    const movies = useSelector(selectMovies);
    return (
        <>
            <Movies
                heading="Recommended for You"
                movies={
                    [
                        movies[5],
                        movies[2],
                        movies[3],
                        movies[9]
                    ]
                }
            />
            <Movies
                heading="New to Disney+"
                movies={
                    [
                        movies[4],
                        movies[7],
                        movies[6],
                        movies[11]
                    ]
                }
            />
            <Movies
                heading="Originals"
                movies={
                    [
                        movies[8],
                        movies[1],
                        movies[0],
                        movies[10]
                    ]
                }

            />
        </>
    )
}

export default MoiveHome
