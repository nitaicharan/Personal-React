import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-light">
                <nav className="container">
                    <NavLink to="/" className="navbar-brand">conduit</NavLink>

                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item"><NavLink exact className="nav-link" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/login">Sign in</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/register">Sign up</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;
