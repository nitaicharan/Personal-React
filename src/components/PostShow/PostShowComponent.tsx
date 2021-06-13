import React, { Component } from 'react';
import { connect, MapDispatchToPropsNonObject } from 'react-redux';
import { State } from '../../state';
import { fetchPostThunk } from '../../thunk/PostShowThunks';
import BannerComponent from './Banner/BannerComponent';
import ContentComponent from './Content/ContentComponent';

interface IProps {
    fetchPost: (slug: string) => void;
}

interface RouteParams {
    match: {
        params: {
            [key: string]: string;
        }
    }
}

export class PostShowComponent extends Component<IProps & RouteParams> {
    componentDidMount() {
        const { slug } = this.props.match.params;
        const { fetchPost } = this.props
        fetchPost(slug);
    }

    render() {
        return (
            <main className="article-page">
                <BannerComponent />
                <div className="container page">
                    <ContentComponent />
                </div>
            </main>
        )
    }
}

const mapDispatchToProps: MapDispatchToPropsNonObject<IProps, {}> = (dispatch: any) => ({
    fetchPost: (slug: string) => dispatch(fetchPostThunk(slug)),
});

export default connect<IProps, {}, {}, State>(null, mapDispatchToProps)(PostShowComponent);
