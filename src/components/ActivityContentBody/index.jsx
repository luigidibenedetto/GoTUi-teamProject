import { useState } from 'react';
import './style.scss';
import { useEffect } from 'react';
import axios from "axios"


function ActivityContentBody({ uuid }) {

  const [descriptionVisible, setDescription] = useState(false);
  const [infoVisible, setInfo] = useState(false);
  const [activities, setActivities] = useState([]);
  const [activitiesTax, setActivitiesTax] = useState([]);
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);

  const getActivities = async () => {
    const { data: activities } = await axios.get(`https://fe-tui-apiproxy.musement.com/activities/${uuid}`, {
      headers: {
        'Accept-Language': `de-DE`,
        'x-musement-version': "3.4.0",
      }
    });
    setActivities(activities);
    setLoaded1(true)
  }

  const getActivitiesTax = async () => {
    const { data: activities_tax } = await axios.get(`https://fe-tui-apiproxy.musement.com/activities/2fd6d149-4e02-4021-ae4a-45cf0dc385bd/taxonomies`, {
      headers: {
        'Accept-Language': `de-DE`,
        'x-musement-version': "3.4.0",
      }
    });
    setActivitiesTax(activities_tax);
    setLoaded2(true)
  }

  useEffect(() => {
    getActivities();
    getActivitiesTax();
  }, []);

  function ShowMoreLess(stateVariable, stateFunction) {

    if (stateVariable) {
      stateFunction(false);
    }

    else {
      stateFunction(true);
    }

  }


  return (<div className="ActivityContentBody">
    {loaded1 && loaded2 && <div>
      <section className="content">
        <section className="content__highlights">
          <h2 className="content__highlights__title">Highlights</h2>
          <div>
            <ul className="list">
              {console.log(activities)}
              {activities.highlights.map((highlight, index) => <li className="list__row" key={index}>
                <span className="content__highlights__icon">
                </span>
                <span className="list__row__item">{highlight}
                </span>
              </li>)}
            </ul>
          </div>
        </section>
        <section className="content__container">
          <h2 className="content__container__title">Beschreibung</h2>   <div>
            <div>
              <input id="description" type="checkbox" className="readMore__trigger" />
              <div className={descriptionVisible ? 'readMore__description__text__visible' : 'readMore__description__text__hidden'}>
                {activities.description}
              </div>
              <label htmlFor="description" className="readMore__description__btn" onClick={() => ShowMoreLess(descriptionVisible, setDescription)}>
                {descriptionVisible ? 'Weniger anzeigen' : 'Mehr erfahren'}
              </label>
            </div>
          </div>
        </section>
        <section className="content__fluid">
          <section className="content__fluid__container">
            <h2 className="content__fluid__container__title">Inbegriffen</h2>
            <div>
              <ul className="list">
                {activities.included.map((inclusion, index) => <li className="list__row" key={index}>
                  <div className="content__fluid__container__icon">
                    <img src="https://tui-b2c-static.imgix.net/icons/flag.svg" alt="included flag" title="" loading="lazy" className="icon" />
                  </div>
                  <span className="list__row__item">{inclusion}</span>
                </li>)}
              </ul>
            </div>
          </section>
        </section>
        <section className="content__fluid"></section>
        <section className="content__container">
          <h2 className="content__container__title">
            Wichtig zu wissen
                    </h2>
          <div>
            <div>
              <input id="info" type="checkbox" className="readMore__trigger" />
              <div className={infoVisible 
                ? "readMore__info__text__visible" 
                : "readMore__info__text__hidden"}>
                {activities.info}
              </div>
              <label htmlFor="info" className="readMore__info__btn" 
              onClick={() => ShowMoreLess(infoVisible, setInfo)}> 
              {infoVisible ? 'Weniger anzeigen' : 'Mehr erfahren'}
              </label>
            </div>
          </div>
        </section>
        <section className="content__fluid">
          <section className="content__fluid__container">
            <div>
              <div>
                <h2 className="refundPolicies__title">
                  Stornierungsbedingungen
                </h2>
                <span>
                  Sie erhalten eine Erstattung in Höhe von 100%, wenn Sie bis zu 1 Tag vor Ihrem Erlebnis stornieren.
                </span>
              </div>
            </div>
          </section>
          <section className="content__fluid__container">
            <h2 className="content__fluid__container__title">
              Anbieter
            </h2>
            <div>{activities.supplier.company_name}</div>
          </section>
        </section>
        <section className="content__fluid"></section>
        <section className="content__container">
          <h2 className="content__container__title">
            Buchungsgebühr
          </h2>
          <span>Für diese Buchung fallen keine zusätzlichen Kosten an.</span>
        </section>
      </section>
    </div>}
    </div>)

}

export default ActivityContentBody;