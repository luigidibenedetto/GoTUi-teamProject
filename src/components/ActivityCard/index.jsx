import './style.scss';

function ActivityCard() {
  return (
  <div 
  className="ActivityCard">
    
    <div className="card_cover">
      <span className="cover_label">Escursioni e tour giornalieri</span>
      <div className="cover_image-wrapper">
        <img 
          className="image"
          src="https://images.musement.com/cover/0037/82/thumb_3681910_cover_header.jpeg?q=70&fit=crop&auto=format&w=280&h=115"
          alt="city"
        />
      </div>
    </div>

    <div className="card_content">
      <span className="content_label">TUI COLLECTION</span>

      <section className="content_heading">
        <h3 className="heading_title">Speciale Nysiros</h3>
        <p className="heading_description">Questa è una descrizione esempio. Visto che bella la card?</p>
      </section>

      <section>
        <section className="content_cancellation">
          <div className="cancellation_icon">
            <img 
              className="icon"
              src="https://tui-b2c-static.imgix.net/icons/free_cancellation.svg"
              alt="icon"
            />
          </div>
          <span>Cancellazione gratuita</span>
        </section>

        <div className="content_languages">
          <span className="flags_basics_label">A disposizione:</span>
          <img 
            className="flags_icon" 
            src="https://tui-b2c-static.imgix.net/icons/lang_de.svg" 
            alt="tedesco"
            />
        </div>

        <section className="content_bottom">
          <div className="price-wrapper">
            <span className="price-prefix">A partire da:</span>
            <div>
              <span className="price">€ 59,00</span>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
)
}
export default ActivityCard;