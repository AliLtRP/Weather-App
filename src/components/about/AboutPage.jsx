import HomeNav from "../Home/HomeNav";
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

function AboutPage() {

    return (
        <div className="about">
            <div className="header">
                <div className="homeNav">
                    <div className="navWrap">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </div>
                </div>
            </div>


            <div className="aboutSec">
                <p style={{ width: "60%", marginTop: "3em" }}>
                    Welcome, I'm Ali Ahmed, a Junior Front-End developer. 
                </p>

                <p style={{ width: "60%", marginTop: "3em" }}>
                    At Weather Station, we believe in simplicity. Our minimalist web app provides you with essential weather information, without any unnecessary clutter. As the sole developer behind this project, I have designed Weather Station to offer a clean and streamlined experience.
                </p>

                <p style={{ width: "60%", marginTop: "3em" }}>
                    With Weather Station, you can access weekly and daily temperature forecasts for any city. Just enter the city name in the search bar, and we'll deliver accurate and up-to-date weather data, keeping you informed wherever you are.
                </p>

                <p style={{ width: "60%", marginTop: "3em" }}>
                    As a solo developer, I am committed to continuously enhancing Weather Station's functionality and features. Your feedback is crucial to this process. Please don't hesitate to share your suggestions, comments, or concerns. Your input helps shape the future of Weather Station.
                    <br /><br /> Follow Me:
                </p>

                <div className="list">
                    <ul>
                        <li><a href="https://github.com/AliLtRP" target="_blank">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/aliltrp/" target="_blank">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/aliltrp/" target="_blank">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;