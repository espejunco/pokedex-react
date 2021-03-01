import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import 'components/PokemonLink/styles.css';

type Props = {
    name : string;
    image : string;
}

const PokemonLink: FC<Props> = ({name, image}) => {
  return (
    <Link to={`/pokemon/${name}`}>
    <img className="img_link" src={ image } alt="img_link" />
    </Link>

  );
};

export default PokemonLink;
