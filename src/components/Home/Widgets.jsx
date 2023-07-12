import './App.css';
import './wid.css';

function Wid({ res }) {

    let sunrise = new Date(res.sys.sunrise * 1000);
    let sunset = new Date(res.sys.sunset * 1000);


    console.log(sunrise.getDay() + " day");
    return (
        <div className="widget">
            <div className="row">

                {/* 1 */}
                <div className="wid">
                    <div className="stat">
                        <p>SEA & GROUND LEVEL</p>
                    </div>

                    <div className="centerCon">
                        <div className="tempH">
                            {"Temp Max: " + String(res.main.temp_max).slice(0, 5) + " C"}
                        </div>

                        <div className="tempL">
                            {"Temp Min: " + String(res.main.temp_min).slice(0, 5) + " C"}
                        </div>

                    </div>


                </div>

                {/* 2 */}
                <div className="wid">
                    < div className="stat">
                        <p>WIND STATUS</p>
                    </div>

                    <div className="centerCon">

                        <div className="speed">
                            <p className='para'>{res.wind.speed}</p>
                            <p>KM/h</p>
                        </div>

                        <div className="deg">
                            {res.wind.deg}
                        </div>
                    </div>

                </div>

                {/* 3 */}
                <div className="wid">
                    <div className="stat">
                        <p>SUNRISE & SUNSET</p>
                    </div>

                    <div className="centerCon">
                        {sunrise.getHours() % 12 + ":" + sunrise.getMinutes() + "AM"} <br />
                        {sunset.getHours() % 12 + ":" + sunset.getMinutes() + "PM"}
                    </div>

                </div>
            </div>

            <div className="row">

                {/* 4  */}
                <div className="wid">
                    <div className="stat">
                        <p>HUMIDITY</p>
                    </div>

                    <div className="centerCor">
                        {res.main.humidity + "%"}
                    </div>
                    <div className="foot">
                        Normal
                    </div>
                    <div className="feelWhat"></div>
                </div>

                {/* 5 */}
                <div className="wid">
                    <div className="stat">
                        <p>VISIBILITY</p>

                    </div>

                    <div className="centerCor">
                        {res.visibility / 1000 + "KM"}
                    </div>
                    <div className="foot">
                        Normal
                    </div>
                    <div className="feelWhat"></div>
                </div>

                {/* 6 */}
                <div className="wid">
                    <div className="stat">
                        <p>PRESSURE</p>

                    </div>

                    <div className="centerCor">
                        {res.main.pressure + "hPa"}
                    </div>
                    <div className="foot">
                        Normal
                    </div>
                    <div className="feelWhat"></div>
                </div>
            </div>
        </div>
    )
}

export default Wid;