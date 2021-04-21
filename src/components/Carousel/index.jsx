import { useState, useRef } from "react"

import "./style.scss";

function Carousel ({ title, cards, children }) {

  //const titleTopCities = "TOP DESTINATIONS"; //lingua variabile
  const widthCard = 334; //larghezza card + padding (318 + 16)
  const maxPosCities = (cards.length - (window.innerWidth / widthCard)) * widthCard;
  //console.log(ref.current.offsetWidth) //Verificare larghezza DIV carosello piuttosto che larghezza finestra
  
  const [ posCities, setPosCities ] = useState(0);
  const ref = useRef(null);

  function fnScroll (scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
    
    if (scrollOffset > 0) {
      setPosCities(ref.current.scrollLeft + widthCard);
    } else {
      setPosCities(ref.current.scrollLeft - widthCard);
    }
  }

  return (
    <div> 
      <div className="topCities">
        <h2 className="title__h2 topcities__title">{title}</h2>
        <div className="topCities__Carousel">
          <section className="carousel">
            <section className="carousel__slot" ref={ref}>
              {children}
            </section>

            <div className={`carousel__navigator carousel__navigator__left ${posCities === 0 ? "carousel__navigator__disabled" : ""}`}>
            {/*<div className={posCities === 0 ? "carousel__navigator carousel__navigator__left carousel__navigator__disabled" : "carousel__navigator carousel__navigator__left"}>*/}
              <div className="carousel__arrow" onClick={() => fnScroll(-widthCard)}>
                <img src="https://tui-b2c-static.imgix.net/icons/arrow_right_carousel.svg" alt="chevron left" title="" loading="lazy" className="icon icon__left"/>
              </div>
            </div>
            
            <div className={`carousel__navigator carousel__navigator__right ${posCities >= maxPosCities ? "carousel__navigator__disabled" : ""}`}>
            {/*<div className={posCities >= maxPosCities ? "carousel__navigator carousel__navigator__right carousel__navigator__disabled" : "carousel__navigator carousel__navigator__right"}>*/}
              <div className="carousel__arrow" onClick={() => fnScroll(+widthCard)}>
                <img src="https://tui-b2c-static.imgix.net/icons/arrow_right_carousel.svg" alt="chevron right" title="" loading="lazy" className="icon"/>
              </div>
            </div>
            
          </section>
        </div>
       
      </div>
    </div>
  )
}

export default Carousel;