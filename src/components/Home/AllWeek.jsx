
function All( {temp} ) {

    return (
        <div className="allWeek">
            <div className="wrap">
                <div className="days">
                    <div className="day">
                        SUN
                    </div>

                    <div className="weatherImg">
                        <img src="WeatherStatus/cloud.jpg" alt="" className="imgPro"/>
                    </div>

                    <div className="Headertemp">{String(temp - 273.15).slice(0,5)} C</div>
                </div>
                <div className="days">
                    <div className="day">
                        SUN
                    </div>

                    <div className="weatherImg">
                        <img src="WeatherStatus/cloud.jpg" alt="" className="imgPro"style={{width: "inhert"}}/>
                    </div>

                    <div className="Headertemp">{String(temp - 273.15).slice(0,5)} C</div>
                </div>
                <div className="days">
                    <div className="day">
                        SUN
                    </div>

                    <div className="weatherImg">
                        <img src="WeatherStatus/cloud.jpg" alt="" className="imgPro"style={{width: "inhert"}}/>
                    </div>

                    <div className="Headertemp">{String(temp - 273.15).slice(0,5)} C</div>
                </div>
                <div className="days">
                    <div className="day">
                        SUN
                    </div>

                    <div className="weatherImg">
                        <img src="WeatherStatus/cloud.jpg" alt="" className="imgPro"style={{width: "inhert"}}/>
                    </div>

                    <div className="Headertemp">{String(temp - 273.15).slice(0,5)} C</div>
                </div>
                <div className="days">
                    <div className="day">
                        SUN
                    </div>

                    <div className="weatherImg">
                        <img src="WeatherStatus/cloud.jpg" alt="" className="imgPro"style={{width: "inhert"}}/>
                    </div>

                    <div className="Headertemp">{String(temp - 273.15).slice(0,5)} C</div>
                </div>
                <div className="days">
                    <div className="day">
                        SUN
                    </div>

                    <div className="weatherImg">
                        <img src="WeatherStatus/cloud.jpg" alt="" className="imgPro"style={{width: "inhert"}}/>
                    </div>

                    <div className="Headertemp">{String(temp - 273.15).slice(0,5)} C</div>
                </div>
                <div className="days">
                    <div className="day">
                        SUN
                    </div>

                    <div className="weatherImg">
                        <img src="WeatherStatus/cloud.jpg" alt="" className="imgPro"style={{width: "inhert"}}/>
                    </div>

                    <div className="Headertemp">{String(temp - 273.15).slice(0,5)} C</div>
                </div>
            </div>

        </div>
    )
}

export default All;