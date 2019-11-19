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
import Wrapper from './Wrapper';

export default function SearchPage() {
  return (
    <Wrapper>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>
              <FormattedMessage {...messages.header} />
            </h1>
          </Grid>
        </Grid>
        <Search />
      </Container>
    </Wrapper>
  );
}
