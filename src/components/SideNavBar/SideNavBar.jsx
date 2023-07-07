import './App.css';
import Status from './Status';
import Temp from './TempDegree';
import Img from './WeatherStatusImg';

function SideNavBar() {

    return (
        <div className='nav'>
            <div className="SideNavBar">
                <Img />
                <Temp />
                <Status />
            </div>
        </div>
    )
}

export default SideNavBar;