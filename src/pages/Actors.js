import { useEffect, useState } from "react";
import NavBar from '../components/NavBar';

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(resp => resp.json())
    .then(data => setActors(data))
    .catch(error => console.error(error));
  }, [])

  const dispActors = actors.map(actor => {
    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((movie, i) => <li key={i}>{movie}</li>)}
        </ul>
      </article>
    );
  });

  // console.log(dispActors);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {dispActors}
      </main>
    </>
  );
};

export default Actors;
