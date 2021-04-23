import './style.scss';
import calendar_icon from './../../Assets/images/calendar_icon.svg'

export default function ActivityContentHead() {
    return(
        <div className='ActivityContentHead'>
            <section class="categories">
                <span class="categories__label">Ausflüge &amp; Tagestouren</span>
                <span class="categories__label">Kultur &amp; Geschichte</span>
                <span class="categories__label">Must-Sees</span> 
                <div class="tuiCategories_collection">
                    <span class="tuiCategories_collection__label">TUI COLLECTION</span>
                </div>
            </section>

            <header>
                <section class="header__container">
                    <h1 class="title__h1">Nysiros Spezial</h1>
                </section> 
            </header>

            <section class="info">

                <div class="info__container">
                    <div class="info__container__row">
                        <div data-test="activity-info__free_cancellation" class="free_cancellation_container">
                            <span class="icon">
                                <img src={calendar_icon} alt="Calendar icon" />
                            </span> 
                            <span class="info__free_cancellation">Kostenlose Stornierung</span>
                        </div>
                    </div>

                    <div class="info__container__row">
                        <div class="info__container__row__icon">
                            <img src="https://tui-b2c-static.imgix.net/icons/marker_place.svg" alt="place" title="" loading="lazy" class="icon" />
                        </div> 
                        <div>
                            <span class="info__container__row__label">Ort:</span> 
                            <span>Kos</span>
                        </div>
                    </div>

                    <div class="info__container__row">
                        <div class="duration">
                            <div class="duration__theme_activity_info__icon">
                                <img src="https://tui-b2c-static.imgix.net/icons/duration.svg" alt="Dauer" title="" loading="lazy" class="icon" />
                            </div> 
                            <div class="duration__theme_activity_info__features">
                                <span>Dauer</span>
                                <span>länger als 8 Stunden</span>
                            </div>
                        </div>
                    </div>

                    <div class="info__container__row">
                        <div class="info__container__row__icon">
                            <img src="https://tui-b2c-static.imgix.net/icons/language.svg" alt="languages" title="" loading="lazy" class="icon" />
                        </div> 
                        <div>
                            <span class="info__container__row__label">Sprache:</span> 
                            <span>Deutsch</span>
                        </div>
                    </div>

                    <div class="info__container__row">
                        <div class="info__container__row__icon">
                            <img src="https://tui-b2c-static.imgix.net/icons/mobile_voucher.svg" alt="voucher" title="" loading="lazy" class="icon" />
                        </div> 
                        <span>Digitale Tickets</span>
                    </div>

                </div>
            </section>

            <div class="features">
                <section class="carousel">
                    <section class="carousel__slot">
                        <div class="features__box">
                            <div class="features__box__icon">
                                <img src="https://tui-b2c-static.imgix.net/icons/feat_addva_guide.svg" alt="Geführte Tour" title="" loading="lazy" class="icon" />
                            </div> 
                            <span class="features__box__text">Geführte Tour</span>
                        </div>
                        <div class="features__box">
                            <div class="features__box__icon">
                                <img src="https://tui-b2c-static.imgix.net/icons/feat_addva_vouch.svg" alt="Digitale Buchungsbestätigung" title="" loading="lazy" class="icon" />
                            </div> 
                            <span class="features__box__text">Digitale Buchungsbestätigung</span>
                        </div>
                        <div class="features__box">
                            <div class="features__box__icon">
                                <img src="https://tui-b2c-static.imgix.net/icons/feat_istant.svg" alt="Sofortbestätigung" title="" loading="lazy" class="icon" />
                            </div> 
                            <span class="features__box__text">Sofortbestätigung</span>
                        </div>
                        <div class="features__box">
                            <div class="features__box__icon">
                                <img src="https://tui-b2c-static.imgix.net/icons/feat_pick-up.svg" alt="Abholservice vom Hotel" title="" loading="lazy" class="icon" />
                            </div> 
                            <span class="features__box__text">Abholservice vom Hotel</span>
                        </div>
                    </section> 
                </section>
            </div>
            
        </div>
    )
}
