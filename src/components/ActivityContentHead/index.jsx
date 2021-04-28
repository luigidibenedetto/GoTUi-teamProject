import './style.scss';
import calendar_icon from './../../Assets/images/calendar_icon.svg'
import { useState, useEffect } from 'react';
import axios from "axios"


export default function ActivityContentHead({ uuid }) {
    const [ activities, setActivities ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    

    
    const getActivities = async () => {
        const { data: activities } = await axios.get(`https://fe-tui-apiproxy.musement.com/activities/${uuid}`, {
            headers: {
              'Accept-Language': `de-DE`,
              'x-musement-version': "3.4.0",
            }});
        setActivities(activities);
        setLoaded(true);
    }

      

    useEffect(() => {
        getActivities();
    }, []);

    console.log('----activities= ', activities);
    console.log('----activities.categories= ', activities.categories);
    console.log(loaded)

    return(
        <div className='ActivityContentHead'>
            <section className="categories">
            { loaded && (<>
                <span className="categories__label">{activities.categories[1].name}</span>
                <span className="categories__label">{activities.categories[2].name}</span>
                <span className="categories__label">{activities.categories[3].name}</span>  
                <div className="tuiCategories_collection">
                <span className="tuiCategories_collection__label">{activities.categories[0].name.toUpperCase()}</span>
                </div>
                </>) }
            </section>

            <header>
                <section className="header__container">
                    <h1 className="title__h1">{activities.title}</h1>
                </section> 
            </header>

            <section className="info">

                <div className="info__container">
                    <div className="info__container__row">
                        <div data-test="activity-info__free_cancellation" className="free_cancellation_container">
                            <span className="icon">
                                <img src={calendar_icon} alt="Calendar icon" />
                            </span> 
                            <span className="info__free_cancellation">Kostenlose Stornierung</span>
                        </div>
                    </div>

                    <div className="info__container__row">
                        <div className="info__container__row__icon">
                            <img src="https://tui-b2c-static.imgix.net/icons/marker_place.svg" alt="place" title="" loading="lazy" className="icon" />
                        </div> 
                        <div>
                            <span className="info__container__row__label">Ort:</span> 
                            <span>Kos</span>
                        </div>
                    </div>

                    <div className="info__container__row">
                        <div className="duration">
                            <div className="duration__theme_activity_info__icon">
                                <img src="https://tui-b2c-static.imgix.net/icons/duration.svg" alt="Dauer" title="" loading="lazy" className="icon" />
                            </div> 
                            <div className="duration__theme_activity_info__features">
                                <span>Dauer</span>
                                <span>länger als 8 Stunden</span>
                            </div>
                        </div>
                    </div>

                    <div className="info__container__row">
                        <div className="info__container__row__icon">
                            <img src="https://tui-b2c-static.imgix.net/icons/language.svg" alt="languages" title="" loading="lazy" className="icon" />
                        </div> 
                        <div>
                            <span className="info__container__row__label">Sprache:</span> 
                            <span>Deutsch</span>
                        </div>
                    </div>

                    <div className="info__container__row">
                        <div className="info__container__row__icon">
                            <img src="https://tui-b2c-static.imgix.net/icons/mobile_voucher.svg" alt="voucher" title="" loading="lazy" className="icon" />
                        </div> 
                        <span>Digitale Tickets</span>
                    </div>

                </div>
            </section>

            <div className="features">
                <section className="carousel">
                    <section className="carousel__slot">
                        <div className="features__box">
                            <div className="features__box__icon">
                                <img src="https://tui-b2c-static.imgix.net/icons/feat_addva_guide.svg" alt="Geführte Tour" title="" loading="lazy" className="icon" />
                            </div> 
                            <span className="features__box__text">Geführte Tour</span>
                        </div>
                        <div className="features__box">
                            <div className="features__box__icon">
                                <img src="https://tui-b2c-static.imgix.net/icons/feat_addva_vouch.svg" alt="Digitale Buchungsbestätigung" title="" loading="lazy" className="icon" />
                            </div> 
                            <span className="features__box__text">Digitale Buchungsbestätigung</span>
                        </div>
                        <div className="features__box">
                            <div className="features__box__icon">
                                <img src="https://tui-b2c-static.imgix.net/icons/feat_istant.svg" alt="Sofortbestätigung" title="" loading="lazy" className="icon" />
                            </div> 
                            <span className="features__box__text">Sofortbestätigung</span>
                        </div>
                        <div className="features__box">
                            <div className="features__box__icon">
                                <img src="https://tui-b2c-static.imgix.net/icons/feat_pick-up.svg" alt="Abholservice vom Hotel" title="" loading="lazy" className="icon" />
                            </div> 
                            <span className="features__box__text">Abholservice vom Hotel</span>
                        </div>
                    </section> 
                </section>
            </div>
            
        </div>
    )
}
