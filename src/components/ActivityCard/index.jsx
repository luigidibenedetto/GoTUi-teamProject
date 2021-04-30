import { useSelector } from "react-redux";
import { translateSelector } from '../../utils/translations'
import './style.scss';

function ActivityCard({ activity }) {
  const $t = useSelector(translateSelector)

  return (
    <div className="ActivityCard">
      <a href={activity.url.replace('https://www.gotui.com', '')}>
      
        <div className="card_cover">
          {activity.categories.length > 0 && 
          <span className="cover_label">{(activity.categories[0].name === "TUI collection" || activity.categories[0].name === "PLUS") 
            ? activity.categories[1].name 
            : activity.categories[0].name}
          </span>
        }
          <div className="cover_image-wrapper">
            <img 
              className="image"
              src={activity.cover_image_url}
              alt="city"
            />
          </div>
        </div>

        <div className="card_content">

          {activity.categories.length > 0 
          ? (activity.categories[0].name === "TUI collection" || activity.categories[0].name === "PLUS") 
            && <span className="content_label">{(activity.categories[0].name).toUpperCase() }</span> 
          : null}
          <section className="content_heading">
            <h3 className="heading_title">{activity.title}</h3>
            <p className="heading_description">{activity.description}</p>
          </section>
          
          <section>

            {activity.free_cancellation && 
            <section className="content_cancellation">
              <div className="cancellation_icon">
                <img 
                  className="icon"
                  src="https://tui-b2c-static.imgix.net/icons/free_cancellation.svg"
                  alt={$t("event.free.cancellation")}
                />
              </div>
              <span>{$t("event.free.cancellation")}</span>
            </section>
            } 

            {activity.languages.length !== 0 && 
            <div className="content_languages">
              <span className="flags_basics_label">{$t("common.available")}:</span>
              {activity.languages.map((flag) => (
                <img 
                className="flags_icon" 
                src={`https://tui-b2c-static.imgix.net/icons/lang_${flag.code}.svg`}
                alt={flag.name}
                key={flag.code}
                />
              ))}
            </div>
            }

            <section className="content_bottom">
              <div className="price-wrapper">
                <span className="price-prefix">{$t("common.text.from")}:</span>
                <div>
                  <span className="price">{activity.retail_price.formatted_value}</span>
                </div>
              </div>
            </section>

          </section>
        </div>
      </a>
    </div>
  )
}
export default ActivityCard;