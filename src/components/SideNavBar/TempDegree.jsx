import moment from "moment";
import Img from "./WeatherStatusImg";
import './App.css';

function Temp( { temp, time , timezone} ) {
    let day = new Date(time*1000);

    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday"];
    
    console.log(day.getDay());

    let tz = timezone/60;
    let currentTime = moment().utcOffset(tz).format("h:mm A");

    return (
        <div className="temp">
            <div className="wrapper">
                <div className="degree">
                    <h2 className='h1' style={{ backgroundColor: 'white', fontSize: "32px", width: "50%" }}>{String(temp-273.15).slice(0,5)}</h2>
                </div>

                <div>
                    <img className='i' src="WeatherStatus/celsius-svgrepo-com.svg" alt="" style={{ height: 25, width: 25 }} />
                </div>
            </div>

            <div className="time">
                <h2>{dayOfWeek[day.getDay()]}</h2>
                <h2 className="clock">,{currentTime}</h2>
            </div>

            <div style={{ width: "100%", height: "50px", display: "flex", justifyContent: "center" }}>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Temp;