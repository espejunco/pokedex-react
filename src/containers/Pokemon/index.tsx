import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import './styles.css';

type Params = { name: string };

type PokemonType = any | null;

const Pokemon = () => {
  const { name } = useParams<Params>();
  const { location } = useHistory();
  const [pokemon, setPokemon] = useState<PokemonType>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log(err));
  }, [name]);

  return (
    <div className="pokemon_container">

      <img src={pokemon?.image} />
      <p>{pokemon?.name}</p>
      <p>Type: {pokemon?.type}</p>
      <p>Weight: {pokemon?.weight}</p>

      <button className="go_back">
        <Link className="link_back" to={{ pathname: "/", state: { prevPath: location.pathname } }}>
          Go back
        </Link>
      </button>
    </div>
  );
};

export default Pokemon;
