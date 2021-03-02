import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import 'components/PokemonLink/styles.css';

type Props = {
    name : string;
    image : string;
    lastVisited: boolean;
};

const PokemonLink: FC<Props> = ({name, image, lastVisited}) => {
  if (lastVisited) {
    return (
      <NavLink to={`/pokemon/${name}`} className="link_root">
        <img src={image} alt="img_link" className="link_image link_image_visited" />
      </NavLink>
      )
    }


  return (
    <NavLink className="link_root" to={`/pokemon/${name}`}>
      <img className="link_image" src={ image } alt="img_link" />
    </NavLink>

  );
};

export default PokemonLink;
