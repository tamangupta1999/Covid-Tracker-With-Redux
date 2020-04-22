import * as actionTypes from './../actions/actionTypes';

const initialState = {
    newsHeadlines: [],
    isLoading: true
}

const helpfulReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_FETCHING_NEWS_HEADLINES:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.SET_NEWS_HEADLINES:
            return {
                ...state,
                isLoading: false,
                newsHeadlines: [...action.payload.newsHeadlines]
            }
        default:
            return state;
    }
}

export default helpfulReducer;