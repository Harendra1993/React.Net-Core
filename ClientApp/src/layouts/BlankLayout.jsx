import React, { Component } from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

export class BlankLayout extends Component {
  static displayName = BlankLayout.name;

  render() {
    return (
      <div>
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}

BlankLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Blank;
