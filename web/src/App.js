import React from 'react';
import './App.css';
import TextSearch from './atoms/TextSearch';
import CurrentWeather from './molecules/CurrentWeather'

function App() {
  return (
    <div className="App">
    <CurrentWeather/>
    <TextSearch placeholder="Write here!"/>
    </div>
  );
}

export default App;
