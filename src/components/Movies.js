import React from 'react'
import "./Movies.css";
import { Link } from "react-router-dom"

function Movies(props) {
    return (
        <div id="movies" className="container">
            <h4>{props.heading}</h4>
            <div>
                {
                    props.movies.map((movie) => (
                        movie &&
                        <Link to={"/detail/" + movie.id}>
                            {/* if there is a move, we diplay the card image */}
                            {<img src={movie.cardImg} key={movie.id} id={movie.id} />}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Movies
