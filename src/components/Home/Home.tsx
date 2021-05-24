import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import Banner from './Banner/Banner';

class Home extends Component {
    render() {
        return (
            <main className="home-page">
                <Banner />

                <div className="container page">
                    <div className="row">
                        <div className='col-md-9'><Posts /></div>
                        <div className='col-md-3'>Tags</div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Home;
