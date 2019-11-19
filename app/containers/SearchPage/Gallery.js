import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import history from 'utils/history';

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.onClickItem = this.onClickItem.bind(this);
  }

  onClickItem(number) {
    history.push(`/item/${this.props.items[number].id}`);
  }

  render() {
    return (
      <Carousel showThumbs={false} onClickItem={this.onClickItem}>
        {this.props.items.map(item => (
          <div key={item.id}>
            <img src={item.image.full} alt={item.title} />
            <p className="legend">{item.title}</p>
          </div>
        ))}
      </Carousel>
    );
  }
}

Gallery.propTypes = {
  items: PropTypes.array.isRequired,
};
