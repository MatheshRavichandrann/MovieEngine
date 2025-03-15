import React from "react";
import { useEffect } from "react";
import SearchIcon from './search.svg'
import './App.css'

//a895d2b6

const API_URL = 'http://www.omdbapi.com?apikey=a895d2b6'


const App = () => {

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search)
  }

  useEffect(() =>{
    searchMovies('marvel');
  }, [])
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input 
          type="text" 
          placeholder="Search for movies"
          value="Marvel"
          onChange={() => {}}
        />
        <img 
        src={SearchIcon}
        alt="search icon"
        onClick={() => {}} />
      </div>
      <div className="container">
        
      </div>
    </div>
    );
}


export default App;