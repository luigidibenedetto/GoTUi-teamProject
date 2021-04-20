import DestinationCard from '../DestinationCard/index' 
 
function TopDestinationsTab({ countryCities, active }) {
    
    return (
        <div className='TopDestinationTab'>
            {countryCities.map((country, index) =>(
            <div className={`destinationsWrap ${index === active ? "toShow" : ""}`}>
                {country.map(
                    (prova) =>
                    <div className="destinations">
                        <DestinationCard destination={prova} />
                    </div>
                )}
            </div>))}
        </div>
        );
    }

export default TopDestinationsTab