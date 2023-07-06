

function Temp(){

    return(
        <div className="temp">
            <div className="degree">
                <h1 className='h1'style={{backgroundColor: 'white', fontSize: 62}}>12</h1>
                <img className='i' src="WeatherStatus/celsius-svgrepo-com.svg" alt="" style={{height: 40, width: 50, backgroundColor: 'white'}} />
            </div>
           
            <div className="time">
                <h2>Monday</h2>
                <p>, 16:00</p>
            </div>

            <div style={{width: "100%", height: "50px", display: "flex", justifyContent: "center"}}>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Temp;