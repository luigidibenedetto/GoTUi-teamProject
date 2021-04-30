import { useSelector } from "react-redux";
import { translateSelector } from '../../utils/translations'
import './style.scss';

function TakeCare() {
	const $t = useSelector(translateSelector)
	return <div className='TakeCare'>
		<a href="https://tuitakescareofyou.gotui.com/uk/">
			<div className="banner_trusted">
				<div className="banner_trusted__icon">
					<div className="banner_trusted__icon">
						<img src="https://tui-b2c-static.imgix.net/icons/trusted_tui.svg" alt="trusted tui" title="" loading="lazy" className="icon" />
					</div>
				</div>
				<div className="banner_trusted__title">
					{$t("banner.trusted.title")}
				</div>
				<div className="banner_trusted__content">
					<div>
						{$t("banner.trusted.message")}
						<span className="banner_trusted__content__moreinfo">
							{$t("banner.trusted.clicktoknowmore")}
						</span>
					</div>
				</div>
			</div>
		</a>
	</div>
}

export default TakeCare;