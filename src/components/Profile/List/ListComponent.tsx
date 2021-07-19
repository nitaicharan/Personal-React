import React, { Component } from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { State } from '../../../state';

interface IProps {
    username: string
}
class ListComponent extends Component<IProps & RouteComponentProps> {
    render() {
        return (
            <section className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <div className="articles-toggle">
                            <ul className="nav nav-pills outline-active">
                                <li className="nav-item">
                                    <NavLink exact to={`${this.props.match.url}`} className="nav-link">Articles</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={`${this.props.match.url}/favorites`} className="nav-link">Favorited Articles</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps: MapStateToPropsParam<IProps, {}, State> = ({ settings }) => ({ username: settings.username })
export default withRouter(connect<IProps, {}, {}, State>(mapStateToProps)(ListComponent));