import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNavigation from './components/TopNavigation/TopNavigation';

export class Layout extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        <TopNavigation />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Layout;
