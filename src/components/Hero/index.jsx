import './index.scss';

function Hero() {
    return <div class='Hero'>
        <picture class="image_p">
            <source media="(max-width:320px)" srcset="https://tui-b2c-static.imgix.net/images/homepage-hero.jpg?q=50&amp;fit=crop&amp;auto=format&amp;w=320&amp;h=200 1x, https://tui-b2c-static.imgix.net/images/homepage-hero.jpg?q=50&amp;fit=crop&amp;auto=format&amp;w=640&amp;h=400 2x" />
            <source media="(max-width:430px)" srcset="https://tui-b2c-static.imgix.net/images/homepage-hero.jpg?q=50&amp;fit=crop&amp;auto=format&amp;w=430&amp;h=268.75 1x, https://tui-b2c-static.imgix.net/images/homepage-hero.jpg?q=50&amp;fit=crop&amp;auto=format&amp;w=860&amp;h=537.5 2x" />
            <source media="(max-width:1024px)" srcset="https://tui-b2c-static.imgix.net/images/homepage-hero.jpg?q=50&amp;fit=crop&amp;auto=format&amp;w=1024&amp;h=400 1x, https://tui-b2c-static.imgix.net/images/homepage-hero.jpg?q=50&amp;fit=crop&amp;auto=format&amp;w=2048&amp;h=800 2x" />
            <source media="(max-width:1441px)" srcset="https://tui-b2c-static.imgix.net/images/homepage-hero.jpg?q=50&amp;fit=crop&amp;auto=format&amp;w=1441&amp;h=400 1x, https://tui-b2c-static.imgix.net/images/homepage-hero.jpg?q=50&amp;fit=crop&amp;auto=format&amp;w=2882&amp;h=800 2x" />
            <source media="(min-width:1441px)" srcset="https://tui-b2c-static.imgix.net/images/homepage-hero.jpg?q=50&amp;fit=crop&amp;auto=format&amp;w=1680&amp;h=600 1x, https://tui-b2c-static.imgix.net/images/homepage-hero.jpg?q=50&amp;fit=crop&amp;auto=format&amp;w=3360&amp;h=1200 2x" />
            <img src="https://tui-b2c-static.imgix.net/images/homepage-hero.jpg?q=50&amp;fit=crop&amp;auto=format&amp;w=1024&amp;h=400" alt="hero.alt" loading="lazy" class="image_2SsFw" /></picture>

            <div class='hero_overlay'>   
                <div class="hero_overlay_text">
                    <h1 class="hero_overlay_title">Discover the world with TUI</h1>
                    <span class="hero_overlay_message">
                        From activities to tours, the best experiences in your destination.
                        </span>
                </div>
            </div> 
    </div>
}

export default Hero;