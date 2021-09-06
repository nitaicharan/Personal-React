import React, { Component } from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SettingsState } from '../../reducers/SettingsReducer';
import { State } from '../../state';

interface Props {
    settings: SettingsState
}

class HeaderComponent extends Component<Props> {
    image(image: string) {
        return image || 'https://static.productionready.io/images/smiley-cyrus.jpg';
    }

    render() {
        return (
            <header className="navbar navbar-light">
                <nav className="container">
                    <NavLink to="/" className="navbar-brand">conduit</NavLink>

                    <ul className="nav navbar-nav pull-xs-right">
                        <li className="nav-item"><NavLink exact className="nav-link" to="/">Home</NavLink></li>
                        {
                            this.props.settings?.token &&
                            <>
                                <li className="nav-item"><NavLink className="nav-link ion-compose" to="/new">&nbsp;New Post</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link ion-gear-a" to="/settings">&nbsp;Settings</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to={`/profiles/${this.props.settings.username}`}><img src={this.image(this.props.settings.image)} className="user-pic" alt="profile" /></NavLink></li>
                            </>
                        }
                        {
                            !this.props.settings?.token &&
                            <>
                                <li className="nav-item"><NavLink className="nav-link" to="/signin">Sign In</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="/signup">Sign Up</NavLink></li>
                            </>
                        }
                    </ul>
                </nav>
            </header>
        );
    }
}

const mapStateToProps: MapStateToPropsParam<Props, {}, State> = ({ settings }) => ({ settings })
export default connect<Props, {}, {}, State>(mapStateToProps)(HeaderComponent);
