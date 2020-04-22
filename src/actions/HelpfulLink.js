import axios from 'axios';
import * as actionTypes from './actionTypes';

const getsAnError = (message) => {
    return {
        type: actionTypes.SET_ERROR,
        payload: { error: message }
    }
}

const startFetchingNewsHeadlines = () => {
    return {
        type: actionTypes.START_FETCHING_NEWS_HEADLINES
    }
}

const setNewsHeadlines = (news) => {
    return {
        type: actionTypes.SET_NEWS_HEADLINES,
        payload: {
            newsHeadlines: [...news]
        }
    }
}

export const fetchNewsHeadlines = () => {
    return dispatch => {
        dispatch(startFetchingNewsHeadlines())
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=8dd0aa4e6e754abaaaf0240f0821cb39&pageSize=10')
            .then(response => dispatch(setNewsHeadlines(response.data.articles)))
            .catch(error => dispatch(getsAnError(error.message)))
    }
}