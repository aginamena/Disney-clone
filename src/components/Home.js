import React from 'react'
import Slider from './Slider';
import Viewers from './Viewers';
import Movies from './Movies';
import "./Home.css";

function Home() {
    return (
        <div className="home" >
            <Slider />
            <div class="home_viewers">
                <Viewers />
            </div>
            <Movies
                heading="Recommended for You"
                movies={[
                    "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                    "https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
                    "https://s3.amazonaws.com/comicgeeks/comics/covers/large-6982915.jpg?1633461589",
                    "https://flxt.tmsimg.com/assets/p14279_p_v10_aa.jpg"
                ]}
            />
            <Movies
                heading="New to Disney+"
                movies={[
                    "https://static01.nyt.com/images/2019/11/12/arts/12best-disneyplus-TheSimpsons/merlin_154620150_690c71a7-032a-49a1-92f0-d983b5f394dc-jumbo.jpg?quality=75&auto=webp",
                    "https://lumiere-a.akamaihd.net/v1/images/image_8eba0e1a.jpeg",
                    "https://static.billboard.com/files/media/the-lion-king-1994-everett-billboard-1548-compressed.jpg",
                    "https://upload.wikimedia.org/wikipedia/en/3/3d/Tarzan2dvdcover.jpg"
                ]}
            />
            <Movies
                heading="Originals"
                movies={[
                    "https://image.api.playstation.com/vulcan/img/rnd/202011/0714/vuF88yWPSnDfmFJVTyNJpVwW.png",
                    "https://upload.wikimedia.org/wikipedia/en/5/5a/The_Big_Bang_Theory_Season_8.jpg",
                    "https://lumiere-a.akamaihd.net/v1/images/image_6ce16244.jpeg?region=0%2C0%2C1400%2C2100",
                    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg"
                ]}
            />
        </div>
    )
}

export default Home
