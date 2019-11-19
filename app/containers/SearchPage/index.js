/*
 * SearchPage
 *
 * This is the first thing items see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Container, Grid } from '@material-ui/core';

import Search from './Search';

import messages from './messages';

export default function SearchPage() {
  return (
    <Container>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Grid>hello</Grid>
      <Grid>
        <Search />
      </Grid>
    </Container>
  );
}
