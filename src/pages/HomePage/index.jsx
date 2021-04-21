import Hero from '../../components/Hero'
import TakeCare from '../../components/TakeCare'
import Carousel from '../../components/Carousel/index';
import TopCountries from '../../components/TopCountries/index'
import VideoBlock from '../../components/VideoBlock';
import InfoBlock from '../../components/InfoBlock'

import DestinationCard from '../../components/DestinationCard/index';
import ActivityCard from '../../components/ActivityCard/index';

import "./styles.scss"

import { destinations, activities, countries } from "../../utils/static"

export default function HomePage() {
  return (
    <div className="Home">
      <Hero />
      <TakeCare />
      <Carousel title={"TOP DESTINATIONS"} cards={destinations}>
        {destinations.map((card) => (
          <div className="destination_slot">
            <DestinationCard destination={card} />
          </div>
        ))}
      </Carousel>

      <Carousel title={"TOP ACTIVITIES"} cards={activities}>
        {activities.map((card) => (
          <div className="activity_slot">
            <ActivityCard activity={card} />
          </div>
        ))}
      </Carousel>

      <div className="middleSection">
        <VideoBlock />
        <InfoBlock />
      </div>
      <TopCountries countries={countries} />
		</div>
  );
}