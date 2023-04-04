import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieAPI } from 'services/api';

const trendingURL = '/trending/movie/day';

export const TrendingMovie = () => {
  const [trendingList, isTrendingList] = useState(null);

  useEffect(() => {
    MovieAPI(trendingURL).then(({ results }) => isTrendingList(results));
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trendingList?.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
