import React, { Component } from "react";
import PropTypes from "prop-types";

import { TopMenu, SideMenu } from "../components/menu";

export class DefaultLayout extends Component {
  static displayName = DefaultLayout.name;

  render(props) {
    return (
      <div className="main-wrapper main-wrapper-1">
        <TopMenu />
        <SideMenu />
        <div className="main-content" style={{ minHeight: "356px" }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
