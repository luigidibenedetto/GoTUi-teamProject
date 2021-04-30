import { useSelector } from "react-redux";
import { translateSelector } from '../../utils/translations'
import calendar_icon from './../../Assets/images/calendar_icon.svg'

import './style.scss';

export default function ActivityContentHead({ data }) {
	const $t = useSelector(translateSelector)
	return (
		<div className='ActivityContentHead'>
			<section className="categories">
				{data.categories[0].name === "TUI collection"
					? <div className="categories">
						{data.categories.filter((category, index) => (index < 4 && index > 0)).map((category, index) => (
							<span className="categories__label" key={index}>{category.name}</span>
						))}

						<div className="tuiCategories_collection">
							<span className="tuiCategories_collection__label">{data.categories[0].name.toUpperCase()}</span>
						</div>
					</div>
					: <div className="categories">
						{data.categories.filter((category, index) => (index < 4)).map((category, index) => (
							<span className="categories__label" key={index}>{category.name}</span>
						))}
					</div>
				}
			</section>

			<header>
				<section className="header__container">
					<h1 className="title__h1">{data.title}</h1>
				</section>
			</header>

			<section className="info">

				<div className="info__container">
					<div className="info__container__row">
						<div data-test="activity-info__free_cancellation" className="free_cancellation_container">
							<span className="icon">
								<img src={calendar_icon} alt="Calendar icon" />
							</span>
							{data.free_cancellation && <span className="info__free_cancellation">{$t("event.free.cancellation")}</span>}
						</div>
					</div>

					<div className="info__container__row">
						<div className="info__container__row__icon">
							<img src="https://tui-b2c-static.imgix.net/icons/marker_place.svg" alt="place" title="" loading="lazy" className="icon" />
						</div>
						<div>
							<span className="info__container__row__label">{$t("event.info.place")}:</span>
							<span>{data.city.name}</span>
						</div>
					</div>

					<div className="info__container__row">
						<div className="duration">
							<div className="duration__theme_activity_info__icon">
								<img src="https://tui-b2c-static.imgix.net/icons/duration.svg" alt="Dauer" title="" loading="lazy" className="icon" />
							</div>
							<div className="duration__theme_activity_info__features">
								<span>{$t("event.info.duration")}</span>
								{data.duration_range.min === 'PT8H' ? <span>länger als 8 Stunden</span> : ''}
							</div>
						</div>
					</div>

					<div className="info__container__row">
						<div className="info__container__row__icon">
							<img src="https://tui-b2c-static.imgix.net/icons/language.svg" alt="languages" title="" loading="lazy" className="icon" />
						</div>
						{data.languages.length > 0 &&
							<div>
								<span className="info__container__row__label">{$t("event.info.languages")}:</span>
								{data.languages.map((lang, index) => <span key={index}>{lang.name}</span>)}

							</div>
						}
					</div>

					<div className="info__container__row">
						<div className="info__container__row__icon">
							<img src="https://tui-b2c-static.imgix.net/icons/mobile_voucher.svg" alt="voucher" title="" loading="lazy" className="icon" />
						</div>
						{data.voucher_access_usage === "MOBILE" ? <span>{$t("event.info.mobile_voucher")}</span> : ''}
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
