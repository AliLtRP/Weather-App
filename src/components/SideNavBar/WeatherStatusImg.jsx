import './App.css';

function Img( { icon } ){

    return(
        <div className='img'>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} style={{width: "100px", height: "100px"}} alt="" />
        </div>
    )
}

export default Img;