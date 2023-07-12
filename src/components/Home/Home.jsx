import SideNavBar from '../SideNavBar/SideNavBar';
import All from './AllWeek';
import './App.css';
import Header from './Header';
import Hightlight from './Highlight';


function Home( {res, lat, lon, city} ){

    return(
    <>
        <SideNavBar res={res} city={city}/>
        <div className='Home'>
            <Header />
            <All temp={res.main.temp} lat={lat} lon={lon}/>
            <Hightlight res={res}/>
        </div>
        </>
    )
}

export default Home;