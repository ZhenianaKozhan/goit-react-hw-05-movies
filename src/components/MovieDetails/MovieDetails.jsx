import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { MovieAPI } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [filmCard, setFilmCard] = useState(null);
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    MovieAPI(`/movie/${movieId}`).then(setFilmCard);
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {filmCard && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${filmCard.poster_path}`}
            alt={filmCard.title}
          />
          <div>
            <h3>{`${filmCard.title} (${filmCard.release_date.slice(
              0,
              4
            )})`}</h3>
            <p>User Score: {(filmCard.vote_average * 10).toFixed(0) + '%'}</p>
            <h4>Overview</h4>
            <p>{filmCard.overview}</p>
            <h4>Genres</h4>
            <p>{filmCard.genres.map(item => item.name).join(' ')}</p>
          </div>
        </div>
      )}
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">cast</Link>
          </li>
          <li>
            <Link to="reviews">reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
