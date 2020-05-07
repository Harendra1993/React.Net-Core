import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from "prop-types"

export class Blank extends Component {
    static displayName = Blank.name;

    render() {
        return (
            <div>
                <Container>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}

Blank.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Blank
