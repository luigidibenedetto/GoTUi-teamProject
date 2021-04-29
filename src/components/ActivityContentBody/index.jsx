import { useState } from 'react';
import './style.scss';


function ActivityContentBody({ data }) {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  return (<div className="ActivityContentBody">
    <div>
      <section className="content">
        <section className="content__highlights">
          <h2 className="content__highlights__title">Highlights</h2>
          <div>
            <ul className="list">
              {data.highlights.map((highlight, index) => <li className="list__row" key={index}>
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
                {data.description}
              </div>
              <label htmlFor="description" className="readMore__description__btn" onClick={() => setDescriptionVisible(!descriptionVisible)}>
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
                {data.included.map((inclusion, index) => <li className="list__row" key={index}>
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
                : "readMore__info__text__hidden"} dangerouslySetInnerHTML={{ __html: data.info }}>
              </div>
              <label htmlFor="info" className="readMore__info__btn" 
              onClick={() => setInfoVisible(!infoVisible)}> 
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
            <div>{data.supplier.company_name}</div>
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
    </div>
    </div>)

}

export default ActivityContentBody;