import React, { Component } from 'react';

import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Paper,
} from '@material-ui/core';

import { apiGet } from 'utils/fetchers';

import Gallery from './Gallery';

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
    const { items } = this.state;

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Paper>{items.length ? <Gallery items={items} /> : ''}</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper>
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
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Search;
