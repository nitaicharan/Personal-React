import React, { ChangeEvent, Component, SyntheticEvent } from 'react'
import { connect, MapDispatchToPropsParam, MapStateToPropsParam } from 'react-redux'
import { PostNewState } from '../../../reducers/PostNewReducer'
import { State } from '../../../state'
import { createPostThunk } from '../../../thunk/PostNewThunks'


interface IProps {
    createPost: (post: PostNewState) => void
}

class FormComponent extends Component<IProps & PostNewState, PostNewState> {

    handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log({ ...this.state, [name]: value });
        this.setState({ ...this.state, [name]: value });
    }

    handleSubmit = (event: SyntheticEvent) => {
        this.props.createPost(this.state);
        event.preventDefault();
    }

    render() {
        return (
            // TODO use formik
            <form onSubmit={this.handleSubmit}>
                <fieldset>

                    <fieldset className='form-group'>
                        <input name="title" onChange={e => this.handleChange(e)} defaultValue={this.props.title} className='form-control form-control-lg' type='text' placeholder='Article Title' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input name="description" onChange={e => this.handleChange(e)} defaultValue={this.props.description} className='form-control' type='text' placeholder="What's this article about?" />
                    </fieldset>

                    <fieldset className='form-group'>
                        <textarea name="body" onChange={e => this.handleChange(e)} defaultValue={this.props.body} className='form-control' rows={8} placeholder='Write your article (in markdown)' />
                    </fieldset>

                    <fieldset className='form-group'>
                        <input name="tagList" onChange={e => this.handleChange(e)} defaultValue={this.props.tagList} className='form-control' type='text' placeholder='Enter tags' />
                    </fieldset>

                    {/* TODO add functionality to new post */}
                    <button className='btn btn-lg pull-xs-right btn-primary' type='submit'>Publish Article</button>
                </fieldset>
            </form>
        )
    }
}

const mapStateToProps: MapStateToPropsParam<PostNewState, {}, State> = ({ postNew }) => ({ ...postNew })
const mapDispatchToProps: MapDispatchToPropsParam<IProps, {}> = (dispatch: any) => ({
    createPost: (post: PostNewState) => dispatch(createPostThunk(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
