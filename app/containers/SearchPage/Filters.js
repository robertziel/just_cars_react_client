import React, { Component } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { Button, TextField } from '@material-ui/core';

import { stringifyParams } from 'utils/fetchers';
import history from 'utils/history';

import messages from './messages';

class Filters extends Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.params = queryString.parse(history.location.search);

    this.state = {
      priceFrom: this.params.price_from,
      priceTo: this.params.price_to,
      title: this.params.title,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const params = {
      price_from: this.state.priceFrom,
      price_to: this.state.priceTo,
      title: this.state.title,
    };

    history.push({
      search: stringifyParams(params),
    });

    this.props.onSubmit(params);
  }

  onSubmit(event) {
    event.preventDefault();

    this.fetchData();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          name="title"
          label={this.props.intl.formatMessage(messages.filterTitle)}
          type="search"
          margin="normal"
          variant="outlined"
          defaultValue={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <TextField
          name="priceFrom"
          label={this.props.intl.formatMessage(messages.filterPriceFrom)}
          type="number"
          margin="normal"
          variant="outlined"
          value={this.state.priceFrom}
          onChange={event => this.setState({ priceFrom: event.target.value })}
        />
        <TextField
          name="priceTo"
          label={this.props.intl.formatMessage(messages.filterPriceTo)}
          type="number"
          margin="normal"
          variant="outlined"
          value={this.state.priceTo}
          onChange={event => this.setState({ priceTo: event.target.value })}
        />
        <Button type="submit">
          <FormattedMessage {...messages.filterButton} />
        </Button>
      </form>
    );
  }
}

Filters.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

export default injectIntl(Filters);
