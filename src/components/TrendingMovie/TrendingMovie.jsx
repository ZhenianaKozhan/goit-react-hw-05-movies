import axios from 'axios';
import { useEffect, useState } from 'react';

export const TrendingMovie = () => {
  const [trendingList, isTrendingList] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=1f61c5c3e341d3551f825cc6aeed2125'
      )
      .then(res => isTrendingList(res.data.results));
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {trendingList &&
          trendingList.map(film => <li key={film.id}>{film.title}</li>)}
      </ul>
    </div>
  );
};
