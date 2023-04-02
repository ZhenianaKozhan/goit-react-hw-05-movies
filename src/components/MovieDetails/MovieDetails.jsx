import { Link } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <>
      <Link to="/movies/:movieId/cast">cast</Link>
      <Link to="/movies/:movieId/reviews">reviews</Link>
    </>
  );
};
