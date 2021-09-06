import React, { Component } from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { PostsPreviewState } from '../../reducers/PostsPreviewReducer';
import { State } from '../../state';
import PaginationComponent from './Pagination/PaginationComponent';
import PreviewComponent from './Preview/PreviewComponent';

class PostListComponent extends Component<PostsPreviewState> {
    render() {
        return (
            <>
                {this.props.articles?.map(i => <PreviewComponent key={i.slug} {...i} />)}
                {
                    this.props.articles?.length ?
                        <nav>
                            <ul className="pagination">
                                {Array.from({ length: (this.props?.articlesCount ?? 0) / (this.props?.limit ?? 0) }, (_, i) => i).map(index => <PaginationComponent key={index} index={index} />)}
                            </ul>
                        </nav>
                        :
                        <></>
                }
            </>
        );
    };
}

const mapStateToProps: MapStateToPropsParam<PostsPreviewState, {}, State> = ({ postsPreview }) => ({ ...postsPreview });

export default connect<PostsPreviewState, {}, {}, State>(mapStateToProps)(PostListComponent);