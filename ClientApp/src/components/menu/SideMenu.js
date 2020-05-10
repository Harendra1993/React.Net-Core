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
                        <a href="#" className="menu-toggle nav-link has-dropdown"><Icon.Briefcase {...activeNavIcon('/')} className="feather" /><span>Actions</span></a>
                        <ul className="dropdown-menu">
                            <li><a className="nav-link" href="widget-chart.html">Upload</a></li>
                            <li><a className="nav-link" href="widget-data.html">Edit</a></li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <a href="#" className="menu-toggle nav-link has-dropdown"><Icon.Activity {...activeNavIcon('/')} className="feather" /><span>Analysis</span></a>
                        <ul className="dropdown-menu">
                            <li><a className="nav-link" href="widget-chart.html">Overall Analysis</a></li>
                            <li><a className="nav-link" href="widget-data.html">Team Chart</a></li>
                            <li><a className="nav-link" href="widget-data.html">Assignment Chart</a></li>
                            <li><a className="nav-link" href="widget-data.html">Scorecard</a></li>
                        </ul>
                    </li>
                </ul>
            </aside >
        </div >
    )
}
