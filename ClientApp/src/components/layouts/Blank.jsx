import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PropTypes from "prop-types"

export class Blank extends Component {
    static displayName = Default.name;

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
