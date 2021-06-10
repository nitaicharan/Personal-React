import React, { Component } from 'react';

export class BannerComponent extends Component {
    render() {
        return (
            <section className="banner">
                <div className="container">
                    <h1 className="logo-font">conduit</h1>
                    <p>A place to share your knowledge.</p>
                </div>
            </section>
        )
    }
}
