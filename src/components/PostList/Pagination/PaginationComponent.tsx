import { Component } from "react";
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from "react-redux";
import { State } from "../../../state";
import { fetchPostsThunk } from "../../../thunk/PostsPreviewThunks";

interface IProps {
    index: number;
}

interface IStateProps {
    pageIndex: number;
}

interface IDispatchProps {
    goToPage: (index: number) => void;
}

class PaginationComponent extends Component<IProps & IStateProps & IDispatchProps> {
    render() {
        return (
            <li className={`page-item ${this.props.pageIndex === this.props.index && 'active'}`}>
                <a onClick={e => this.props.goToPage(this.props.index)} className="pagination-item"><span className="page-link">{this.props.index}</span></a>
            </li>
        );
    }
}

const mapStateToProps: MapStateToPropsParam<IStateProps, {}, State> = (state: State) => ({
    pageIndex: state.postsPreview.pageIndex ?? 0,
});

const mapDispatchToProps: MapDispatchToPropsParam<IDispatchProps, {}> = (dispatch: any) => ({
    goToPage: (pageIndex: number) => dispatch(fetchPostsThunk({ pageIndex })),
});

export default connect<IStateProps, IDispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(PaginationComponent);
