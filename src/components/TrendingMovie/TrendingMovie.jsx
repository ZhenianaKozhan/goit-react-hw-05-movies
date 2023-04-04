import MovieList from 'components/MovieList';

const TrendingMovie = () => {
  return (
    <div style={{ padding: 16 }}>
      <h2>Trending today</h2>
      <MovieList />
    </div>
  );
};

export default TrendingMovie;
