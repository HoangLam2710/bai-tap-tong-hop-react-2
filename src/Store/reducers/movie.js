import { actionTypes } from "../actions/types";

const initialState = {
    movieList: [],
    movieDetail: null,
    page: 1,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_MOVIES:
            state.movieList = payload;
            return { ...state };
        case actionTypes.SET_DETAIL_MOVIE:
            state.movieDetail = payload;
            return { ...state };
        case actionTypes.SET_PAGE:
            state.page = payload;
            return { ...state };
        default:
            return state;
    }
};

export default reducer;
