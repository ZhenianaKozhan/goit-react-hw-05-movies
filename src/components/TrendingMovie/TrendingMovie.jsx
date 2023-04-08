import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrending } from 'services/api';

const TrendingMovie = () => {
  const [trendingList, setTrendingList] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fetchTrendMovie() {
      const results = await getTrending();
      setTrendingList(results);
    }
    fetchTrendMovie();
  }, []);

  return (
    <div style={{ padding: 16 }}>
      <h2>Trending today</h2>
      <ul>
        {trendingList?.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingMovie;
