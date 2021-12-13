import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, flags, capital, region, subregion } = props.country;
    return (
            <div className="country bg-dark">
                <h3>Country name: {name.common}</h3>
                <img src={flags[1]} alt="" />
                <p>Official name: {name.official}</p>
                <p>Capital: {capital}</p>
                <p>Region: {region}</p>
                <p>Sub-region: {subregion}</p>
                <button type="button" class="btn btn-outline-light">Details</button>
            </div>
    );
};

export default Country;