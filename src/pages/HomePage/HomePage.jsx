import { useState, useEffect } from "react";
import axios from "axios"

import Hero from '../../components/Hero'
import TakeCare from '../../components/TakeCare'
import Carousel from '../../components/Carousel/index';
import TopCountries from '../../components/TopCountries/index'
import VideoBlock from '../../components/VideoBlock';
import InfoBlock from '../../components/InfoBlock'

import DestinationCard from '../../components/DestinationCard/index';
import ActivityCard from '../../components/ActivityCard/index';

import "./styles.scss"

export default function HomePage() {

  const [topCities, setTopCities] = useState([]);
  const [topActivities, setTopActivities] = useState([]);

  const getTopCities = async () => {
    const { data: topCities } = await axios.get('https://fe-tui-apiproxy.musement.com/top-cities?limit=10')
    setTopCities(topCities)
  }

  const getTopActivities = async () => {
    const { data: topActivities } = await axios.get('https://fe-tui-apiproxy.musement.com/top-activities?sort_by=-relevance&limit=10')
    setTopActivities(topActivities)
  }

  useEffect(() => {
    getTopCities();
    getTopActivities();
  }, []);

  return (
    <div className="Home">
      <Hero />
      <TakeCare />
      <Carousel title={"TOP DESTINATIONS"} cards={topCities}>
        {topCities.map((card) => (
          <div className="destination_slot" key={card.id}>
            <DestinationCard destination={card} />
          </div>
        ))}
      </Carousel>

      <Carousel title={"TOP ACTIVITIES"} cards={topActivities}>
        {topActivities.map((card, index) => (
          <div className="activity_slot" key={index}>
            <ActivityCard activity={card} />
          </div>
        ))}
      </Carousel>

      <div className="middleSection">
        <VideoBlock />
        <InfoBlock />
      </div>
      <TopCountries />
    </div>
  );
}