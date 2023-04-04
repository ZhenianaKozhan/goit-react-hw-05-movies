import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieAPI } from 'services/api';
import { List } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    MovieAPI(`/movie/${movieId}/credits`).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <List>
      {cast?.map(({ name, character, profile_path, id }) => (
        <li key={id}>
          <img
            src={
              profile_path && `https://image.tmdb.org/t/p/w500/${profile_path}`
            }
            alt={name}
            width="80"
            height="120"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </List>
  );
};

export default Cast;
