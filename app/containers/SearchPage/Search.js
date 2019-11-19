import React, { Component } from 'react';

import { Grid, Paper } from '@material-ui/core';

import { apiGet } from 'utils/fetchers';

import Filters from './Filters';
import Gallery from './Gallery';
import List from './List';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(params) {
    apiGet({
      path: '/items',
      params,
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
        <Grid item xs={12}>
          <Paper>
            <Filters onSubmit={this.fetchData} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper>{items.length ? <Gallery items={items} /> : ''}</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper>{items.length ? <List items={items} /> : ''}</Paper>
        </Grid>
      </Grid>
    );
  }
}

export default Search;
