import { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from '../Carousel'
import ActivityCard from '../ActivityCard'
import './style.scss'


function ActivityRelated() {

  const [topActivities, setTopActivities] = useState([]);

  const getTopActivities = async () => {
    const { data: topActivities } = await axios.get('https://fe-tui-apiproxy.musement.com/top-activities?sort_by=-relevance&limit=4')
    setTopActivities(topActivities)
  }

  useEffect(() => {
    getTopActivities();
  }, []);

    return (
      <section className="activity_related">
        <div className="activity_related_body">
          <h2 className="activity_related_title">
           Dies könnte Ihnen ebenfalls gefallen
          </h2>
          <section className="activity_related_carousel">
            <Carousel cards={topActivities} >
              {topActivities.map((card) => (
                <div className="activity_slot">
                  <ActivityCard activity={card} />
                </div>
              ))}
            </Carousel>
          </section>
        </div>
  </section>
    );
}

export default ActivityRelated