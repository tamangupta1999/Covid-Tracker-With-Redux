import axios from 'axios';
import * as actionTypes from './actionTypes';

const getsAnError = (message) => {
    return {
        type: actionTypes.SET_ERROR,
        payload :{
            error : message
        }
    }
}

// World Data
const startFetchingTopCardData = () => {
    return {
        type: actionTypes.START_FETCHING_TOP_CARD_DATA
    }
}
export const setTopCardData = (data) => {
    return {
        type: actionTypes.SET_TOP_CARD_DATA,
        payload: {
            totalCases: data.cases,
            recovered: data.recovered,
            activeCases: data.active,
            deaths: data.deaths
        }
    }

}

export const fetchWorldData = () => {
    return dispatch => {
        dispatch(startFetchingTopCardData())
        axios.get('https://corona.lmao.ninja/v2/all')
            .then(response => dispatch(setTopCardData(response.data)))
            .catch(error => dispatch(getsAnError(error.message)))
    }
}

//All Countries Data
const startFetchingAllCountriesData = () => {
    return {
        type: actionTypes.START_FETCHING_ALL_COUNTRY_DATA
    }
}
const setAllCountriesData = (countries) => {
    return {
        type: actionTypes.SET_ALL_COUNTRY_DATA,
        payload: {
            countries: [...countries]
        }
    }
}

export const fetchAllCountryData = () => {
    return dispatch => {
        dispatch(startFetchingAllCountriesData());
        axios.get('https://corona.lmao.ninja/v2/countries')
            .then(response => dispatch(setAllCountriesData(response.data)))
            .catch(error => dispatch(getsAnError(error.message)))
    }
}

// World Historical Data
const startFetchingWorldHisData = () => {
    return {
        type: actionTypes.START_FETCHING_WORLD_HIST_DATA
    }
}
export const setWorldHisData = (historical) => {
    return {
        type: actionTypes.SET_WORLD_HISTORICAL_DATA,
        payload: {
            worldHistoricalData: { ...historical }
        }
    }
}

export const fetchWorldHistoricalData = () => {
    return dispatch => {
        dispatch(startFetchingWorldHisData());
        axios.get('https://corona.lmao.ninja/v2/historical/all')
            .then(response => dispatch(setWorldHisData(response.data)))
            .catch(error => dispatch(getsAnError(error.message)))
    }
}


// All Countries Historical Data

const startFetchingCountriesHistoricalData = () => {
    return {
        type: actionTypes.START_FETCHING_WORLD_HIST_DATA
    }
}
const setCountriesHistoricalData = (historical) => {
    return {
        type: actionTypes.SET_COUNTRIES_HISTORICAL_DATA,
        payload: {
            countriesHistoricalData: [...historical]
        }
    }
}

export const fetchCountriesHistoricalData = () => {
    return dispatch => {
        dispatch(startFetchingCountriesHistoricalData());
        axios.get('https://corona.lmao.ninja/v2/historical')
            .then(response => dispatch(setCountriesHistoricalData(response.data)))
            .catch(error => dispatch(getsAnError(error.message)))
    }
}
