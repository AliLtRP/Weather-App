import All from './AllWeek';
import './App.css';
import Header from './Header';
import Hightlight from './Highlight';


function Home( {res, lat, lon} ){

    return(
        <div className='Home'>
            <Header />
            <All temp={res.main.temp} lat={lat} lon={lon}/>
            <Hightlight res={res}/>
        </div>
    )
}

export default Home;