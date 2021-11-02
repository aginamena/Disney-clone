import React from 'react'
import "./Movies.css";
import { Link } from "react-router-dom"

function Movies(props) {
    return (
        <div id="movies" className="container">
            <h4>{props.heading}</h4>
            <div>
                {
                    props.movies.map((movie, index) => (
                        <Link to="/detail"><img src={movie} key={index} /></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Movies
