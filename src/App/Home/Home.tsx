import React, { Component } from 'react';
import Banner from './components/Banner/Banner';

export class Home extends Component {
    render() {
        return (
            <main className="home-page">
                <Banner />
            </main>
        )
    }
}

export default Home;
