import './style.scss';

function TakeCare() {
    return <div className='TakeCare'>
        <a href="https://tuitakescareofyou.gotui.com/uk/">
            <div className="banner_trusted">
                <div className="banner_trusted__icon">
                    <div className="banner_trusted__icon">
                        <img src="https://tui-b2c-static.imgix.net/icons/trusted_tui.svg" alt="trusted tui" title="" loading="lazy" className="icon" />
                    </div>
                </div>
                <div className="banner_trusted__title">
                    TUI TAKES CARE OF YOU
                </div>
                <div className="banner_trusted__content">
                    <div>
                        At TUI we want you to discover your destination with peace of mind. All of our experiences take every care to keep you safe. What’s more, they come with a flexible 24-hour cancellation policy and our value guarantee.
                        <span className="banner_trusted__content__moreinfo">
                            Click here to find out more
                        </span>
                    </div>
                </div>
            </div>
        </a>
    </div>
}

export default TakeCare;