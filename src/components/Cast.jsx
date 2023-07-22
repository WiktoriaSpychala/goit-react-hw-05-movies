import { useEffect, useState } from 'react';
import { getMovieCast } from 'Api/Api';
import { useParams } from 'react-router-dom';
import { CastWrapper, CastList, CastItem, CastImg } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }
  return (
    <CastWrapper>
      <CastList>
        {cast.map(actor => (
          <CastItem key={actor.id}>
            <CastImg
              key={actor.id}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : `http://www.suryalaya.org/images/no_image.jpg`
              }
              alt={actor.profile_path}
              loading="lazy"
              width={120}
              height={180}
            />
            {actor.name}
          </CastItem>
        ))}
      </CastList>
    </CastWrapper>
  );
};
