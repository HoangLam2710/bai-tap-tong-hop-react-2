import { actionTypes } from "../actions/types";

const initialState = {
    movieList: [],
    movieDetail: null,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_MOVIES:
            state.movieList = payload;
            return { ...state };
        case actionTypes.SET_DETAIL_MOVIE:
            state.movieDetail = payload;
            return { ...state };
        default:
            return state;
    }
};

export default reducer;
