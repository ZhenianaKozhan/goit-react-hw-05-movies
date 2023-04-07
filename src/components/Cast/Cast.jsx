import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/api';
import { List } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function loadCast(id) {
      const responce = await getCast(id);
      setCast(responce);
    }
    loadCast(movieId);
  }, [movieId]);

  return (
    <List>
      {cast?.map(({ name, character, profile_path, id }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                : 'https://www.shutterstock.com/image-vector/incognito-icon-browse-private-vector-260nw-1462596698.jpg'
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
