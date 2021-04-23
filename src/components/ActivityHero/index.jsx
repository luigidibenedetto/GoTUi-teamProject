import './style.scss';
import ModalGallery from '../ModalGallery'

function ActivityHero() {
  return (
    <div className="ActivityHero">
      <div className="hero_wrapper">

        <div className="hero_image">
          <picture className="image">
            <source 
              media="(max-width:320px)"
              srcSet="https://images.musement.com/cover/0037/82/thumb_3681910_cover_header.jpeg?q=50&fit=crop&auto=format&w=320&h=200 1x, https://images.musement.com/cover/0037/82/thumb_3681910_cover_header.jpeg?q=50&fit=crop&auto=format&w=640&h=400 2x"
            />
            <source 
              media="(max-width:430px)"
              srcSet="https://images.musement.com/cover/0037/82/thumb_3681910_cover_header.jpeg?q=50&fit=crop&auto=format&w=430&h=268.75 1x, https://images.musement.com/cover/0037/82/thumb_3681910_cover_header.jpeg?q=50&fit=crop&auto=format&w=860&h=537.5 2x"
            />
            <source 
              media="(max-width:1024px)"
              srcSet="https://images.musement.com/cover/0037/82/thumb_3681910_cover_header.jpeg?q=50&fit=crop&auto=format&w=1024&h=400 1x, https://images.musement.com/cover/0037/82/thumb_3681910_cover_header.jpeg?q=50&fit=crop&auto=format&w=2048&h=800 2x"
            />
            <source 
              media="(max-width:1441px)"
              srcSet="https://images.musement.com/cover/0037/82/thumb_3681910_cover_header.jpeg?q=50&fit=crop&auto=format&w=1441&h=400 1x, https://images.musement.com/cover/0037/82/thumb_3681910_cover_header.jpeg?q=50&fit=crop&auto=format&w=2882&h=800 2x"
            />
            <source 
              media="(min-width:1441px)"
              srcSet="https://images.musement.com/cover/0037/82/thumb_3681910_cover_header.jpeg?q=50&fit=crop&auto=format&w=1680&h=600 1x, https://images.musement.com/cover/0037/82/thumb_3681910_cover_header.jpeg?q=50&fit=crop&auto=format&w=3360&h=1200 2x"
            />
            <img
              className="image" alt="prova"
              src="https://images.musement.com/cover/0037/82/thumb_3681910_cover_header.jpeg?q=50&fit=crop&auto=format&w=1024&h=400"
            />
          </picture>
        </div>

        <section className="button_wrapper">
          <button className="button">
            <div className="button_icoBox">
              <div className="icoBox_icon">
                <img
                  className="icon"
                  src="https://tui-b2c-static.imgix.net/icons/gallery.svg"
                  alt="prova"
                />
              </div>
              <span>Fotos ansehen</span>
            </div>
          </button>
        </section>

      </div>
      <ModalGallery />
    </div>
  )
}
export default ActivityHero