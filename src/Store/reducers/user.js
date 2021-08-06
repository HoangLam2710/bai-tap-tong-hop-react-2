import { actionTypes } from "../actions/types";

const initialState = {
    user: null,
    login: false,
    isSignIn: true,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_LOGIN:
            state.login = payload;
            return { ...state };
        case actionTypes.SET_SIGNIN:
            state.isSignIn = payload;
            return { ...state };
        case actionTypes.SET_USER:
            state.user = payload;
            return { ...state };
        default:
            return state;
    }
};

export default reducer;
