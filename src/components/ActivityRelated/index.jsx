import Carousel from '../Carousel'
import ActivityCard from '../ActivityCard'
import './style.scss'

function ActivityRelated({ topActivities }) {

    return (
      <section className="activity_related">
        <div className="activity_related_body">
          <h2 className="activity_related_title">
           Dies könnte Ihnen ebenfalls gefallen
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