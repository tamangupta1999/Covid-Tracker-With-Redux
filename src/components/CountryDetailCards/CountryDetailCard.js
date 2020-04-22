import React, { useState } from 'react';

import classes from './CountryDetailCard.module.css'
import CountryCard from './CountryCard/CountryCard';
import Spinner from './../UI/Spinner/Spinner';
import SearchIcon from './../../assets/Image/Search/searchImg.png';

const CountryDetailCards = (props) => {
    let { countries, isLoading } = props;
    const [search, setSearch] = useState('');
    let countriesResult = <Spinner />;
    if (search.length > 0) {
        let filteredCountry = countries.filter(country => country.country.toLocaleLowerCase() === search.toLocaleLowerCase());
        if (filteredCountry.length === 0) {
            countriesResult = <Spinner/>
        } else {
            countriesResult = (
                filteredCountry.map(country => {
                    return <CountryCard
                        flag={country.countryInfo.flag}
                        country={country.country}
                        totalCases={country.cases / 1000}
                        recovered={country.recovered / 1000}
                        key={country.country}
                        click={() => props.countryFullData(country)}
                    />
                })
            )
        }
    } else {
        if (!isLoading) {
            countriesResult = (
                countries.map(country => {
                    return <CountryCard
                        flag={country.countryInfo.flag}
                        country={country.country}
                        totalCases={country.cases / 1000}
                        recovered={country.recovered / 1000}
                        key={country.country}
                        click={() => props.countryFullData(country)}
                    />
                })
            )
        }
    }
    return (
        <div className={classes.CountryDetailCard}>
            <div className={classes.SearchIcon}>
                <div className={classes.Search}>
                    <input type="text" placeholder="Search" value={search}
                        onChange={event => setSearch(event.target.value)}
                    />
                    <img src={SearchIcon} alt='searchIcon' />
                </div>
            </div>
            <div className={classes.CountriesList}>
                {countriesResult}
            </div>
        </div>
    );
}

export default CountryDetailCards;

