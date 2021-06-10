import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TopNavigationComponent } from './TopNavigation/TopNavigationComponent';

export class LayoutComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        <TopNavigationComponent />
                    </Route>
                </Switch>
            </Router>
        );
    }
}