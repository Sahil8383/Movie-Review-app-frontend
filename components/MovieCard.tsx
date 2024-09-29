import Link from 'next/link';
import React from 'react';

interface MovieCardProps {
  movie: { id: number; name: string; releaseDate: string; averageRating?: number };
  onDelete: (id: number) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onDelete }) => {
  const handleDelete = () => {
    onDelete(movie.id);
  };

  return (
    <div className="border p-4">
      <h3>{movie.name}</h3>
      <p>Release Date: {new Date(movie.releaseDate).toLocaleDateString()}</p>
      <p>Average Rating: {movie.averageRating ?? 'No ratings yet'}</p>
      <button className="bg-red-500 text-white px-2 py-1 mt-2" onClick={handleDelete}>
        Delete
      </button>
      <Link href={`/movie/${movie.id}`} className="text-blue-500">View Reviews</Link>
    </div>
  );
};

export default MovieCard;
