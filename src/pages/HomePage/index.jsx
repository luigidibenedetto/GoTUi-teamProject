import { useState, useEffect } from "react";
import axios from "axios"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Hero from '../../components/Hero'
import TakeCare from '../../components/TakeCare'
import Carousel from '../../components/Carousel/index';
import TopCountries from '../../components/TopCountries/index'
import VideoBlock from '../../components/VideoBlock';
import InfoBlock from '../../components/InfoBlock'

import DestinationCard from '../../components/DestinationCard/index';
import ActivityCard from '../../components/ActivityCard/index';

import "./style.scss"

export default function HomePage() {
  let { lang } = useParams();

  const [topCities, setTopCities] = useState([]);
  const [topActivities, setTopActivities] = useState([]);
  
  const language = useSelector(state => state.language);
  const currency = useSelector(state => state.currency);

  lang = language; 
  
  const getTopCities = async () => {
    const { data: topCities } = await axios.get('https://fe-tui-apiproxy.musement.com/top-cities?limit=10', {
      headers: {
        'Accept-Language': `${language}`,
        'x-musement-currency': `${currency}`,
      }
    })
    setTopCities(topCities)
  }

  const getTopActivities = async () => {
    const { data: topActivities } = await axios.get('https://fe-tui-apiproxy.musement.com/top-activities?sort_by=-relevance&limit=10', {
      headers: {
        'Accept-Language': `${lang}`,
        'x-musement-currency': `${currency}`,
        'x-musement-version': "3.4.0",
      }
    })
    setTopActivities(topActivities)
  }

  useEffect(() => {
    getTopCities();
    getTopActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, language, currency]);

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