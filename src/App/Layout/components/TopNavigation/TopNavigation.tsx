import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from '../../../Auth/Auth';
import Home from '../../../Home/Home';
import Header from '../Header/Header';
export class TopNavigation extends Component {
    render() {
        return (
            <Router>
                <Route strict path="/" component={Header} />
                <Route path="/register" component={Auth} />
                <Route path="/login" component={Auth} />
                <Route exact path="/" component={Home} />
            </Router>
        )
    }
}

export default TopNavigation;
