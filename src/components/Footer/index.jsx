import './style.scss';
import logo from './../../Assets/images/logo.svg';
import { useState } from 'react';

export default function Footer() {
    const mql = window.matchMedia('(min-width: 1024px)');
    const [showLinks, setShowLinks] = useState(mql.matches ? true : false);

    return(
        <div className="footer">

            <div className="footer__top">
                <div className="accordion" style={{borderBottom: showLinks ? 'none' : ''}} onClick={()=>setShowLinks(!showLinks)} >
                    <div className="accordion_bundle">
                        <span className="accordion__title">Wir empfehlen</span>
                        { showLinks && (
                            <div className="accordion__links">
                                <a href="/de/mallorca/" >Mallorca</a>
                                <a href="/de/punta-cana/" >Punta Cana</a>
                                <a href="/de/cancun/" >Cancun</a>
                                <a href="/de/tenerife/" >Tenerife</a>
                            </div>
                        )}
                    </div>
                    <div className="arrow_down">
                        <img style={{transform: showLinks ? 'rotate(180deg)' : ''}} src="https://tui-b2c-static.imgix.net/icons/arrow_down.svg" alt="arrow_down" />    
                    </div>
                </div>

                <div className="top_preferences">
                    <span className="top_preferences_title">Einstellungen</span>

                    <div className="dropdown">
                        <label htmlFor="language" className="dropdown__label">Sprache:</label> 
                        <select id="language" className="dropdown__select">
                            <option value="uk">
                                English (UK)
                            </option>
                            <option value="fr">
                                Français
                            </option>
                            <option value="pl">
                                Polski
                            </option>
                            <option value="se">
                                Svenska
                            </option>
                            <option value="dk">
                                Dansk
                            </option>
                            <option value="fi">
                                Suomi
                            </option>
                            <option value="no">
                                Norsk
                            </option>
                            <option value="de">
                                Deutsch
                            </option><option value="nl">
                                Nederlands
                            </option><option value="fr-be">
                                Français (Belgique)
                            </option><option value="nl-be">
                                Nederlands (België)
                            </option>
                        </select>
                    </div>

                    <div className="dropdown">
                        <label htmlFor="currency" className="dropdown__label">Währung:</label> 
                        <select id="currency" className="dropdown__select">
                        <option value="EUR">
                            Euro
                        </option><option value="USD">
                            US-Dollar
                        </option><option value="GBP">
                            Britisches Pfund
                        </option><option value="CHF">
                            Schweizer Franken
                        </option><option value="CAD">
                            Kanadischer Dollar
                        </option><option value="AUD">
                            Australischer Dollar
                        </option><option value="AED">
                            VAE-Dirham
                        </option><option value="ARS">
                            Argentinischer Peso
                        </option><option value="AZN">
                            Aserbaidschan-Manat
                        </option><option value="BGN">
                            Bulgarischer Lew
                        </option><option value="BHD">
                            Bahrain-Dinar
                        </option><option value="CLP">
                            Chilenischer Peso
                        </option><option value="CNY">
                            Renminbi Yuan
                        </option><option value="COP">
                            Kolumbianischer Peso
                        </option><option value="CZK">
                            Tschechische Krone
                        </option><option value="DKK">
                            Dänische Krone
                        </option><option value="EGP">
                            Ägyptisches Pfund
                        </option><option value="FJD">
                            Fidschi-Dollar
                        </option><option value="GEL">
                            Georgischer Lari
                        </option><option value="HKD">
                            Hongkong-Dollar
                        </option><option value="HUF">
                            Ungarischer Forint
                        </option><option value="IDR">
                            Indonesische Rupiah
                        </option><option value="ILS">
                            Israelischer Neuer Schekel
                        </option><option value="INR">
                            Indische Rupie
                        </option><option value="ISK">
                            Isländische Krone
                        </option><option value="JOD">
                            Jordanischer Dinar
                        </option><option value="JPY">
                            Japanischer Yen
                        </option><option value="KRW">
                            Südkoreanischer Won
                        </option><option value="KWD">
                            Kuwait-Dinar
                        </option><option value="KZT">
                            Kasachischer Tenge
                        </option><option value="MDL">
                            Moldau-Leu
                        </option><option value="MXN">
                            Mexikanischer Peso
                        </option><option value="MYR">
                            Malaysischer Ringgit
                        </option><option value="NAD">
                            Namibia-Dollar
                        </option><option value="NOK">
                            Norwegische Krone
                        </option><option value="NZD">
                            Neuseeland-Dollar
                        </option><option value="OMR">
                            Omanischer Rial
                        </option><option value="PLN">
                            Polnischer Złoty
                        </option><option value="QAR">
                            Katar-Riyal
                        </option><option value="RON">
                            Rumänischer Leu
                        </option><option value="RUB">
                            Russischer Rubel
                        </option><option value="SAR">
                            Saudi-Rial
                        </option><option value="SEK">
                            Schwedische Krone
                        </option><option value="SGD">
                            Singapur-Dollar
                        </option><option value="THB">
                            Thailändischer Baht
                        </option><option value="TRY">
                            Türkische Lira
                        </option><option value="TWD">
                            Neuer Taiwan-Dollar
                        </option><option value="UAH">
                            Ukrainische Hrywnja
                        </option><option value="XOF">
                            CFA-Franc (BCEAO)
                        </option><option value="ZAR">
                            Südafrikanischer Rand
                        </option>
                        </select>
                    </div>

                </div>

            </div>

            <div className="footer__bottom">             
                <div className="footer__bottom__description"></div>
                    <img src={logo} alt="tui"/>
                
                <span className="footer__bottom__description__text">
                    © 2019 Musement S.p.A, Teil der TUI Group VAT IT07978000961 - Lizenz nº 170695
                </span>
            </div>
        </div>
    );
}