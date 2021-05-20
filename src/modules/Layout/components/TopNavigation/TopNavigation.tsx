import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from '../../../Container/Container';
import Home from '../../../Home/Home';
import Header from '../Header/Header';
export class TopNavigation extends Component {
    render() {
        return (
            <Router>
                <Route strict path="/" component={Header} />
                <Route path="/signup" component={Container} />
                <Route path="/signin" component={Container} />
                <Route exact path="/" component={Home} />
            </Router>
        )
    }
}

export default TopNavigation;
