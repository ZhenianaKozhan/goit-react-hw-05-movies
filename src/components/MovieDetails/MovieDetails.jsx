import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { MovieAPI } from 'services/api';
import { MovieCard } from './MovieDetails.styled';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { LinkStyled } from '../Header/Header.styled';
import { List } from 'components/Cast/Cast.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [filmCard, setFilmCard] = useState(null);
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    MovieAPI(`/movie/${movieId}`).then(setFilmCard);
  }, [movieId]);

  return (
    <div style={{ padding: 16 }}>
      <LinkStyled to={backLinkLocationRef.current}>
        <IoMdArrowRoundBack /> Go back
      </LinkStyled>
      {filmCard && (
        <MovieCard>
          <img
            src={`https://image.tmdb.org/t/p/w500/${filmCard.poster_path}`}
            alt={filmCard.title}
            width="280"
            height="360"
          />
          <div>
            <h2>{`${filmCard.title} (${filmCard.release_date.slice(
              0,
              4
            )})`}</h2>
            <p>User Score: {(filmCard.vote_average * 10).toFixed(0) + '%'}</p>
            <h4>Overview</h4>
            <p>{filmCard.overview}</p>
            <h4>Genres</h4>
            <p>{filmCard.genres.map(item => item.name).join(' ')}</p>
          </div>
        </MovieCard>
      )}
      <List>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </List>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
