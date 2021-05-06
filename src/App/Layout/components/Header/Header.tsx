import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-light">
                <nav className="container">
                    <a className="navbar-brand" href="/">conduit</a>
                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/login">Sign in</a></li>
                        <li className="nav-item"><a className="nav-link" href="/register">Sign up</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;
