'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import MovieReviews from '../../../components/MovieReviews';
import movieRepository from '@/repository/movie.repository';

const MoviePage = () => {

  const { id } = useParams();

  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const fetchMovie = async () => {
      if (id && typeof id === 'string') {
        const movieId = parseInt(id, 10); 
        console.log(movieId)
        const response = await movieRepository.fetchMovieById(movieId);
        setMovie(response);
        setLoading(false);
        console.log(response)
      }
    };
    fetchMovie();
    setLoading(false);
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">{movie?.name}</h1>
      <p>Release Date: {new Date(movie?.releaseDate).toLocaleDateString()}</p>
      <MovieReviews reviews={movie?.reviews} averageRating={movie?.averageRating} />
    </div>
  );
};

export default MoviePage;
