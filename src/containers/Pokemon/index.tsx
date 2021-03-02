import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import './styles.css';

type Params = { name: string };

type PokemonType = any | null;

type ItemType = {
  slot: number;
  type: {
    name: string;
    url: string;
  }
};

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

      <img className="img_poke" src={pokemon?.sprites.front_default } alt="img_poke" />
      <p>{pokemon?.name}</p>
      <p>Type:  | {pokemon?.types.map((item: ItemType) => <span>{item.type.name} | </span>)}</p>
      <p>Weight: {pokemon?.weight}</p>

      <Link className="link_back" to={{ pathname: "/", state: { prevPath: location.pathname } }}>
        Go back
      </Link>
    </div>
  );
};

export default Pokemon;
