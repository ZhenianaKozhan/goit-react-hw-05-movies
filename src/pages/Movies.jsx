import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <>
      <div>Movies</div>
      <MovieDetails />
      <Outlet />
    </>
  );
};
