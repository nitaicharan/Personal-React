import React, { Component } from 'react'

class ListComponent extends Component {
    render() {
        return (
            <section className="container">
                <div className="row">

                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <div className="articles-toggle">Post Toggle</div>
                        Post
                    </div>

                </div>
            </section>
        )
    }
}

export default ListComponent
