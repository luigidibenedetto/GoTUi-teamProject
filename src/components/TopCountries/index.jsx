import { useState } from 'react';
import DestinationCard from '../DestinationCard/index';

import './style.scss'

function TopCountries({ countries, children }) {
    const [active, setActive] = useState(0);

    const TopCountries = countries.map((data, index) => (
        < span className={`countries ${index === active ? "active" : ""}`} onClick={() => { setActive(index) }}> {`${data.name}`}</ span >
    ))

    const topDestinations = countries.map((data, index) => (
        <div className={`destinationsWrap ${index === active ? "toShow" : ""}`}>{(data.destinations.map((activity) =>
            <div className="destinations">
                <DestinationCard destination={activity} />
            </div>
            
        ))}</div>)

    );
    return (
        <div className={'TopCountriesContainer'}>
            <h2> Wohin soll's gehen? </h2>
            <div className={'TabWrapper'}>
                <div className={'TopCountriesList'}>
                    {TopCountries}
                </div>
                <div className={'TopDestinations'}>
                    {topDestinations}
                </div>
            </div >
        </div>
    );
}

export default TopCountries;
