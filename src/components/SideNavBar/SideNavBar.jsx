import './App.css';
import Search from './SearchLoc';
import Status from './Status';
import Temp from './TempDegree';
import Img from './WeatherStatusImg';

function SideNavBar({ res }) {

    return (
        <div className='nav'>
            <div className="SideNavBar">
                <Search />
                <Img icon={res.weather[0].icon}/>
                <Temp temp={res.main.temp} time={res.sys.sunrise} timezone={res.timezone}/>
                <Status weather={res.weather[0].main}/>
            </div>
        </div>
    )
}

export default SideNavBar;