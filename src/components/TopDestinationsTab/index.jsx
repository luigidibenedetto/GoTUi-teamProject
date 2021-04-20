import DestinationCard from '../DestinationCard/index' 
 
function TopDestinationsTab({ countriesList, active }) {
    
    return (
        
            countriesList.map((country, index) =>
            (
            <div className={`destinationsWrap ${index === active ? "toShow" : ""}`}>
                {(country.cities).map(
                    (prova) =>
                    <div className="destinations">
                        <DestinationCard destination={prova} />
                    </div>
                )}
            </div>
            )
            )
        
        );
    }

export default TopDestinationsTab