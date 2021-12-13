import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    // declare a state
    const [countries, setCountries] = useState([]);

    // declare useEffect
    useEffect(() => {
        fetch('https://restcountries.com/v3/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <h1 style={{color: '#f17676', fontSize: '60px', marginTop: '56px', marginBottom: '24px'}}>Rest Countries: {countries.length}!</h1>
            <div className="countries-center">
                {
                    countries.map(country => <Country key={country.name.common} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;