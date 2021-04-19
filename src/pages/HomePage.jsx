import Hero from '../components/Hero'
import TakeCare from '../components/TakeCare'
import Carousel from '../components/Carousel/index';
import TopCountries from '../components/TopCountries/index'
import VideoBlock from '../components/VideoBlock';
import InfoBlock from '../components/InfoBlock'

import { destinations, activities } from "../utils/static"

export default function HomePage() {
  return (
    <div className="Home">
      <Hero />
      <TakeCare />
			<Carousel title={"TOP DESTINATIONS"} cards={destinations} selection={"destination"} />
      <Carousel title={"TOP ACTIVITIES"} cards={activities} selection={"activity"} />
      <VideoBlock/>
      <InfoBlock />
      <TopCountries />
		</div>
  );
}