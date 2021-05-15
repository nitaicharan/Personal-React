import { AnyAction, Reducer } from "redux";
import { SettingsConstants } from "../constants/SettingsConstants";

export type SettingsState = {
    bio: string;
    createdAt: Date;
    email: string;
    id: number
    image: string;
    token: string;
    updatedAt: Date;
    username: string;
    loading: boolean;
    password: string;
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