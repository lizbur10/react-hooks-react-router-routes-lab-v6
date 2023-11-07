import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Movie() {
  const params = useParams();
  const [movie, setMovie] = useState({});

  // console.log(params);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${params.id}`)
    .then(resp => resp.json())
    .then(data => setMovie(data))
    .catch(error => console.log(error));
  }, [params.id]);

  // console.log(movie);

  if (!movie.title) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map(genre => <span key={genre}>{genre}</span>)}
      </main>
    </>
  );
};

export default Movie;
