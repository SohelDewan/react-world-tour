import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));
    },[]) 
    // two parameters in useEffect: one is second parameter, another is callback function
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
           {
            countries.map(country => <Country key={country.cca3} country = {country}></Country>)
           }
        </div>
    );
};

export default Countries;