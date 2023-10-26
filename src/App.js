import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('');  

  const handleSearch = async () => {
    if (searchText) {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?i=tt3896198&apikey=REACT_APP_API_KEY`
        );
        console.log('R', response);

        if (response.data) {
          setMovies(response.data);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a movie title"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {movies?.map((movie) => (
              <li key={movie.imdbID}>{movie.Title}</li>
            ))}
      </div>
    </div>
  );
}

export default App;