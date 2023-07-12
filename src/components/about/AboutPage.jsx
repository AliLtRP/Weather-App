import HomeNav from "../Home/HomeNav";
import { Link,Routes,Route, Outlet } from 'react-router-dom';
import './App.css';

function AboutPage(){

    return(
        <div className="homeNav">
            <div className="navWrap">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default AboutPage;