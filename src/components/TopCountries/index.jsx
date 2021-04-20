import { useState, useEffect } from 'react';
import axios from "axios"
import DestinationCard from '../DestinationCard/index';

import './style.scss'

function TopCountries({ countries }) {
    const [active, setActive] = useState(0);
    const [ aryCountries, setAryCountries ] = useState([]);

    const TopCountries = countries.map((data, index) => (
        < span className={`countries ${index === active ? "active" : ""}`} onClick={() => { setActive(index) }}> {data.name}</ span >
    ))

    let prova;

    useEffect(() => {
        prova = countries.map((country) => {
            getTopCountries(country.id)
            console.log("COUNTRY", country)
        })  


        async function getTopCountries(id) {
            const {data : eightCountries} = await axios.get(`https://fe-tui-apiproxy.musement.com/top-countries/${id}/cities?limit=8`)
            //const {data : aryCountries} = await axios.get(`https://fe-tui-apiproxy.musement.com/top-countries/161/cities?limit=8`)
        
            setAryCountries(...aryCountries, eightCountries);

    }
    
    }, []);

    setTimeout( 
        console.log("PROVA", prova),
        console.log("attivita spagna", aryCountries)
    
        , 3000);

   

  /*   const topDestinations = countries.map((data, index) => (
        <div className={`destinationsWrap ${index === active ? "toShow" : ""}`}>
            {(aryCountries.map((activity) =>
                <div className="destinations">
                    <DestinationCard destination={activity} />
                </div>
            ))}
        </div>)
    ); */
    

    

    return (
        <div className={'TopCountriesContainer'}>
            <h2> Wohin soll's gehen? </h2>
            <div className={'TabWrapper'}>
                <div className={'TopCountriesList'}>
                    {TopCountries}
                </div>
                <div className={'TopDestinations'}>
               
                </div>
            </div >
        </div>
    );
}

{/*
const topDestinations = countries.map((data, index) => (
    <div className={`destinationsWrap ${index === active ? "toShow" : ""}`}>{(data.destinations.map((activity) =>
        <div className="destinations">
          <DestinationCard destination={activity} />
        </div>
        
    ))}</div>)

);

  {topDestinations} 
{topDestinations}
    */}

export default TopCountries;
