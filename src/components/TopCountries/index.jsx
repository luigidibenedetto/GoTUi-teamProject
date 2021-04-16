import { useState } from 'react';
import './style.scss'
const countries = [
    {
        name: 'Turchia',
        destinations: ['Attività Turchia 1', 'Attività Turchia 2', 'Attività Turchia 3', 'Attività Turchia 4', 'Attività Turchia 5', 'Attività Turchia 6', 'Attività Turchia 7', 'Attività Turchia 8']
    },
    {
        name: 'Spagna',
        destinations: ['Attività Spagna 1', 'Attività Spagna 2', 'Attività Spagna 3', 'Attività Spagna 4', 'Attività Spagna 5', 'Attività Spagna 6', 'Attività Spagna 7', 'Attività Spagna 8']
    },
    {
        name: 'Grecia',
        destinations: ['Attività Grecia 1', 'Attività Grecia 2', 'Attività Grecia 3', 'Attività Grecia 4', 'Attività Grecia 5', 'Attività Grecia 6', 'Attività Grecia 7', 'Attività Grecia 8']
    },
    {
        name: 'Germania',
        destinations: ['Attività Germania 1', 'Attività Germania 2', 'Attività Germania 3', 'Attività Germania 4', 'Attività Germania 5', 'Attività Germania 6', 'Attività Germania 7', 'Attività Germania 8']
    },
    {
        name: 'Egitto',
        destinations: ['Attività Egitto 1', 'Attività Egitto 2', 'Attività Egitto 3', 'Attività Egitto 4', 'Attività Egitto 5', 'Attività Egitto 6', 'Attività Egitto 7', 'Attività Egitto 8']
    }
]

export default () => {

    const [active, setActive] = useState(0);
    const TopCountries = countries.map((data, index) => (
        < span className={`countries ${index === active ? "active" : ""}`} onClick={() => { setActive(index) }}> {`${data.name}`}</ span >
    ))
    const topDestinations = countries.map((data, index) => (
        <div className={`destinationsWrap ${index === active ? "toShow" : ""}`}>{(data.destinations.map((activity) =>
            <div className={`destinations`}> {`${activity}`}</div>
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

