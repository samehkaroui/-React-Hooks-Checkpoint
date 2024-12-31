import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovie from "./AddMovie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import MovieDescription from "./description";


const initialMovies = [
  {
    id: 1,
    title: "Spider-Man",
    description:
      "Spider-Man: No Way Home est le 27ème film de l univers cinématographique Marvel entamé en 2008 avec Iron Man et le 4ème de la phase IV, après Black Widow, Shang ...",
    posterURL:
      "https://fr.web.img6.acsta.net/c_310_420/pictures/17/05/30/13/13/145510.jpg",
    rating: 9,
  },
  {
    id: 2,
    title: "Blacklight",
    description:
      "Blacklight est un film réalisé par Mark Williams (II) avec Liam Neeson, Aidan Quinn.",
    posterURL:
      "https://fr.web.img6.acsta.net/c_310_420/pictures/22/01/27/17/27/0656121.jpg",
    rating: 9.5,
  },
  {
    id: 3,
    title: "Code 7500 ",
    description:
      "Code 7500 - Un avion en détresse (7500) est un film allemand réalisé par Patrick Vollrath (de), sorti en 2019. Le titre du film fait référence au code de détresse affiché sur le transpondeur d un avion en cas de détournement. Pour plus de détails, voir Fiche technique et Distribution.",
    posterURL:
      "https://fr.web.img5.acsta.net/c_310_420/pictures/20/06/11/09/33/5414879.jpg",
    rating: 8,
  },
  {
    id: 4,
    title: "Le Tombeau des lucioles",
    description:
      "L'histoire tragique de l'adolescent Seita, de sa jeune sœur Setsuko et des luttes qu'ils mènent pour survivre au Japon de la Seconde Guerre Mondiale....",
    trailerLink: "https://youtu.be/1V_T8qkddUQ?si=PnTe42ftebPFdI24",
    posterURL:"	https://media.senscritique.com/media/000020033931/300/le_tombeau_des_lucioles.jpg",
    rating: 8.2,

  },
  {
    id: 5,
    title: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality...",
    trailerLink: "https://www.youtube.com/embed/vKQi3bBA1y8",
    posterURL: "https://media.senscritique.com/media/000021915685/300/matrix.png",
    rating: 7.8,

  },

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
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    if (rating) {
      filtered = filtered.filter((movie) => movie.rating >= rating);
    }
    setFilteredMovies(filtered);
  };

  return (
    <Router>
      <div className="App">
      <Navbar />
        <header className="App-header">
          <h1>Movie List</h1>
        </header>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Filter onFilter={filterMovies} />
                <AddMovie addMovie={addMovie} />
                <MovieList
                  movies={filteredMovies.length ? filteredMovies : movies}
                />
              </div>
            }
          />
          <Route
            path="/movie/:id"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
