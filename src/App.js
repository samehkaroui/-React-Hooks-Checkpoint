import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import Navbar from './Navbar';
import './App.css';

const initialMovies = [
  {
    id: 1,
    title: 'Spider-Man',
    description: 'Spider-Man: No Way Home est le 27ème film de l univers cinématographique Marvel entamé en 2008 avec Iron Man et le 4ème de la phase IV, après Black Widow, Shang ...',
    posterURL: 'https://fr.web.img6.acsta.net/c_310_420/pictures/17/05/30/13/13/145510.jpg',
    rating: 9
  },
  {
    id: 2,
    title: 'Blacklight',
    description: 'Blacklight est un film réalisé par Mark Williams (II) avec Liam Neeson, Aidan Quinn.',
    posterURL: 'https://fr.web.img6.acsta.net/c_310_420/pictures/22/01/27/17/27/0656121.jpg',
    rating: 9.5
  },
  {
    id: 3,
    title: 'Code 7500 ',
    description: 'Code 7500 - Un avion en détresse (7500) est un film allemand réalisé par Patrick Vollrath (de), sorti en 2019. Le titre du film fait référence au code de détresse affiché sur le transpondeur d un avion en cas de détournement. Pour plus de détails, voir Fiche technique et Distribution.',
    posterURL: '	https://fr.web.img5.acsta.net/c_310_420/pictures/20/06/11/09/33/5414879.jpg',
    rating: 8
  }
  // Add more initial movies if needed
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  const addMovie = (newMovie) => {
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const filterMovies = (title, rating) => {
    let filtered = movies;
    if (title) {
      filtered = filtered.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (rating) {
      filtered = filtered.filter(movie => movie.rating >= rating);
    }
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <Navbar />
      <h1>Movie App</h1>
      <AddMovie addMovie={addMovie} />
      <Filter onFilter={filterMovies} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
