/*
 * SearchPage Messages
 *
 * This contains all the text for the SearchPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SearchPage';

export default defineMessages({
  filterButton: {
    id: `${scope}.filterButton`,
    defaultMessage: 'Search',
  },
  filterPriceTo: {
    id: `${scope}.priceTo`,
    defaultMessage: 'Price to',
  },
  filterPriceFrom: {
    id: `${scope}.priceFrom`,
    defaultMessage: 'Price from',
  },
  filterTitle: {
    id: `${scope}.filterTitle`,
    defaultMessage: 'Title',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'JustCars! - Search page',
  },
});
