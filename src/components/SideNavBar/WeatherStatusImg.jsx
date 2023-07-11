import './App.css';

function Img( { icon } ){

    return(
        <div className='img'>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="" />
        </div>
    )
}

export default Img;