import { useState } from 'react';
import { useSelector } from "react-redux";
import { translateSelector } from '../../utils/translations'
import './style.scss';

function ActivityContentBody({ data }) {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const $t = useSelector(translateSelector)

  return (<div className="ActivityContentBody">
    <div>
      <section className="content">
        <section className="content__highlights">
          <h2 className="content__highlights__title">{$t('event.block.title.highlights')}</h2>
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
          <h2 className="content__container__title">{$t('event.block.title.expect'  )}</h2>   <div>
            <div>
              <input id="description" type="checkbox" className="readMore__trigger" />
              <div className={descriptionVisible ? 'readMore__description__text__visible' : 'readMore__description__text__hidden'}>
                {data.description}
              </div>
              <label htmlFor="description" className="readMore__description__btn" onClick={() => setDescriptionVisible(!descriptionVisible)}>
                {descriptionVisible ? $t('common.link.read_more') : $t('common.link.read_less')}
              </label>
            </div>
          </div>
        </section>
        <section className="content__fluid">
          <section className="content__fluid__container">
            <h2 className="content__fluid__container__title">{$t('event.block.title.included')}</h2>
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
              {infoVisible ? $t('common.link.read_more') : $t('common.link.read_less')}
              </label>
            </div>
          </div>
        </section>
        <section className="content__fluid">
          <section className="content__fluid__container">
            <div>
              <div>
                <h2 className="refundPolicies__title">
                  {$t('event.block.title.refound_policies')}
                </h2>
                <span>
                  {$t("event.cancellation.fee.cannot_cancel")}
                </span>
              </div>
            </div>
          </section>
        </section>
          <section className="content__container">
          <h2 className="content__container__title">
            {$t('event.block.title.booking_fee')}
          </h2>
          <span>{$t("event.service.without.fee")}</span>
        </section>
      </section>
    </div>
    </div>)

}

export default ActivityContentBody;