import { useSelector } from "react-redux";
import { translateSelector } from '../../utils/translations'
import './style.scss';

function InfoBlock() {
  const $t = useSelector(translateSelector)
  return <div className="benefits__content">
                            <section className="benefits__content__box">
                                <div className="benefits__content__box__icon">
                                    <img src="https://tui-b2c-static.imgix.net/icons/trips_worldwide.svg" alt="home.benefit.trips_worldwide.title" title="" loading="lazy" className="icon" />
                                </div>
                                <div className="benefits__content__box__info">
                                    <span className="benefits__content__box__info__title">
                                        {$t('home.benefit.trips_worldwide.title')}
                                    </span>
                                    <span className="benefits__content__box__info__subtitle">
                                        {$t("home.benefit.trips_worldwide.subtitle")}
                                    </span>
                                </div>
                            </section>
                            <section className="benefits__content__box">
                                <div className="benefits__content__box__icon">
                                    <img src="https://tui-b2c-static.imgix.net/icons/hidden_treasure.svg" alt="home.benefit.hidden_treasures.title" title="" loading="lazy" className="icon" />
                                </div>
                                <div className="benefits__content__box__info">
                                    <span className="benefits__content__box__info__title">
                                        {$t("home.benefit.hidden_treasures.title")}
                                    </span>
                                    <span className="benefits__content__box__info__subtitle">
                                        {$t("home.benefit.hidden_treasures.subtitle")}
                                    </span>
                                </div>
                            </section>
                            <section className="benefits__content__box">
                                <div className="benefits__content__box__icon">
                                    <img src="https://tui-b2c-static.imgix.net/icons/hotel_pickup.svg" alt="home.benefit.pick_up.title" title="" loading="lazy" className="icon" />
                                </div>
                                <div className="benefits__content__box__info">
                                    <span className="benefits__content__box__info__title">
                                        {$t("home.benefit.pick_up.title")}
                                    </span>
                                    <span className="benefits__content__box__info__subtitle">
                                        {$t("home.benefit.pick_up.subtitle")}
                                    </span>
                                </div>
                            </section>
                        </div>
}

export default InfoBlock;