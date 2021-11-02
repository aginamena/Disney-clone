import React from 'react'
import "./Login.css";

function Login() {
    return (
        <div id="login" style={{ backgroundImage: "url(./images/login-background.jpg)" }}>
            <div className="container">
                <img src="./images/cta-logo-one.svg" alt="cta" />
                <button>GET ALL THERE</button>
                <small>The mission of The Walt Disney Company is to entertain, inform and inspire people around the globe through the power of unparalleled storytelling, reflecting the iconic brands, creative minds and innovative technologies that make ours the world’s premier entertainment company.</small>
                <img src="./images/cta-logo-two.png" alt="cta" />

            </div>

        </div>
    )
}

export default Login
