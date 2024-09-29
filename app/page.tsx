'use client'
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import movieRepository from '@/repository/movie.repository';

const HomePage = () => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieRepository.fetchMovies();
      setMovies(response);
    };
    fetchMovies();
  }, []);

  const deleteMovie = async (id: number) => {
    await movieRepository.deleteMovie(id);
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">Movie Reviews</h1>
      <div className="grid grid-cols-3 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onDelete={deleteMovie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
