import {Link} from 'react-router-dom';

function MovieCard({movie}) {
  
  return (
    <article>
        {/* What should go here? */}
        <h2>{movie.title}</h2>
        <Link to={`/movie/${movie.id}`}>View Info</Link>
    </article>
  );
};

export default MovieCard;