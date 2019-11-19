import React, { Component } from 'react';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
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
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell width="200px">Title</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.items.map(item => (
              <TableRow hover key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default Search;
