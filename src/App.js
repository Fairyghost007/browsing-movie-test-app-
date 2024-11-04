// src/App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Deadpool&Wolverine",
      description: "A cyberpunk action classic",
      posterURL: "https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg",
      rating: 5,
    },
    {
      title: "JOKER",
      description: "A mind-bending thriller",
      posterURL: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1669120603.jpg?c=2",
      rating: 4,
    },
    {
      title: "SHREK",
      description: "A funny movie",
      posterURL: "https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547848016060-286BK7E4Y0THATD46Z7A/SHREK+Close.png",
      rating: 4,
    },
    {
      title: "The Super Mario Bros",
      description: "A kids movie",
      posterURL: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/90380/99064/super-mario-bros-2023-advance-style-B-original-movie-poster-us-one-sheet-buy-now-at-starstills__89412.1703695191.jpg?c=2&imbypass=on",
      rating: 3,
    },
    {
      title: "TITANIC",
      description: "A Deeply Emotional Movie",
      posterURL: "https://www.movieposters.com/cdn/shop/products/c104f1bfed20481f35bc96cb9addc940_240x360_crop_center.progressive.jpg?v=1573588574",
      rating: 3,
    },
    {
      title: "INTERSTELLAR",
      description: "A sci-fi movie",
      posterURL: "https://images-cdn.ubuy.co.id/6352289f38bb253c44612d53-interstellar-movie-poster-24-x-36-inches.jpg",
      rating: 5,
    },
    {
      title: "GLADIOTOR",
      description: "A action thriller movie",
      posterURL: "https://rukminim2.flixcart.com/image/850/1000/kyvvtzk0/poster/d/x/8/medium-gladiator-matte-finish-poster-urbanprint6311-original-imagbygdgnhbdj8z.jpeg?q=90&crop=false",
      rating: 4,
    },
    {
      title: "STAR WARS: LE CLONE WARS",
      description: "A sci-fi movie",
      posterURL: "https://img.fruugo.com/product/7/69/50038697_max.jpg",
      rating: 3,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(null);
  const [showAddMoviePopup, setShowAddMoviePopup] = useState(false);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    (filterRating ? movie.rating >= filterRating : true)
  );

  return (
    <div className="w-full mx-auto p-4 h-full bg-darkPurple m-0">
      <h1 className="text-3xl font-bold text-center mb-6 bg-lightPurple p-4 rounded-lg text-darkRose w-full"> Movie List App</h1>
      <div class="flex flex-row justify-between gap-2">
        <div class="w-full">
          <Filter onTitleChange={setFilterTitle} onRatingChange={setFilterRating} />
        </div>
        <div>
          <button
            className=" px-4 py-3 bg-darkRose text-white rounded-md hover:bg-purplle hover:darkRose transition"
            onClick={() => setShowAddMoviePopup(true)}
          >
            Add Movie
          </button>
        </div>   
      </div>
      
      <MovieList movies={filteredMovies} />
      {showAddMoviePopup && (
        <AddMovie onClose={() => setShowAddMoviePopup(false)} onAddMovie={addMovie} />
      )}
    </div>
  );
}

export default App;
