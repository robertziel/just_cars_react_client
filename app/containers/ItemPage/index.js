/*
 * ItemPage
 *
 * This is the first thing items see of our App, at the '/' route
 *
 */

import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import PropTypes from 'prop-types';

import { apiGet } from 'utils/fetchers';

import {
  Button,
  Container,
  Grid,
  LinearProgress,
  Paper,
} from '@material-ui/core';

import messages from './messages';
import Wrapper from './Wrapper';

export default class ItemPage extends Component {
  constructor(props) {
    super(props);

    this.params = this.props.match.params;

    this.state = {
      item: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    apiGet({
      path: `/items/${this.params.id}`,
      afterSuccess: result => {
        this.setState({
          item: result,
        });
      },
    });
  }

  renderContent() {
    const { item } = this.state;

    if (item) {
      return (
        <Container>
          <Grid item xs={12}>
            <Paper>
              <img src={item.image.full} alt={item.title} />
            </Paper>
            <Paper className="content">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </Paper>
          </Grid>
        </Container>
      );
    }
    return <LinearProgress />;
  }

  render() {
    return (
      <Wrapper>
        <Paper>
          <Button href="/" variant="outlined">
            <FormattedMessage {...messages.back} />
          </Button>
        </Paper>
        {this.renderContent()}
      </Wrapper>
    );
  }
}

ItemPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
