import './App.css'
import Temp from './TempDegree';
import Img from './WeatherStatusImg';

function SideNavBar(){

    return(
        <>
            <div className="SideNavBar">  
            <Img />
            <Temp />
            </div>
        </>
    )
}

export default SideNavBar;