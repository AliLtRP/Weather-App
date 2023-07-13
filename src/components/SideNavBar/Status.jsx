import './App.css';

function Status( { weather } ){

    return(
        <div className='status'>
            <div className="statusWrapper">
                
                <div className="weatherStatus">
                    <p>{weather}</p>
                </div>
                
                <div className="locationImg">
                    <img src="/Location/baghdad.jpg" alt="" style={{width: "100%", height: "100%", borderRadius: "20px 20px 20px 20px"}}/>
                </div>

            </div>
        </div>
    )
}

export default Status;