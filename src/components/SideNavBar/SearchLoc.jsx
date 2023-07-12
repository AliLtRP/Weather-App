import { useState } from 'react';
import './App.css';


function Search({ city }){
    const[c, setC] = useState('');
    
    if(c != ''){
        city(c);
    }

    return(
        <div className='search'>
            <form >
                <input value={c} type="text" placeholder='  Enter The City' onChange={e => setC(e.target.value)}/>
            </form>
        </div>
    )
} 

export default Search;