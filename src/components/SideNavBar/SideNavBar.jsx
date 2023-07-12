import './App.css';
import Search from './SearchLoc';
import Status from './Status';
import Temp from './TempDegree';
import Img from './WeatherStatusImg';

function SideNavBar({ res, city }) {

    return (
        <div className='nav'>
            <div className="SideNavBar">
                <Search city={city}/>
                <Img icon={res.weather[0].icon}/>
                <Temp temp={res.main.temp} time={res.sys.sunrise} timezone={res.timezone}/>
                <Status weather={res.weather[0].main}/>
            </div>
        </div>
    )
}

export default SideNavBar;