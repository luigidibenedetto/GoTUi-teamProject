import { useState } from 'react';
import './style.scss';
import { useEffect } from 'react';
import axios from "axios"


function ActivityContentBody() {

    const [descriptionVisible, setDescription] = useState(false);
    const [infoVisible, setInfo] = useState(false);
    const [ activitiesTax, setActivitiesTax ] = useState([]);

    const getActivitiesTax = async () => {
        const { data: activities } = await axios.get(`https://fe-tui-apiproxy.musement.com/activities/${contentUuid}/taxonomies`, {
            headers: {
              'Accept-Language': `de-DE`,
              'x-musement-version': "3.4.0",
            }});
        setActivitiesTax(activities);
    }

    useEffect(() => {
        getActivitiesTax();
    }, []);
    
    console.log('activitiesTax= ', activitiesTax);

    function ShowMoreLess(className, stateVariable, stateFunction, infordescription) {
        
        const classToChange = document.querySelector(`.${className}`);
        const btnMore = document.querySelector(`.readMore__${infordescription}__btn__more`);
        const btnLess = document.querySelector(`.readMore__${infordescription}__btn__less`);

        if (!stateVariable) {

            classToChange.style.maxHeight = 'none';
            classToChange.style.overflow = 'visible';
            btnMore.style.display = 'none';
            btnLess.style.display = 'inline';

            stateFunction(true);
        }

        else {
            classToChange.style.maxHeight = '90px';
            classToChange.style.overflow = 'hidden';
            btnMore.style.display = 'inline';
            btnLess.style.display = 'none';

        stateFunction(false);
        }
    }


    return (
    <div>
        <section className="content">
            <section className="content__highlights">
                <h2 className="content__highlights__title">Highlights</h2>
                <div>
                    <ul className="list">
                        <li className="list__row">
                            <span className="content__highlights__icon">
                            </span>
                            <span className="list__row__item">Erkunden der Vulkaninsel Nisyros
                            </span>
                        </li>
                        <li className="list__row">
                            <span className="content__highlights__icon">
                            </span>
                            <span className="list__row__item">
                                Besuch von Nikia und Mandraki
                            </span>
                        </li>
                        <li className="list__row">
                            <span className="content__highlights__icon"></span>
                            <span className="list__row__item">
                                Gang durch den Vulkankrater
                            </span>
                        </li>
                        <li className="list__row">
                            <span className="content__highlights__icon"></span>
                            <span className="list__row__item">
                                Diese Route wird ausschließlich von TUI angeboten – NUR BEI TUI
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="content__container">
                <h2 className="content__container__title">Beschreibung</h2>   <div>
                    <div>
                        <input id="description" type="checkbox" className="readMore__trigger" />
                            <div className="readMore__description__text">
                                <p>Wenn es einen Must-Do-Ausflug bei einem Urlaub auf Kos gibt, dann ist es die Fahrt zur Vulkaninsel Nisyros. Die griechische Legende besagt, dass er aus einem Stein geschaffen wurde, der von dem Gott Poseidon geworfen wurde. Schon die einstündigen Reise dorthin ist ein Traum. Wir besuchen heute Mandraki, Nikia, den Stefanos-Krater und vieles mehr. Dies ist einer der exklusiven TUI Collection Ausflüge, die Ihnen die Höhepunkte Ihres Reiseziels auf besondere Weise vermitteln – Einzigartig, Authentisch, Verantwortlich.</p>
                                <p>Sobald wir im Hafen von Mandraki, der Hauptstadt der Insel, angedockt haben, brechen wir in das antike Dorf Nikia am Rande des Stefanos-Kraters auf. Verlieren Sie sich im Labyrinth der gepflasterten Steinspuren oder finden Sie einen Ort in der Nähe des Kraterrandes, wo Sie die Hitze spüren können – ein einzigartiges Gefühl.</p>
                                <p>Danach geht es zurück nach Mandraki. Die zuckerbedeckten Häuser erstrecken sich über diese Amphitheater-förmige Stadt, die im Schatten einer mittelalterlichen Burg und des klippenseitigen Klosters der Panagia Spiliani liegt. Es bleibt auch Zeit, die Balkonhäuser der Stadt zu bewundern oder in einer Taverne zu Abend zu essen, bevor es zurück nach Kos geht.</p>
                            </div>
                            <label htmlFor="description" className="readMore__btn" onClick={() => ShowMoreLess('readMore__description__text', descriptionVisible, setDescription, 'description')}>
                                <span className="readMore__description__btn__less">
                                    Weniger anzeigen
                                </span>
                                <span className="readMore__description__btn__more">
                                    Mehr erfahren
                                </span>
                            </label>
                        </div>
                    </div>
                </section>
                <section className="content__fluid">
                    <section className="content__fluid__container">
                        <h2 className="content__fluid__container__title">Inbegriffen</h2>
                        <div>
                            <ul className="list">
                                <li className="list__row">
                                    <div className="content__fluid__container__icon">
                                        <img src="https://tui-b2c-static.imgix.net/icons/flag.svg" alt="included flag" title="" loading="lazy" className="icon" />
                                    </div>
                                    <span className="list__row__item">Transfer</span>
                                </li>
                                <li className="list__row">
                                    <div className="content__fluid__container__icon">
                                        <img src="https://tui-b2c-static.imgix.net/icons/flag.svg" alt="included flag" title="" loading="lazy" className="icon" />
                                    </div>
                                    <span className="list__row__item">Transfer</span>
                                </li>
                                <li className="list__row">
                                    <div className="content__fluid__container__icon">
                                        <img src="https://tui-b2c-static.imgix.net/icons/flag.svg" alt="included flag" title="" loading="lazy" className="icon" />

                                    </div>
                                    <span className="list__row__item">Guide</span>
                                </li>
                                <li className="list__row">
                                    <div className="content__fluid__container__icon">
                                        <img src="https://tui-b2c-static.imgix.net/icons/flag.svg" alt="included flag" title="" loading="lazy" className="icon" />
                                    </div>
                                    <span className="list__row__item">Bootstour</span>
                                </li>
                                <li className="list__row">
                                    <div className="content__fluid__container__icon">
                                        <img src="https://tui-b2c-static.imgix.net/icons/flag.svg" alt="included flag" title="" loading="lazy" className="icon" />
                                    </div>
                                    <span className="list__row__item">Audioguide</span>
                                </li>
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
                                <div className="readMore__info__text">
                                    <p>Der Krater ist recht steil, weshalb kleinen Kindern, Schwangeren und Personen mit gesundheitlichen Beschwerden von einem Besuch im Inneren abgeraten wird. Speisen und Getränke nicht im Preis inbegriffen.</p>.
                                    <div className='showParagraph' style={{display: infoVisible ? '':'none'}}>
                                    <p>Speisen und Getränke nicht im Preis inbegriffen.</p>.
                                    <p>Am Vulkan ist eine Nachhaltigkeitsgebühr in der Höhe von 3 Euro zu entrichten</p>
                                    </div>
                                    </div>
                                    <label htmlFor="info" className="readMore__btn" onClick={() => ShowMoreLess("readMore__info__text", infoVisible, setInfo, 'info')}>
                                        <span className="readMore__info__btn__less">
                                            Weniger anzeigen
                                        </span>
                                        <span className="readMore__info__btn__more">
                                             Mehr erfahren
                                        </span>
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
                                        <span>Sie erhalten eine Erstattung in Höhe von 100%, wenn Sie bis zu 1 Tag vor Ihrem Erlebnis stornieren.
                                        </span>
                                    </div>
                                </div>
                            </section>
                            <section className="content__fluid__container">
                                <h2 className="content__fluid__container__title">
                                    Anbieter
                                </h2>
                            <div>TUI HELLAS AE</div>
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
                </div>)

}

export default ActivityContentBody;