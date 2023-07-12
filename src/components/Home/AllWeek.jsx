import axios from "axios";
import { useEffect } from "react";



function All({ temp, lat, lon }) {

    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday"];

    useEffect(() => {

        const data = async () => {
            try {
                await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=fdfea805c327b7df7d8f8c3ac49bba07`)
                    .then(res => {
                        console.log(res);
                        res.data.list.map((v, i) => {
                            let temp = v.main.temp;
                            let icon = v.weather[0].icon;
                            let time = new Date(v.dt_txt);

                            if (i % 5 === 0) {
                                localStorage.setItem("temp" + i, String(temp - 273.15).slice(0, 5));
                                localStorage.setItem("icon" + i, icon);
                                localStorage.setItem("time" + i, dayOfWeek[time.getDay()]);
                            }

                        })

                    })
            } catch (err) {
                console.log(err);
            }

        }

        data();
    }, [lat, lon]);

    return (
        <div className="allWeek">
            <div className="wrap">
                <div className="days">
                    <div className="day">
                        {localStorage.getItem("time0")}
                    </div>

                    <div className="weatherImg">
                        <img src={`https://openweathermap.org/img/wn/${localStorage.getItem("icon0")}.png`} alt="" className="imgPro" />
                    </div>

                    <div className="Headertemp">{localStorage.getItem("temp0")} C</div>
                </div>
                <div className="days">
                    <div className="day">
                        {localStorage.getItem("time5")}
                    </div>

                    <div className="weatherImg">
                        <img src={`https://openweathermap.org/img/wn/${localStorage.getItem("icon5")}.png`} alt="" className="imgPro" style={{ width: "inhert" }} />
                    </div>

                    <div className="Headertemp">{localStorage.getItem("temp5")} C</div>
                </div>
                <div className="days">
                    <div className="day">
                        {localStorage.getItem("time15")}
                    </div>

                    <div className="weatherImg">
                        <img src={`https://openweathermap.org/img/wn/${localStorage.getItem("icon15")}.png`} alt="" className="imgPro" style={{ width: "inhert" }} />
                    </div>

                    <div className="Headertemp">{localStorage.getItem("temp15")} C</div>
                </div>
                <div className="days">
                    <div className="day">
                        {localStorage.getItem("time20")}
                    </div>

                    <div className="weatherImg">
                        <img src={`https://openweathermap.org/img/wn/${localStorage.getItem("icon20")}.png`} alt="" className="imgPro" style={{ width: "inhert" }} />
                    </div>

                    <div className="Headertemp">{localStorage.getItem("temp20")} C</div>
                </div>

                <div className="days">
                    <div className="day">
                        {localStorage.getItem("time25")}
                    </div>

                    <div className="weatherImg">
                        <img src={`https://openweathermap.org/img/wn/${localStorage.getItem("icon25")}.png`} alt="" className="imgPro" style={{ width: "inhert" }} />
                    </div>

                    <div className="Headertemp">{localStorage.getItem("temp25")} C</div>
                </div>

                <div className="days">
                    <div className="day">
                        {localStorage.getItem("time30")}
                    </div>

                    <div className="weatherImg">
                        <img src={`https://openweathermap.org/img/wn/${localStorage.getItem("icon30")}.png`} alt="" className="imgPro" style={{ width: "inhert" }} />
                    </div>

                    <div className="Headertemp">{localStorage.getItem("temp30")} C</div>
                </div>
                <div className="days">
                    <div className="day">
                        {localStorage.getItem("time35")}
                    </div>

                    <div className="weatherImg">
                        <img src={`https://openweathermap.org/img/wn/${localStorage.getItem("icon35")}.png`} alt="" className="imgPro" style={{ width: "inhert" }} />
                    </div>

                    <div className="Headertemp">{localStorage.getItem("temp35")} C</div>
                </div>
            </div>

        </div>
    )
}

export default All;