import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';

function App() {
    const [movies, setMovies] = useLocalStorage('movies', []);
    const [movieName, setMovieName] = useState('');

    const addMovie = () => {
        if (movieName.trim() !== '') {
            setMovies([...movies, movieName.trim()]);
            setMovieName('');
        }
    };

    const removeMovie = (nameToRemove) => {
        setMovies(movies.filter(movie => movie !== nameToRemove));
    };

    return (
        <div>
            <h1>Favorite Movies</h1>

            <input
                type="text"
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                placeholder="Add a new movie"
            />
            <button onClick={addMovie}>Add</button>

            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        {movie}
                        <button onClick={() => removeMovie(movie)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
