import React, { FC } from 'react';
import PokemonLink from 'components/PokemonLink';
import gaming from "assets/gaming.svg";
import bullbasaur from "assets/bullbasaur.svg";
import charmander from "assets/charmander.svg";
import squirtle from "assets/squirtle.svg";
import { RouteComponentProps } from 'react-router-dom';

import "containers/Home/styles.css";

const Home: FC<RouteComponentProps> = (props) => {
  const preRoute: any = props.location.state;

  return (
    <div>
        <img className="pokeball" src={ gaming } alt="img_prin" />
        <h1 className="tittle">Who's that Pokémon?</h1>
        <div className="home_content">
          <PokemonLink image={ bullbasaur } lastVisited={preRoute.prevPath === "/pokemon/bulbasaur"} name="bulbasaur" />
          <PokemonLink image={ charmander } lastVisited={preRoute.prevPath === "/pokemon/charmander"} name="charmander" />
          <PokemonLink image={ squirtle } lastVisited={preRoute.prevPath === "/pokemon/squirtle"} name="squirtle" />
        </div>
    </div>
  );
};

export default Home;
