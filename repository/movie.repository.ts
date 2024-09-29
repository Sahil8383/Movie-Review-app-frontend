import axiosClient from '../utils/axiosClient';

interface Movie {
  id: number;
  name: string;
  releaseDate: string;
  averageRating?: number;
}

class MovieRepository {
  private readonly MOVIE_API_URL = '/movies';

  // Fetch all movies
  async fetchMovies(): Promise<Movie[]> {
    try {
      const response = await axiosClient.get(this.MOVIE_API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error; // Re-throw the error to handle it in the calling function
    }
  }

  // Fetch a single movie by ID
  async fetchMovieById(id: number): Promise<Movie> {
    try {
      const response = await axiosClient.get(`${this.MOVIE_API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching movie with ID ${id}:`, error);
      throw error;
    }
  }

  // Create a new movie
  async createMovie(movieData: Omit<Movie, 'id'>): Promise<Movie> {
    try {
      const response = await axiosClient.post(this.MOVIE_API_URL, movieData);
      return response.data;
    } catch (error) {
      console.error('Error creating movie:', error);
      throw error;
    }
  }

  // Update an existing movie by ID
  async updateMovie(id: number, movieData: Partial<Movie>): Promise<Movie> {
    try {
      const response = await axiosClient.put(`${this.MOVIE_API_URL}/${id}`, movieData);
      return response.data;
    } catch (error) {
      console.error(`Error updating movie with ID ${id}:`, error);
      throw error;
    }
  }

  // Delete a movie by ID
  async deleteMovie(id: number): Promise<void> {
    try {
      await axiosClient.delete(`${this.MOVIE_API_URL}/${id}`);
    } catch (error) {
      console.error(`Error deleting movie with ID ${id}:`, error);
      throw error;
    }
  }

  // Fetch reviews for a specific movie
  async fetchReviewsByMovieId(movieId: number): Promise<any[]> {
    try {
      const response = await axiosClient.get(`/reviews/movie?id=${movieId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching reviews for movie with ID ${movieId}:`, error);
      throw error;
    }
  }
}

export default new MovieRepository();
