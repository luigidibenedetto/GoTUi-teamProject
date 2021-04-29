import { useState, useEffect } from 'react';
import axios from "axios";
import TopDestinationsTab from "../TopDestinationsTab/index";
import './style.scss';

function TopCountries() {
  const [active, setActive] = useState(0);
  const [countriesList, setCountriesList] = useState([]);
  const [countryCities, setCountryCities] = useState([]);

  const TopCountries = countriesList.map((data, index) => (
    <span className={`countries ${index === active ? "active" : ""}`} onClick={() => { setActive(index) }} key={data.id}> {data.name}</span>)
  )

  const getCountriesList = async () => {
    const { data: countriesList } = await axios.get('https://fe-tui-apiproxy.musement.com/top-countries');
    setCountriesList(countriesList);
  }
  

  useEffect(() => {
    Promise.all(countriesList.map((country) => {
      return axios.get(`https://fe-tui-apiproxy.musement.com/top-countries/${country.id}/cities?limit=8`)
      })
    )
    .then((responses) => {
      const arrayCities= responses.map((response) => response.data)
      setCountryCities(arrayCities)
    });
  }, [countriesList])

  useEffect(() => {
    getCountriesList();
  }, [])

  return (
    <div className={'TopCountriesContainer'}>
      <h2> Wohin soll's gehen? </h2>
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