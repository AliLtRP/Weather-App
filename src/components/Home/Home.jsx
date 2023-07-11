import All from './AllWeek';
import './App.css';
import Header from './Header';
import Hightlight from './Highlight';


function Home( {res} ){

    return(
        <div className='Home'>
            <Header />
            <All temp={res.main.temp}/>
            <Hightlight res={res}/>
        </div>
    )
}

export default Home;