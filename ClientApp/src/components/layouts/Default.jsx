import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PropTypes from "prop-types"

import { TopMenu, SideMenu } from '../menu';

export class Default extends Component {
  static displayName = Default.name;

  render() {
    return (
      <div class="main-wrapper main-wrapper-1">
        <TopMenu />
        <SideMenu />
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
