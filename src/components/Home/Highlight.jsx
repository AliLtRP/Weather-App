import './App.css';
import Wid from './Widgets';

function Highlight( {res} ){

    return(
        <div className='hlight'>
            <div className="highlight">
                <h1 style={{display: "inline", height: "auto", width: "80%"}}>Today's Highlights</h1>
            </div>

            <Wid res={res}/>
        </div>
    )
}

export default Highlight;