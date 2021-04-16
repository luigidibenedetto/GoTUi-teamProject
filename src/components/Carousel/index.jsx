import { useState, useRef } from "react"

import "./styles.scss";

const destinations = [
  { id: 1,
    name: "destinazione 1",
    image: "https://images.musement.com/cover/0001/39/crete-jpg_header-38813.jpeg?q=70&fit=crop&auto=format&w=318&h=200"
  },
  { id: 2,
    name: "destinazione 2",
    image: "https://images.musement.com/cover/0003/14/kos-xl-jpg_header-213784.jpeg?q=70&fit=crop&auto=format&w=318&h=200"
  },
  { id: 3,
    name: "destinazione 3",
    image: "https://images.musement.com/cover/0001/40/rhodes-jpg_header-39950.jpeg?q=70&fit=crop&auto=format&w=318&h=200"
  },
  { id: 4,
    name: "destinazione 4",
    image: "https://images.musement.com/cover/0001/43/madeira_header-42618.jpeg?q=70&fit=crop&auto=format&w=318&h=200"
  },
  { id: 5,
    name: "destinazione 5",
    image: "https://images.musement.com/cover/0017/79/peloponesse-city-of-nafplion-and-bourtzi-fortress-fotolia-59300523-subscription-l-jpg_header-1678130.jpeg?q=70&fit=crop&auto=format&w=318&h=200"
  },
  { id: 6,
    name: "destinazione 6",
    image: "https://images.musement.com/cover/0001/36/tenerife-spain-jpg_header-35043.jpeg?q=70&fit=crop&auto=format&w=318&h=200"
  },
  { id: 7,
    name: "destinazione 7",
    image: "https://images.musement.com/cover/0001/32/las-palmas-de-gran-canaria-spain-jpg_header-31996.jpeg?q=70&fit=crop&auto=format&w=318&h=200"
  },
  { id: 8,
    name: "destinazione 8",
    image: "https://images.musement.com/cover/0002/46/dunas-fuerteventura-png_header-145589.png?q=70&fit=crop&auto=format&w=318&h=200"
  },
  { id: 9,
    name: "destinazione 9",
    image: "https://images.musement.com/cover/0002/49/the-gothic-cathedral-and-medieval-la-seu-in-palma-de-mallorca-xxl-jpg_header-148689.jpeg?q=70&fit=crop&auto=format&w=318&h=200"
  },
  { id: 10,
    name: "destinazione 10",
    image: "https://images.musement.com/cover/0001/43/algarve_header-42616.jpeg?q=70&fit=crop&auto=format&w=318&h=200"
  },
]

const titleTopCities = "TOP CITIES"; //lingua variabile
const widthCard = 334; //larghezza card + padding (318 + 16)
const maxPosCities = (destinations.length - (window.innerWidth / widthCard)) * widthCard;
//console.log(ref.current.offsetWidth) //Verificare larghezza DIV carosello piuttosto che larghezza finestra

function Carousel () {
  
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
        <h2 className="title__h2 topcities__title">{titleTopCities}</h2>
        <div className="topCities__Carousel">
          <section className="carousel">
            <section className="carousel__slot" ref={ref}>
              {destinations.map((destination) => (
                <div className="top__city" key={destination.id}>
                  <section className="card">
                    <div className="card__image">
                      <img src={destination.image} alt=""/>  
                    </div>
                  </section>
                </div>
              ))}
            </section>
            
            <div className={posCities === 0 ? "carousel__navigator carousel__navigator__left carousel__navigator__disabled" : "carousel__navigator carousel__navigator__left"}>
              <div className="carousel__arrow" onClick={() => fnScroll(-widthCard)}>
                {/*<span className="arrow">{"<"}</span>*/}
                <img src="https://tui-b2c-static.imgix.net/icons/arrow_right_carousel.svg" alt="chevron left" title="" loading="lazy" className="icon icon__left"/>
              </div>
            </div>
            <div className={posCities >= maxPosCities ? "carousel__navigator carousel__navigator__right carousel__navigator__disabled" : "carousel__navigator carousel__navigator__right"}>
              <div className="carousel__arrow" onClick={() => fnScroll(+widthCard)}>
                {/*<span className="arrow">{">"}</span>*/}
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