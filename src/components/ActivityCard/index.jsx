import { useSelector } from "react-redux";

import './style.scss';

function ActivityCard({ activity }) {

  const path = useSelector(state => state.path);

  function urlActivity() {
    if (path.length < 6) {
      //console.log("ACTIVITY", activity.url)
      return window.document.URL + "/" + activity.url.split("/")[4] + "/" + activity.url.split("/")[5]

    } else if (activity.url.split("/").length > 5) {
      //console.log("ACTIVITY ELSE", activity.url)
      return window.document.location.origin + "/" + path.split("/")[1] + "/" + activity.url.split("/")[4] + "/" + activity.url.split("/")[5]
    }
  }

  return (
    <div className="ActivityCard">
      <a href={urlActivity()}>
      
        <div className="card_cover">

          <span className="cover_label">{(activity.categories[0].name === "TUI collection" || activity.categories[0].name === "PLUS") 
            ? activity.categories[1].name 
            : activity.categories[0].name}
          </span>

          <div className="cover_image-wrapper">
            <img 
              className="image"
              src={activity.cover_image_url}
              alt="city"
            />
          </div>
        </div>

        <div className="card_content">
          {(activity.categories[0].name === "TUI collection" || activity.categories[0].name === "PLUS") 
            && <span className="content_label">{activity.categories[0].name}</span>}
            
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
                  alt="icon"
                />
              </div>
              <span>Cancellazione gratuita</span>
            </section>
            } 

            {activity.languages.length !== 0 && 
            <div className="content_languages">
              <span className="flags_basics_label">A disposizione:</span>
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
                <span className="price-prefix">A partire da:</span>
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