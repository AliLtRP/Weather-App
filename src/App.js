import './App.css';
import Home from './components/Home/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AboutPage from './components/about/AboutPage';


function App() {
  const [city, setCity] = useState('baghdad');
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [res, setRes] = useState('');

  useEffect(() => {

    const asyncFn = async () => {
      try {
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city} &limit=1&appid=fdfea805c327b7df7d8f8c3ac49bba07`)
          .then(res => {
            setLat(res.data[0].lat);
            setLon(res.data[0].lon);
          })
      } catch (err) {
        console.log(err);
      }
    }

    asyncFn();
  }, [city]);

  useEffect(() => {

    const asyncFn = async () => {
      try {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fdfea805c327b7df7d8f8c3ac49bba07`)
          .then(res => {
            setRes(res.data);
          })
      } catch (err) {
        console.log(err);
      }
    }
    asyncFn();
  }, [lat, lon]);


  return (
    <div className='main'>
        {res ? <Home res={res} lat={lat} lon={lon} city={setCity}/> : null}
    </div>
  );
}

export default App;
