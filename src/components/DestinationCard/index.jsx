import { useSelector } from "react-redux";
import { translateSelector } from '../../utils/translations'
import './style.scss';

function DestinationCard({ destination }) {
  const $t = useSelector(translateSelector)
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
      <span className="activityNum">{$t("common.text.experiences", {
              placeholders: { count: destination.event_count },
            })}</span>
    </section>
  </div>
)
}
export default DestinationCard;