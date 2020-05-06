import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PropTypes from "prop-types"

import { NavMenu } from '../NavMenu';

export class Default extends Component {
  static displayName = Default.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
