import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import axios from "axios";
import { translateSelector } from '../../utils/translations'
import TopDestinationsTab from "../TopDestinationsTab/index";

import './style.scss';

function TopCountries() {
  const [active, setActive] = useState(0);
  const [countriesList, setCountriesList] = useState([]);
  const [countryCities, setCountryCities] = useState([]);
  const language = useSelector(state => state.language);
  const $t = useSelector(translateSelector)

  const TopCountries = countriesList.map((data, index) => (
    <span className={`countries ${index === active ? "active" : ""}`} onClick={() => { setActive(index) }} key={data.id}> {data.name}</span>)
  )

  const getCountriesList = async () => {
    const { data: countriesList } = await axios.get('https://fe-tui-apiproxy.musement.com/top-countries', {
      headers: {
        'Accept-Language': `${language}`,
        'x-musement-version': "3.4.0",
      }
    });
    setCountriesList(countriesList);
  }
  

  useEffect(() => {
    Promise.all(countriesList.map((country) => {
      return axios.get(`https://fe-tui-apiproxy.musement.com/top-countries/${country.id}/cities?limit=8`, {
        headers: {
          'Accept-Language': `${language}`,
          'x-musement-version': "3.4.0",
        }
      })
      })
    )
    .then((responses) => {
      const arrayCities= responses.map((response) => response.data)
      setCountryCities(arrayCities)
    });
    // eslint-disable-next-line
  }, [countriesList])

  useEffect(() => {
    getCountriesList();
    // eslint-disable-next-line
  }, [])

  return (
    <div className={'TopCountriesContainer'}>
      <h2> {$t('home.title.find_destinations')} </h2>
      <div className={'TabWrapper'}>
        <div className={'TopCountriesList'}>
          {TopCountries}
        </div>
        <div className={'TopDestinations'}>
          {countryCities.length && <TopDestinationsTab countryCities={countryCities} active={active} />}
        </div>
      </div >
    </div>
  );
}

export default TopCountries;