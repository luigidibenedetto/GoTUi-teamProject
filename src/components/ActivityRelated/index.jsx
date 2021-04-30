import { useSelector } from "react-redux";
import { translateSelector } from '../../utils/translations'
import Carousel from '../Carousel'
import ActivityCard from '../ActivityCard'
import './style.scss'

function ActivityRelated({ topActivities }) {
  const $t = useSelector(translateSelector)

    return (
      <section className="activity_related">
        <div className="activity_related_body">
          <h2 className="activity_related_title">
           {$t('event.card_scroller.related.title')}
          </h2>
          <section className="activity_related_carousel">
            <Carousel cards={topActivities} >
              {topActivities.map((card, index) => (
                <div className="activity_slot" key={index}>
                  <ActivityCard activity={card}  />
                </div>
              ))}
            </Carousel>
          </section>
        </div>
  </section>
    );
}

export default ActivityRelated