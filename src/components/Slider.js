import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "./Slider.css";

function Slider() {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img src="./images/slider-badag.jpg" alt="badag" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img src="./images/slider-badging.jpg" alt="badging" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img src="./images/slider-scale.jpg" alt="scale" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img src="./images/slider-scales.jpg" alt="scales" className="d-block w-100" />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider
