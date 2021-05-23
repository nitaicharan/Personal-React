import React, { Component } from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SettingsState } from '../../reducers/SettingsReducer';
import { State } from '../../store';

type TProps = {
    settings: SettingsState
}

export class Header extends Component<TProps> {
    render() {
        return (
            <header className="navbar navbar-light">
                <nav className="container">
                    <NavLink to="/" className="navbar-brand">conduit</NavLink>

                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item"><NavLink exact className="nav-link" to="/">Home</NavLink></li>
                        {this.props.settings?.id && <li className="nav-item"><NavLink className="nav-link ion-compose" to="/new">&nbsp;New Post</NavLink></li>}
                        {this.props.settings?.id && <li className="nav-item"><NavLink className="nav-link ion-gear-a" to="/settings">&nbsp;Settings</NavLink></li>}
                        {!this.props.settings?.id && <li className="nav-item"><NavLink className="nav-link" to="/signin">Sign In</NavLink></li>}
                        {!this.props.settings?.id && <li className="nav-item"><NavLink className="nav-link" to="/signup">Sign Up</NavLink></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

const mapStateToProps: MapStateToPropsParam<TProps, {}, State> = (store: State) => ({
    settings: store.settings,
})
export default connect<TProps, {}, {}, State>(mapStateToProps)(Header);
