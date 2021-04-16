import './index.scss';

function InfoBlock() {
    return <div class="benefits__content">
                            <section class="benefits__content__box">
                                <div class="benefits__content__box__icon">
                                    <img src="https://tui-b2c-static.imgix.net/icons/trips_worldwide.svg" alt="home.benefit.trips_worldwide.title" title="" loading="lazy" class="icon" />
                                </div>
                                <div class="benefits__content__box__info">
                                    <span class="benefits__content__box__info__title">
                                        Trips worldwide
                                    </span>
                                    <span class="benefits__content__box__info__subtitle">
                                        Experience a full range of holiday sensations, in more than 90 countries
                                    </span>
                                </div>
                            </section>
                            <section class="benefits__content__box">
                                <div class="benefits__content__box__icon">
                                    <img src="https://tui-b2c-static.imgix.net/icons/hidden_treasure.svg" alt="home.benefit.hidden_treasures.title" title="" loading="lazy" class="icon" />
                                </div>
                                <div class="benefits__content__box__info">
                                    <span class="benefits__content__box__info__title">
                                        Hidden treasures
                                    </span>
                                    <span class="benefits__content__box__info__subtitle">
                                        As local experts, we know our way around. Let us guide you to the most beautiful sights.
                                    </span>
                                </div>
                            </section>
                            <section class="benefits__content__box">
                                <div class="benefits__content__box__icon">
                                    <img src="https://tui-b2c-static.imgix.net/icons/hotel_pickup.svg" alt="home.benefit.pick_up.title" title="" loading="lazy" class="icon" />
                                </div>
                                <div class="benefits__content__box__info">
                                    <span class="benefits__content__box__info__title">
                                        Pick-up at your Hotel
                                    </span>
                                    <span class="benefits__content__box__info__subtitle">
                                        You'll be picked up by our team at your hotel and taken on your excursion.
                                    </span>
                                </div>
                            </section>
                        </div>
}

export default InfoBlock;