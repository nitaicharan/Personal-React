import { AnyAction, Reducer } from "redux";
import { SettingsConstants } from "../constants/SettingsConstants";
import { Post } from "../models/Post";

export type SettingsState = {
    posts: Post[]
    loading: false;
}

const reducer: Reducer<SettingsState, AnyAction> = (state = {} as SettingsState, action: AnyAction): SettingsState => {
    switch (action.type) {
        case SettingsConstants.SETTINGS:
            return { ...state, ...action.payload, loading: true };

        case SettingsConstants.SETTINGS_SUCCESS:
        case SettingsConstants.SETTINGS_FAILURE:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default reducer;