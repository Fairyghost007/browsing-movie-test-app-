// src/App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Deadpool&Wolverine",
      description: "A cyberpunk action classic",
      posterURL: "https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg",
      rating: 5,
    },
    {
      title: "Joker",
      description: "A mind-bending thriller",
      posterURL: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1669120603.jpg?c=2",
      rating: 4,
    },
    {
      title: "Shrek",
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
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(null);


  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
    (filterRating ? movie.rating >= filterRating : true)
  );

  return (
    <div className=" w-full mx-auto p-4 h-full bg-darkPurple m-0">
      <h1 className="text-3xl font-bold text-center mb-6 bg-lightPurple p-4 rounded-lg text-darkRose w-full"> Movie List App</h1>
      <Filter onTitleChange={setFilterTitle} onRatingChange={setFilterRating} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
