import React, { Component } from 'react';
import * as Icon from 'react-feather';
import { authenticationService } from '@/services';
//import { Link } from 'react-router-dom';
import './TopMenu.css';

export default class TopMenu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: authenticationService.currentUserValue
    };
  }


  render() {
    const { currentUser } = this.state;

    return (
      <>
        <nav className="navbar navbar-expand-lg main-navbar sticky">
          <div className="form-inline mr-auto">
            <ul className="navbar-nav mr-3">
              <li>
                <a data-toggle="sidebar" className="nav-link nav-link-lg collapse-btn">
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
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width={200} />
                    <button className="btn" type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav navbar-right">
            <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle"><i data-feather="mail" />
              <span className="badge headerBadge1">
                6 </span> </a>
              <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                <div className="dropdown-header">
                  Messages
                <div className="float-right">
                    <a href="#">Mark All As Read</a>
                  </div>
                </div>
                <div className="dropdown-list-content dropdown-list-message">
                  <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar
											text-white"> <img alt="image" src="{require('@/assets/img/users/user-1.png')} " className="rounded-circle" />
                  </span> <span className="dropdown-item-desc"> <span className="message-user">John
                      Deo</span>
                      <span className="time messege-text">Please check your mail !!</span>
                      <span className="time">2 Min Ago</span>
                    </span>
                  </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-2.png" className="rounded-circle" />
                  </span> <span className="dropdown-item-desc"> <span className="message-user">Sarah
                      Smith</span> <span className="time messege-text">Client Requirements</span>
                      <span className="time">2 Days Ago</span>
                    </span>
                  </a>
                </div>
                <div className="dropdown-footer text-center">
                  <a href="#">View All <i className="fas fa-chevron-right" /></a>
                </div>
              </div>
            </li>
            <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg"><i data-feather="bell" className="bell" />
            </a>
              <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                <div className="dropdown-header">
                  Notifications
                <div className="float-right">
                    <a href="#">Mark All As Read</a>
                  </div>
                </div>
                <div className="dropdown-list-content dropdown-list-icons">
                  <a href="#" className="dropdown-item dropdown-item-unread"> <span className="dropdown-item-icon bg-primary text-white"> <i className="fas
												fa-code" />
                  </span> <span className="dropdown-item-desc"> Template update is
                    available now! <span className="time">2 Min
                      Ago</span>
                    </span>
                  </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-info text-white"> <i className="far
												fa-user" />
                  </span> <span className="dropdown-item-desc"> <b>You</b> and <b>Dedik
                      Sugiharto</b> are now friends <span className="time">10 Hours
                      Ago</span>
                    </span>
                  </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-success text-white"> <i className="fas
												fa-check" />
                  </span> <span className="dropdown-item-desc"> <b>Kusnaedi</b> has
                    moved task <b>Fix bug header</b> to <b>Done</b> <span className="time">12
                      Hours
                      Ago</span>
                    </span>
                  </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-danger text-white"> <i className="fas fa-exclamation-triangle" />
                  </span> <span className="dropdown-item-desc"> Low disk space. Let's
                    clean it! <span className="time">17 Hours Ago</span>
                    </span>
                  </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-info text-white"> <i className="fas
												fa-bell" />
                  </span> <span className="dropdown-item-desc"> Welcome to Otika
                    template! <span className="time">Yesterday</span>
                    </span>
                  </a>
                </div>
                <div className="dropdown-footer text-center">
                  <a href="#">View All <i className="fas fa-chevron-right" /></a>
                </div>
              </div>
            </li>
            <li className="dropdown"><a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user"> <img alt="image" src="{require('assets/img/user.png')}" className="user-img-radious-style" /> <span className="d-sm-none d-lg-inline-block" /></a>
              <div className="dropdown-menu dropdown-menu-right pullDown">
                <div className="dropdown-title">Hello {(currentUser) ? currentUser.userName : ''}</div>
                <a href="profile.html" className="dropdown-item has-icon"> <i className="far
										fa-user" /> Profile
              </a> <a href="timeline.html" className="dropdown-item has-icon"> <i className="fas fa-bolt" />
                Activities
              </a> <a href="#" className="dropdown-item has-icon"> <i className="fas fa-cog" />
                Settings
              </a>
                <div className="dropdown-divider" />
                <a href="auth-login.html" className="dropdown-item has-icon text-danger"> <i className="fas fa-sign-out-alt" />
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
