import Carousel from '../components/Carousel/index';
import TopCountries from '../components/TopCountries/index'

import { destinations, activities } from "../utils/static"

export default function HomePage() {
  return (
    <div className="Home">
      <h1>HomePage</h1>
			<Carousel title={"TOP DESTINATIONS"} cards={destinations} selection={"destination"} />
      <Carousel title={"TOP ACTIVITIES"} cards={activities} selection={"activity"} />
      <TopCountries />
		</div>
  );
}