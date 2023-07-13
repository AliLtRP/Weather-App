import './App.css';
import Home from './Home';
import AboutPage from '../about/AboutPage';

function HomeNav(){

    return(
        <div className="homeNav">
            <div className="navWrap">
                <a to="/">Home</a>
                <a to="/about">About</a>
            </div>

        </div>
    )
}

export default HomeNav;