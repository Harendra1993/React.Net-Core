import React from 'react'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import config from '../../config';

export default function SideMenu() {
    const activeNavIcon = (path) => ({
        style: {
            stroke: window.location.pathname === path ? '#4c75f2' : '',
        },
    });
    return (
        <div className="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                    <Link to="/">
                        <span className="logo-name">{config.app.name}</span>
                    </Link>
                </div>
                <ul className="sidebar-menu">
                    <li className="menu-header">Main</li>
                    <li className="dropdown">
                        <Link to="/" className="nav-link">
                            <Icon.Monitor {...activeNavIcon('/')} className="feather" /><span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="menu-toggle nav-link has-dropdown"><Icon.Briefcase {...activeNavIcon('/')} className="feather" /><span>Widgets</span></a>
                        {/* <ul className="dropdown-menu">
                            <li><a className="nav-link" href="widget-chart.html">Chart Widgets</a></li>
                            <li><a className="nav-link" href="widget-data.html">Data Widgets</a></li>
                        </ul> */}
                        <Dropdown className="dropdown-menu">

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="command" /><span>Apps</span></a>
                        <ul className="dropdown-menu">
                            <li><a className="nav-link" href="chat.html">Chat</a></li>
                            <li><a className="nav-link" href="portfolio.html">Portfolio</a></li>
                            <li><a className="nav-link" href="blog.html">Blog</a></li>
                            <li><a className="nav-link" href="calendar.html">Calendar</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="mail" /><span>Email</span></a>
                        <ul className="dropdown-menu">
                            <li><a className="nav-link" href="email-inbox.html">Inbox</a></li>
                            <li><a className="nav-link" href="email-compose.html">Compose</a></li>
                            <li><a className="nav-link" href="email-read.html">read</a></li>
                        </ul>
                    </li>
                </ul>
            </aside >
        </div >
    )
}
