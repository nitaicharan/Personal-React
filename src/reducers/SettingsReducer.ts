import { AnyAction } from "redux";
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
    loading: boolean
}

export default function SettingsReducer(store = {} as SettingsState, action: AnyAction): SettingsState {
    switch (action.type) {
        case SettingsConstants.SETTINGS:
            return { ...store, ...action.payload, loading: true };

        case SettingsConstants.SETTINGS_SUCCESS:
        case SettingsConstants.SETTINGS_FAILURE:
            return { ...store, loading: false };
        default:
            return store;
    }
};
