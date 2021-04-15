import './DestinationCard.scss';

function DestinationCard() {
  return (
  <div className="DestinationCard">

      <div className="image">
        <img 
        className="image"
        src="https://images.musement.com/cover/0003/14/kos-xl-jpg_header-213784.jpeg?q=70&fit=crop&auto=format&w=280&h=286.70001220703125"
        alt="city"
        />
      </div>

    <section className="info-wrapper">
      <span className="cityName">Città, Nazione</span>
      <span className="activityNum">21 attività</span>
    </section>
  </div>
)
}
export default DestinationCard;