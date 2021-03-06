import { AnyAction, Reducer } from "redux";
import { SettingsConstants } from "../constants/SettingsConstants";
import { getSetting } from "../services/LocalStoreService";

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

// TODO fetch previously values saved in local store as initial state
const initialState: SettingsState = getSetting() || {} as SettingsState;

const reducer: Reducer<SettingsState, AnyAction> = (state = initialState, action: AnyAction): SettingsState => {
    switch (action.type) {
        case SettingsConstants.SETTINGS:
            return { ...state, ...action.payload, loading: true };

        case SettingsConstants.SETTINGS_SUCCESS:
        case SettingsConstants.SETTINGS_FAILURE:
            return { ...state, loading: false };

        case SettingsConstants.SAVE:
            return { ...state, loading: true };

        case SettingsConstants.SAVE_SUCCESS:
        case SettingsConstants.SAVE_FAILURE:
            return { ...state, ...action.payload, loading: false };

        case SettingsConstants.LOGOUT:
        case SettingsConstants.LOGOUT_SUCCESS:
        case SettingsConstants.LOGOUT_FAILURE:
            return {} as SettingsState;
        default:
            return state;
    }
};

export default reducer;