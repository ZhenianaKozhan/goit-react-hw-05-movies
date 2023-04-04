import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieAPI } from 'services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    MovieAPI(`/movie/${movieId}/credits`).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <ul>
      {cast?.map(({ name, character, profile_path, id }) => (
        <li key={id}>
          <img
            src={
              profile_path && `https://image.tmdb.org/t/p/w500/${profile_path}`
            }
            alt={name}
          />
          <p>{name}</p>
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
