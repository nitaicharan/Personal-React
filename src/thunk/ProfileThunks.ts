import { profileFailureAction, profileSuccessAction } from './../actions/ProfileActions';
import { profileAction } from "../actions/ProfileActions";
import { fetchProfile } from "../services/ProfileService";


export const fetchProfileThunk = (username: string) => {
    return (dispatch: any) => {
        dispatch(profileAction({ username }));

        fetchProfile(username)
            .then(({ data }) => dispatch(profileSuccessAction(data.profile)))
            .catch(() => dispatch(profileFailureAction()));
    };
};