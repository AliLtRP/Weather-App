

function Temp() {

    return (
        <div className="temp">
            <div className="wrapper">
                <div className="degree">
                    <h1 className='h1' style={{ backgroundColor: 'white', fontSize: 62 }}>12</h1>
                </div>

                <div>
                    <img className='i' src="WeatherStatus/celsius-svgrepo-com.svg" alt="" style={{ height: 40, width: 50 }} />
                </div>
            </div>

            <div className="time">
                <h2>Monday</h2>
                <h2 className="clock">,16:00</h2>
            </div>

            <div style={{ width: "100%", height: "50px", display: "flex", justifyContent: "center" }}>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Temp;