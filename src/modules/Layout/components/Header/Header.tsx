import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SettingsState } from '../../../../reducers/SettingsReducer';

type IProps = {
    settings: SettingsState
}

export class Header extends Component<IProps> {
    render() {
        return (
            <header className="navbar navbar-light">
                <nav className="container">
                    <NavLink to="/" className="navbar-brand">conduit</NavLink>

                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item"><NavLink exact className="nav-link" to="/">Home</NavLink></li>
                        {this.props.settings?.id && <li className="nav-item"><NavLink className="nav-link ion-gear-a" to="/settings">&nbsp;Settings</NavLink></li>}
                        {!this.props.settings?.id && <li className="nav-item"><NavLink className="nav-link" to="/signin">Sign In</NavLink></li>}
                        {!this.props.settings?.id && <li className="nav-item"><NavLink className="nav-link" to="/signup">Sign Up</NavLink></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

const mapStateToProps = (state: any) => ({
    settings: state.SettingsReducer,
})
export default connect(mapStateToProps)(Header);
