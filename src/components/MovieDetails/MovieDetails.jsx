import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieAPI } from 'services/api';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmCard, isFilmCard] = useState(null);

  useEffect(() => {
    MovieAPI(`/movie/${movieId}`).then(isFilmCard);
  }, [movieId]);

  return (
    <>
      {filmCard && (
        <div>
          <img src={filmCard.poster_path} alt={filmCard.title} />
          <div>
            <h3>{`${filmCard.title} (${filmCard.release_date.slice(
              0,
              4
            )})`}</h3>
            <p></p>
            <p></p>
          </div>
        </div>
      )}
      {/* <Link to="/movies/:movieId/cast">cast</Link>
      <Link to="/movies/:movieId/reviews">reviews</Link> */}
    </>
  );
};
