import { List } from 'components/Cast/Cast.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieAPI } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    MovieAPI(`/movie/${movieId}/reviews`).then(({ results }) =>
      setReviews(results)
    );
  }, [movieId]);

  return (
    <List>
      {reviews?.map(({ id, author, content }) => (
        <li key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </li>
      ))}
      {reviews && reviews.length === 0 && (
        <div>We don't have any reviws for this movie</div>
      )}
    </List>
  );
};

export default Reviews;
