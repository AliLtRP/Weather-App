import './App.css';

function Wid( {res} ) {

    let sunrise = new Date(res.sys.sunrise*1000);
    let sunset = new Date(res.sys.sunset *1000);

    
    console.log(sunrise.getDay() +" day");
    return (
        <div className="widget">
            <div className="row">

                {/* 1 */}
                <div className="wid">
                    <div className="stat">
                        <p>SEA & GROUND LEVEL</p>
                    </div>

                    <div className="centerCon">
                        {String(res.main.temp_max).slice(0,5) +" C"} <br/>
                        {String(res.main.temp_min).slice(0,5) +" C"}
                    </div>

                    <div className="foot">
                        Normal
                    </div>
                </div>

                {/* 2 */}
                <div className="wid">
                    < div className="stat">
                        <p>Wind Status</p>
                    </div>

                    <div className="centerCon">
                        {res.wind.speed} KM/h     

                        <div className="deg">
                            {res.wind.deg}    
                        </div>            
                    </div>

                    <div className="foot">
                        Normal
                    </div>
                </div>

                {/* 3 */}
                <div className="wid">
                    <div className="stat">
                        <p>SUNRISE & SUNSET</p>
                    </div>

                    <div className="centerCon">
                        {sunrise.getHours() % 12+":"+sunrise.getMinutes()+"AM"} <br/>
                        {sunset.getHours() % 12+":"+sunset.getMinutes()+"PM"}
                    </div>

                    <div className="foot">
                        Normal
                    </div>
                </div>
            </div>

            <div className="row">

                {/* 4  */}
                <div className="wid">
                    <div className="stat">
                        <p>HUMIDITY</p>
                    </div>

                    <div className="centerCon">
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

                    <div className="centerCon">
                        {res.visibility/1000 +"KM"}
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

                    <div className="centerCon">
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