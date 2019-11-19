import React from 'react';
import PropTypes from 'prop-types';

import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

export default function List(props) {
  const { items } = props;

  return (
    <GridList cellHeight={250} cols={1}>
      {items.map(item => (
        <GridListTile key={item.id}>
          <a href={`/item/${item.id}`}>
            <img src={item.image.search} alt={item.title} />
            <GridListTileBar title={item.title} subtitle={item.price} />
          </a>
        </GridListTile>
      ))}
    </GridList>
  );
}

List.propTypes = {
  items: PropTypes.array.isRequired,
};
