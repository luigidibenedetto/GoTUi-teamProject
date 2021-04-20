import DestinationCard from '../DestinationCard/index' 
 
function TopDestinationsTab({ countryCities, active }) {
    
	return (
		<div className='TopDestinationTab' >
			{countryCities.map((country, index) => (
				<div className={`destinationsWrap ${index === active ? "toShow" : ""}`} key={index}>
					{country.map((destination) =>
					<div className="destinations" key={destination.id}>
						<DestinationCard destination={destination} />
					</div>
					)}
				</div>
			))}
    </div>
  );
}

export default TopDestinationsTab