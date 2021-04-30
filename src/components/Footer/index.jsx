import logo from './../../Assets/images/logo.svg';
import { useState, useEffect } from 'react';
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { translateSelector } from '../../utils/translations'

import { changeCurrency } from "../../store/action"
import { Languages } from "../../utils/static";


import './style.scss';

export default function Footer() {
	const $t = useSelector(translateSelector)
	const mql = window.matchMedia('(min-width: 1024px)');
	const [showLinks, setShowLinks] = useState(mql.matches ? true : false);
	const [currencies, setCurrencies] = useState([]);

	const codeLanguage = useSelector(state => state.language);
	const codeCurrency = useSelector(state => state.currency);
	const codePath = useSelector(state => state.path);

	const dispatch = useDispatch()

	function onChangeLanguage(language) {
		window.location.href = window.location.href.replace(window.location.href.split("/")[3], Languages.find((codeLanguage) => (language === (codeLanguage.LANGUAGE))).CODE)
		//window.location.href = "/" + Languages.find((codeLanguage) => (language === (codeLanguage.LANGUAGE))).CODE + "/" + window.location.pathname.split("/")[2] + "/" + window.location.pathname.split("/")[3]
	}

	function onChangeCurrency(currency) {
		dispatch(changeCurrency(currency))
		window.localStorage.setItem("GoTUI-Currency", currency)
		window.location.reload();
	}

	const getCurrencies = async () => {
		const { data: currencies } = await axios.get('https://fe-tui-apiproxy.musement.com/currencies', {
			headers: {
				'Accept-Language': `${codeLanguage}`,
			}
		})
		setCurrencies(currencies)
	}

	useEffect(() => {
		getCurrencies();
		// eslint-disable-next-line react-hooks/exhaustive-deps 
	}, [codeLanguage, codeCurrency, codePath]);

	return (
		<div className="footer">

			<div className="footer__top">
				<div className="accordion" style={{ borderBottom: showLinks ? 'none' : '' }} onClick={() => setShowLinks(!showLinks)} >
					<div className="accordion_bundle">
						<span className="accordion__title">{$t('invoice_form.tab_company.text')}</span>
						{showLinks && (
							<div className="accordion__links">
								<a href="/de/mallorca/" >{$t('footer.mallorca')}</a>
								<a href="/de/punta-cana/" >{$t("footer.punta_cana")}</a>
								<a href="/de/cancun/" >{$t("footer.cancun")}</a>
								<a href="/de/tenerife/" >{$t("footer.tenerife")}</a>
							</div>
						)}
					</div>
					<div className="arrow_down">
						<img style={{ transform: showLinks ? 'rotate(180deg)' : '' }} src="https://tui-b2c-static.imgix.net/icons/arrow_down.svg" alt="arrow_down" />
					</div>
				</div>

				<div className="top_preferences">
					<span className="top_preferences_title">{$t("footer.text.preferences")}</span>

					<div className="dropdown">
						<label htmlFor="language" className="dropdown__label">{$t('footer.text.language')}:</label>
						<select id="language" className="dropdown__select" onChange={(e) => onChangeLanguage(e.target.value)}>
							{Languages.map((language, index) => (
								<option value={language.LANGUAGE} key={index} selected={(window.location.pathname.split("/")[1]) === language.CODE ? "selected" : ""}>
									{$t(`languages.${language.CODE}`)}
								</option>
							))}
						</select>
					</div>

					<div className="dropdown">
						<label htmlFor="currency" className="dropdown__label">Währung:</label>
						<select id="currency" className="dropdown__select" onChange={(e) => onChangeCurrency(e.target.value)}>
							{currencies.map((currency) => (
								<option value={currency.code} key={currency.code} selected={window.localStorage.getItem("GoTUI-Currency") === currency.code ? "selected" : ""}>
									{currency.name}
								</option>
							))}
						</select>
					</div>

				</div>

			</div>

			<div className="footer__bottom">
				<div className="footer__bottom__description"></div>
				<img src={logo} alt="tui" />

				<span className="footer__bottom__description__text">
					© 2019 Musement S.p.A, Teil der TUI Group VAT IT07978000961 - Lizenz nº 170695
                </span>
			</div>
		</div>
	);
}