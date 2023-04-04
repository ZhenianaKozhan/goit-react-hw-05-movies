// import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { Outlet } from 'react-router-dom';

export const Movies = () => {
  return (
    <>
      <SearchMovie />
      <Outlet />
    </>
  );
};
