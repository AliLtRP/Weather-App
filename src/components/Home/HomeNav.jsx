import { Link,Routes,Route, Outlet } from 'react-router-dom';
import './App.css';
import Home from './Home';
import AboutPage from '../about/AboutPage';

function HomeNav(){

    return(
        <div className="homeNav">
            <div className="navWrap">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>

        </div>
    )
}

export default HomeNav;