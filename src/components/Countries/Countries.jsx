import { useEffect, useState } from "react";
import Country from "./Country/Country";
import './country-container.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setvisitedCountries] = useState([])
    const [visitedFlag, setvisitedFlag] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all?fields=name,cca2,cca3,idd,flags')
        
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountries = (country) =>{
        console.log('mark as visitedCountries')
        const newVisitedCountry = [...visitedCountries, country]
        setvisitedCountries(newVisitedCountry)
    }
    const handleVisitedFlag = flag =>{
        const newVisitedFlag = [...visitedFlag, flag]
        setvisitedFlag(newVisitedFlag)
    }
    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            <div>
            <h1>Visited : {visitedCountries.length}</h1>
            {
                visitedCountries.map(country => <li>{country.name.common}</li>)
            }
            <div>
            {
                visitedFlag.map(flag => <img src={flag.flags}></img>)
            }
            </div>
            </div>
            <div className="country-container">
                {
                countries.map(country => <Country
                country={country} 
                handleVisitedCountries={() =>handleVisitedCountries(country)}
                handleVisitedFlag ={() => handleVisitedFlag(handleVisitedFlag)}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;