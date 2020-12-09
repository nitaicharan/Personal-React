import React, { Component } from 'react';
import Home from '../../../Home/Home';
import Header from '../Header/Header';
export class TopNavigation extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        )
    }
}

export default TopNavigation;
