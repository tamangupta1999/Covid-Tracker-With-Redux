import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './HomeContainer.module.css';

import WorldCasesCard from '../../components/WorldCasesCards/WorldCasesCards';
import Spinner from '../../components/UI/Spinner/Spinner';
import RatioRecoveryGraph from '../../components/RatioRecoveryGraph/RatioRecoveryGraph';
import CountryDetailCard from '../../components/CountryDetailCards/CountryDetailCard';
import WorldGeographicalCard from '../../components/WorldGeographicalCard/WorldGeographicalCard';
import SpreadTrendCard from '../../components/SpreadTrendCard/SpreadTrendCard';
import NewsFeedsCard from '../../components/NewsFeedsCard/NewsFeedsCard';
import LatestTweetsCard from '../../components/LatestTweetsCard/LatestTweetsCard';
import ErrorModel from './../../components/UI/ErrorModel/ErrorModel';

import * as actions from '../../actions/index';

const LiveCasesData = (props) => {
    const { isError, errorMessage, setTopCardData,
        setWorldHisData,
        fetchWorldData, totalCases,
        recovered, activeCases,
        totalDeaths, isLoading,
        fetchAllCountryData, countries,
        fetchWorldHistoricalData, worldHistoricalData,
        fetchCountriesHistoricalData, countriesHistoricalData } = props;

    useEffect(() => {
        fetchWorldData();
        fetchAllCountryData();
        fetchWorldHistoricalData();
        fetchCountriesHistoricalData();
    }, [fetchWorldData, fetchAllCountryData, fetchWorldHistoricalData, fetchCountriesHistoricalData])

    let ratioOfRecoveryCases = (totalCase, recovoredCase) => {
        return (recovoredCase / totalCase) * 100;
    }

    const countryFullData = (countryData) => {
        setTopCardData(countryData);
        let countryHistoricalData = countriesHistoricalData.filter(country => country.country === countryData.country);
        if (countryHistoricalData.length === 0) {
            setWorldHisData({})
        } else {
            setWorldHisData(countryHistoricalData[0].timeline)
        }
    }

    let liveCasesRecord = <Spinner />;
    if (!isLoading) {
        liveCasesRecord = (<WorldCasesCard totalCases={totalCases}
            recovered={recovered}
            activeCase={activeCases}
            totalDeath={totalDeaths} />)
    }

    let spreadTrend =  <Spinner />;
    if (!isLoading ) {
        spreadTrend = <SpreadTrendCard historicalData={worldHistoricalData} />
    }
    let home = isError ? <ErrorModel>{errorMessage}</ErrorModel> :
        <div className={classes.WorldCasesData}>
            <div className={classes.ContainerOne}>
                <div className={classes.FirstRow}>
                    {liveCasesRecord}
                </div>
                <div className={classes.SecondRow}>
                    <CountryDetailCard countries={countries} countryFullData={countryFullData} isLoading={isLoading} />
                    <WorldGeographicalCard />
                </div>
                <div className={classes.ThirdRow}>
                    {spreadTrend}
                    <NewsFeedsCard />
                </div>
            </div>
            <div className={classes.ContainerTwo}>
                <RatioRecoveryGraph ratioOfRecoveryCases={ratioOfRecoveryCases(+totalCases, +recovered)}
                    totalCases={+totalCases / 1000}
                    recovered={+recovered / 1000} />
                <LatestTweetsCard />
            </div>
        </div>
    return home;
}

const mapStateToProps = state => {
    return {
        isError: state.home.isError,
        errorMessage: state.home.errorMessage,
        isLoading: state.home.isLoading,
        totalCases: state.home.combinedData.totalCases,
        recovered: state.home.combinedData.recovered,
        activeCases: state.home.combinedData.activeCases,
        totalDeaths: state.home.combinedData.deaths,
        countries: state.home.countries,
        worldHistoricalData: state.home.worldHistoricalData,
        countriesHistoricalData: state.home.countriesHistoricalData
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setTopCardData: (countryData) => dispatch(actions.setTopCardData(countryData)),
        setWorldHisData: (historicalData) => dispatch(actions.setWorldHisData(historicalData)),
        fetchWorldData: () => dispatch(actions.fetchWorldData()),
        fetchAllCountryData: () => dispatch(actions.fetchAllCountryData()),
        fetchWorldHistoricalData: () => dispatch(actions.fetchWorldHistoricalData()),
        fetchCountriesHistoricalData: () => dispatch(actions.fetchCountriesHistoricalData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveCasesData);