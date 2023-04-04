import SearchMovie from 'components/SearchMovie';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  return (
    <>
      <SearchMovie />
      <Outlet />
    </>
  );
};

export default Movies;
