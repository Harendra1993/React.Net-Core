import React, { Component } from "react";
import * as Icon from "react-feather";
import { authenticationService } from "@/services";

import { withRouter, Link } from "react-router-dom";

import "./TopMenu.css";
import user from "@/assets/img/user.png";

class TopMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue,
    };

    this.logout = this.logout.bind(this);
  }

  logout() {
    authenticationService.logout();
    this.props.history.push("/login");
    window.location.reload();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <>
        <nav className="navbar navbar-expand-lg main-navbar sticky">
          <div className="form-inline mr-auto">
            <ul className="navbar-nav mr-3">
              <li>
                <a
                  href="!#"
                  data-toggle="sidebar"
                  className="nav-link nav-link-lg collapse-btn"
                >
                  <Icon.AlignJustify className="feather" />
                </a>
              </li>
              <li>
                <a className="nav-link nav-link-lg fullscreen-btn">
                  <Icon.Maximize className="feather" />
                </a>
              </li>
              <li>
                <form className="form-inline mr-auto">
                  <div className="search-element">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      data-width={200}
                    />
                    <button className="btn" type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav navbar-right">
            <li className="dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                className="nav-link dropdown-toggle nav-link-lg nav-link-user"
              >
                {" "}
                <img
                  alt="image"
                  src={user}
                  className="user-img-radious-style"
                />{" "}
                <span className="d-sm-none d-lg-inline-block" />
              </a>
              <div className="dropdown-menu dropdown-menu-right pullDown">
                <div className="dropdown-title">
                  Hello {currentUser ? currentUser.userName : ""}
                </div>
                <Link to="/user/profile" className="dropdown-item has-icon">
                  {" "}
                  <i className="far fa-user" /> Profile
                </Link>
                <Link to="/user/activites" className="dropdown-item has-icon">
                  {" "}
                  <i className="far fa-bolt" /> Activities
                </Link>
                <Link to="/user/settings" className="dropdown-item has-icon">
                  {" "}
                  <i className="far fa-cog" /> Settings
                </Link>
                <div className="dropdown-divider" />
                <a
                  onClick={this.logout}
                  className="dropdown-item has-icon text-danger"
                >
                  {" "}
                  <i className="fas fa-sign-out-alt" />
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default withRouter(TopMenu);
