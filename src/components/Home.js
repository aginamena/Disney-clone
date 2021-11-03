import React, { useEffect } from 'react'
import Slider from './Slider';
import Viewers from './Viewers';
import Movies from './Movies';
import "./Home.css";
import db from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import MoiveHome from './MoiveHome';


import { doc, collection, query, where, onSnapshot } from "firebase/firestore";

function Home() {

    const dispatch = useDispatch()

    // this useEffect runs ONLY when the "HOME" componet is going to be mounted on the dom
    useEffect(() => {

        const q = query(collection(db, "disneyMovies"))
        const unsub = onSnapshot(q, (querySnapshot) => {
            // console.log("Data", querySnapshot.docs.map(d => doc.data()));
            const tempMovies = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            dispatch(setMovies(tempMovies))
        });



    }, [])

    return (
        <div className="home" >
            <Slider />
            <div class="home_viewers">
                <Viewers />
            </div>
            <MoiveHome />
        </div>
    )
}

export default Home
