import React from 'react';
import PokemonLink from 'components/PokemonLink';
import gaming from "assets/gaming.svg";
import bullbasaur from "assets/bullbasaur.svg";
import charmander from "assets/charmander.svg";
import squirtle from "assets/squirtle.svg";


import "containers/Home/styles.css";

const Home = () => {
  return (
    <div>
      <img className="pokeball" src={ gaming } alt="img_prin" />
      <h1>Who's that Pokémon?</h1>
        <div className="home_content">
          <PokemonLink image={ bullbasaur } name="bullbasaur" />
          <PokemonLink image={ charmander } name="charmander" />
          <PokemonLink image={ squirtle } name="squirtle" />
        </div>
    </div>
  );
};

export default Home;
