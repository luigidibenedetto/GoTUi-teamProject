import './style.scss';

function DestinationCard({ destination }) {
  return (
  <div className="DestinationCard">

      <div className="image">
        <img 
        className="image"
        src={destination.cover_image_url}
        alt="city"
        />
      </div>

    <section className="info-wrapper">
      <span className="cityName">{`${destination.name}, ${destination.country.name}`}</span>
      <span className="activityNum">{destination.event_count} attività</span>
    </section>
  </div>
)
}
export default DestinationCard;