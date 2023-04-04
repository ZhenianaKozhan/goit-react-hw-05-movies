import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MovieAPI } from 'services/api';

const searchURL = '/search/movie';
const trendingURL = '/trending/movie/day';

const MovieList = ({ query }) => {
  const [movieList, setMovieList] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovie(url, query) {
      const { results } = await MovieAPI(url, query);
      setMovieList(results);
    }
    !query ? fetchMovie(trendingURL) : fetchMovie(searchURL, query);
  }, [query]);

  return (
    <ul>
      {movieList?.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
