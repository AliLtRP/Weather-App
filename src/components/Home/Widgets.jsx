import "./App.css";
import "./wid.css";

function Wid({ res }) {
  let sunrise = new Date(res.sys.sunrise * 1000);
  let sunset = new Date(res.sys.sunset * 1000);

  let pressure = res.main.pressure;

  const style = {
    transform: `rotate(${res.wind.deg}deg)`,
    marginRight: '10px'
  }

  return (
    <div className="widget">
      <div className="row">
        {/* 1 */}
        <div className="wid">
          <div className="stat">
            <p style={{fontWeight: "200"}} >TEMP LEVEL</p>
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
          <div className="stat">
            <p style={{fontWeight: "200"}}>WIND STATUS</p>
          </div>

          <div className="centerCon">
            <div className="speed">
              <p className="para">{res.wind.speed}</p>
              <p>KM/h</p>
            </div>

            <div className="deg" >
              <img src="sun/arrow-up.svg" alt="" style={style}/>
              {res.wind.deg +"  Deg"}
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="wid">
          <div className="stat">
            <p style={{fontWeight: "200"}}>SUNRISE & SUNSET</p>
          </div>

          <div className="centerCon">
            <div className="sunrise">
              <img src="sun/arrow-up.svg" alt="" />

              <p>
                {(sunrise.getHours() % 12) + ":" + sunrise.getMinutes() + "AM"}
              </p>
            </div>

            <div className="sunset">
              <img src="sun/arrow-down.svg" alt="" />

              <p>
                {(sunset.getHours() % 12) + ":" + sunset.getMinutes() + "PM"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* 4  */}
        <div className="wid">
          <div className="stat">
            <p style={{fontWeight: "200"}}>HUMIDITY</p>
          </div>

          <div className="centerCor">
            <p className="hum">{res.main.humidity + "%"}</p>
          </div>

          <div className="foot">Normal</div>

          <div className="feelWhat"></div>
        </div>

        {/* 5 */}
        <div className="wid">
          <div className="stat">
            <p style={{fontWeight: "200"}}>VISIBILITY</p>
          </div>

          <div className="centerCor">
            <p className="hum">{res.visibility / 1000}</p>
            <p style={{ fontWeight: "bold" }}>KM</p>
          </div>

          <div className="foot">Normal</div>

          <div className="feelWhat"></div>
        </div>

        {/* 6 */}
        <div className="wid">
          <div className="stat">
            <p style={{fontWeight: "200"}}>PRESSURE</p>
          </div>

          <div className="centerCor">
            <p className="hum">{pressure}</p>

            <p style={{ fontWeight: "bold" }}>hPa</p>
          </div>

          <div className="foot">
            {pressure < 1024 && pressure > 980 ? "Normal" : "UnHealthy"}
          </div>

          <div className="feelWhat"></div>
        </div>
      </div>
    </div>
  );
}

export default Wid;
