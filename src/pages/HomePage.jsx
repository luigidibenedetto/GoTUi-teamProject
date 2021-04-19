import Carousel from '../components/Carousel/index';
import TopCountries from '../components/TopCountries/index'
import DestinationCard from '../components/DestinationCard';
import ActivityCard from '../components/ActivityCard';
import VideoBlock from '../components/VideoBlock';

import { destinations, activities } from "../utils/static"

export default function HomePage() {
  return (
    <div className="Home">
			<Carousel title={"TOP DESTINATIONS"} cards={destinations} selection={"destination"} />
      <Carousel title={"TOP ACTIVITIES"} cards={activities} selection={"activity"} />
      <DestinationCard />
      <ActivityCard />
      <VideoBlock/>
      <TopCountries />
		</div>
  );
}