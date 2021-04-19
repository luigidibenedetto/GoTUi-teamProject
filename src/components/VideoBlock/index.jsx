import './index.scss';

function VideoBlock() {
    return <section class="home__benefits">
                <section class="home__benefits__content">
                    <div class="home__benefits__content__section">
                        <div class="benefits">
                            <h2 class="title__h2">
                            Travel inspiration
                            </h2>
                        <span class="benefits__subtitle">
                             With TUI, the world is at your feet
                        </span>
                        <div class="benefits__video">
                            <div class="benefits__embed">
                                <video controls="controls" preload="metadata" class="video">
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