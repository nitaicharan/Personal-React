type ISignInReducer = {
    type: string;
    callback: () => void;
}

const initState = {
    email: 'personalreact@gmail.com',
    password: 'personalreact',
}

export default function reducer(state = initState, action: ISignInReducer) {
    switch (action.type) {
        case '':
            break;
        default:
            break;
    }

    return state;
}