import All from './AllWeek';
import './App.css';
import Header from './Header';
import Hightlight from './Highlight';
import Wid from './Widgets';

function Home(){

    return(
        <div className='Home'>
            <Header />
            <All />
            <Hightlight />
        </div>
    )
}

export default Home;