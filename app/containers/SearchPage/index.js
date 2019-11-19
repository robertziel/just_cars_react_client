/*
 * SearchPage
 *
 * This is the first thing items see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Container, Grid, Paper } from '@material-ui/core';

import Search from './Search';

import messages from './messages';

export default function SearchPage() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper>Gallery</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Search />
        </Grid>
      </Grid>
    </Container>
  );
}
