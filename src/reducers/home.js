import * as  actionTypes from './../actions/actionTypes';

const initialState = {
    isError : false,
    errorMessage : '',
    isLoading: true,
    combinedData: {
        totalCases: 0,
        recovered: 0,
        activeCases: 0,
        deaths: 0
    },
    countries: [],
    worldHistoricalData: {},
    countriesHistoricalData: []
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_ERROR : 
            return {
                ...state,
                isError : true,
                errorMessage : action.payload.error
            }
        case actionTypes.START_FETCHING_TOP_CARD_DATA:
            return {
                ...state,
                isloading: true
            }
        case actionTypes.SET_TOP_CARD_DATA:
            return {
                ...state,
                isLoading: false,
                combinedData: {
                    totalCases: action.payload.totalCases,
                    recovered: action.payload.recovered,
                    activeCases: action.payload.activeCases,
                    deaths: action.payload.deaths
                }
            }
        case actionTypes.START_FETCHING_ALL_COUNTRY_DATA:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.SET_ALL_COUNTRY_DATA:
            return {
                ...state,
                countries: [...action.payload.countries],
                isLoading: false
            }
        case actionTypes.START_FETCHING_WORLD_HIST_DATA:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.SET_WORLD_HISTORICAL_DATA:
            return {
                ...state,
                worldHistoricalData : {...action.payload.worldHistoricalData},
                isLoading : false
            }
        case actionTypes.START_FETCHING_COUNTRIES_HIST_DATA :
            return {
                ...state,
                isLoading : true
            }
        case actionTypes.SET_COUNTRIES_HISTORICAL_DATA :
            return {
                ...state,
                countriesHistoricalData : [...action.payload.countriesHistoricalData],
                isLoading : false
            }
        default:
            return state;
    }
}

export default homeReducer;