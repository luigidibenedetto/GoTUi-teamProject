import './style.scss';

function DestinationCard({ destination }) {
  return (
  <div className="DestinationCard">

      <div className="image">
        <img 
        className="image"
        src={destination.image}
        alt="city"
        />
      </div>

    <section className="info-wrapper">
      <span className="cityName">{destination.name}</span>
      <span className="activityNum">{destination.activity}</span>
    </section>
  </div>
)
}
export default DestinationCard;