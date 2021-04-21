import logo from './../../Assets/images/logo.svg';
import { useState, useEffect } from 'react';
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";

import { changeCurrency } from "../../store/action"
import { Languages } from "../../utils/static";


import './style.scss';

export default function Footer() {
    const mql = window.matchMedia('(min-width: 1024px)');
    const [showLinks, setShowLinks] = useState(mql.matches ? true : false);
    const [ currencies, setCurrencies ] = useState([]);

    const dispatch = useDispatch()
    const currency = useSelector(state => state.currency)

    const getCurrencies = async () => {
        const { data: currencies } = await axios.get('https://fe-tui-apiproxy.musement.com/currencies', {
        headers: {
            'Accept-Language': 'en-GB'
        }
        })
        setCurrencies(currencies)
    }

    useEffect(() => {
        getCurrencies();
        
    }, []);
  
    let aryLanguages = [];
    function Language () {
        for (const key in Languages) {
            aryLanguages.push(Languages[key].TEXT)  
       }
    }
    Language()
  
    return(
        <div className="footer">

            <div className="footer__top">
                <div className="accordion" style={{borderBottom: showLinks ? 'none' : ''}}>
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
                        <img style={{transform: showLinks ? 'rotate(180deg)' : ''}} src="https://tui-b2c-static.imgix.net/icons/arrow_down.svg" onClick={()=>setShowLinks(!showLinks)} alt="arrow_down" />    
                    </div>
                </div>

                <div className="top_preferences">
                    <span className="top_preferences_title">Einstellungen</span>

                    <div className="dropdown">
                        <label htmlFor="language" className="dropdown__label">Sprache:</label> 
                        <select id="language" className="dropdown__select">
                            {aryLanguages.map((language) => (
                                <option value={language.TEXT} key={language.CURRENCY}>
                                    {language}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="dropdown">
                        <label htmlFor="currency" className="dropdown__label">Währung:</label> 
                        <select id="currency" className="dropdown__select" onChange={changeCurrency}>
                            {currencies.map((currency) => (
                                <option value={currency.code} key={currency.code}>
                                    {currency.name}
                                </option>
                            ))}
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