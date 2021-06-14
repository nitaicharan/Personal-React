import { AnyAction, Reducer } from "redux";
import { PostNewConstants } from "../constants/PostNewConstants";

export interface PostNewState {
    title: string;
    description: string;
    body: string;
    tagList: string;
    login: boolean;
}

const reducer: Reducer<PostNewState, AnyAction> = (state = {} as PostNewState, action: AnyAction): PostNewState => {
    switch (action.type) {
        case PostNewConstants.POSTNEW:
            return { ...state, ...action.payload, login: true };

        case PostNewConstants.POSTNEW_SUCCESS:
            return { ...state, login: false };

        case PostNewConstants.POSTNEW_FAILURE:
            return { ...state, login: false };

        default:
            return state;
    }
};

export default reducer;