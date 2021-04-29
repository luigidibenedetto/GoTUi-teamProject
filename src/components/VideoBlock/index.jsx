import { useSelector } from "react-redux";
import { translateSelector } from '../../utils/translations'
import './style.scss';

function VideoBlock() {
    const $t = useSelector(translateSelector)
    return <section className="home__benefits">
                <section className="home__benefits__content">
                    <div className="home__benefits__content__section">
                        <div className="benefits">
                            <h2 className="title__h2">
                            {$t('home.title.holiday_inspirations')}
                            </h2>
                        <span className="benefits__subtitle">
                             {$t("home.subtitle.holiday_inspirations")}
                        </span>
                        <div className="benefits__video">
                            <div className="benefits__embed">
                                <video controls="controls" preload="metadata" className="video">
                                    <source src="https://tui-b2c-static.imgix.net/videos/TUI_Collection_Experiences+UK.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
}

export default VideoBlock;