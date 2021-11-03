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
                // movies={[
                //     "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                //     "https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
                //     "https://s3.amazonaws.com/comicgeeks/comics/covers/large-6982915.jpg?1633461589",
                //     "https://flxt.tmsimg.com/assets/p14279_p_v10_aa.jpg"
                // ]}
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
                // movies={[
                //     "https://static01.nyt.com/images/2019/11/12/arts/12best-disneyplus-TheSimpsons/merlin_154620150_690c71a7-032a-49a1-92f0-d983b5f394dc-jumbo.jpg?quality=75&auto=webp",
                //     "https://lumiere-a.akamaihd.net/v1/images/image_8eba0e1a.jpeg",
                //     "https://static.billboard.com/files/media/the-lion-king-1994-everett-billboard-1548-compressed.jpg",
                //     "https://upload.wikimedia.org/wikipedia/en/3/3d/Tarzan2dvdcover.jpg"
                // ]}

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
                // movies={[
                //     "https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png",
                //     "https://upload.wikimedia.org/wikipedia/en/5/5a/The_Big_Bang_Theory_Season_8.jpg",
                //     "https://lumiere-a.akamaihd.net/v1/images/image_6ce16244.jpeg?region=0%2C0%2C1400%2C2100",
                //     "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg"
                // ]}

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
