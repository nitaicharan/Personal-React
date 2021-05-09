type ISignInReducer = {
    type: string;
    callback: () => void;
}

export default function reducer(state = {}, action: ISignInReducer) {
    switch (action.type) {
        case '':

            break;

        default:
            break;
    }

    return state;
}