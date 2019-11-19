import React, { Component } from 'react';

import {
  Paper,
  GridList,
  GridListTile,
  GridListTileBar,
} from '@material-ui/core';

import { apiGet } from 'utils/fetchers';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    apiGet({
      path: '/items',
      afterSuccess: result => {
        this.setState({
          items: result.items,
        });
      },
    });
  }

  render() {
    return (
      <Paper>
        <GridList cellHeight={250} cols={1}>
          {this.state.items.map(item => (
            <GridListTile key={item.image}>
              <a href={`/item/${item.id}`}>
                <img src={item.image.search} alt={item.title} />
                <GridListTileBar title={item.title} subtitle={item.price} />
              </a>
            </GridListTile>
          ))}
        </GridList>
      </Paper>
    );
  }
}

export default Search;
