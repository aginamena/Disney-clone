import React from 'react'
import "./Detail.css";

function Detail(props) {
    return (
        <div id="detail" style={{ backgroundImage: "url(" + props.src + ")" }}>
            <div className="container">

            </div>
        </div>
    )
}

export default Detail
