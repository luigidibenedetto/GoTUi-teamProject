import './style.scss';

function VideoBlock() {
    return <section className="home__benefits">
                <section className="home__benefits__content">
                    <div className="home__benefits__content__section">
                        <div className="benefits">
                            <h2 className="title__h2">
                            Travel inspiration
                            </h2>
                        <span className="benefits__subtitle">
                             With TUI, the world is at your feet
                        </span>
                        <div className="benefits__video">
                            <div className="benefits__embed">
                                <video controls="controls" preload="metadata" className="video">
                                    <source src="https://tui-b2c-static.imgix.net/videos/TUI_Collection_Experiences+UK.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        {/*qui ci va il TakeCare component */}
                    </div>
                </div>
            </section>
        </section>
}

export default VideoBlock;