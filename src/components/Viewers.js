import React from 'react'
import "./Viewers.css";

function Viewers() {
    function playVideo(event) {
        if (event.target.tagName === "IMG") {
            const targetImg = event.target;
            targetImg.style = "display:none";
            let video = targetImg.nextSibling;
            video.style = "display:block"
            video.play();
        }
    }
    function stopVideo(event) {
        if (event.target.tagName === "VIDEO") {
            const targetVideo = event.target;
            targetVideo.previousSibling.style = "display:block";
            targetVideo.style = "display:none";
        }
    }

    return (

        <div id="viewers" className="container">

            <div onMouseOver={playVideo} onMouseOut={stopVideo} className="test" >

                <img src="./images/viewers-disney.png" alt="disney" id="video1" />
                <video src="./videos/1564674844-disney.mp4" width="200" height="100" controls loop />
            </div>
            <div onMouseOver={playVideo} onMouseOut={stopVideo} className="test">

                <img src="./images/viewers-pixar.png" alt="pixar" id="video1" />
                <video src="./videos/1564676714-pixar.mp4" width="200" height="100" controls loop />
            </div>
            <div onMouseOver={playVideo} onMouseOut={stopVideo} className="test">

                <img src="./images/viewers-marvel.png" alt="marvel" id="video1" />
                <video src="./videos/1564676115-marvel.mp4" width="200" height="100" controls loop />
            </div>
            <div onMouseOver={playVideo} onMouseOut={stopVideo} className="test">

                <img src="./images/viewers-starwars.png" alt="starwars" id="video1" />
                <video src="./videos/1608229455-star-wars.mp4" width="200" height="100" controls loop />
            </div>
            <div onMouseOver={playVideo} onMouseOut={stopVideo} className="test">

                <img src="./images/viewers-national.png" alt="national" id="video1" />
                <video src="./videos/1564676296-national-geographic.mp4" width="200" height="100" controls loop />
            </div>
        </div>

    )
}

export default Viewers
