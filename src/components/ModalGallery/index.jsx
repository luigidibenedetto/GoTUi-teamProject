import { useState, useEffect, useRef } from "react";
//import axios from "axios"

import './style.scss';

function ModalGallery({ activitiesMedia, isOpen, contentUuid, closeModal}) {

  //const [ activitiesMedia, setActivitiesMedia ] = useState([]);
  const [ numPage, setNumPage ] = useState(1);
    
  const ref = useRef(null);
  const scrollOffset = window.innerWidth;

  function fnScrollMouse() {
    if (ref.current.scrollLeft % window.innerWidth === 0) {
      setNumPage((ref.current.scrollLeft/window.innerWidth) + 1)
    }
  }
  
  function fnScrollArrow(scrollOffset) {
    ref.current.scrollLeft += scrollOffset;
  }
  
  // const getActivitiesMedia = async () => {
  //   const { data: activitiesMedia } = await axios.get(`https://fe-tui-apiproxy.musement.com/activities/${contentUuid}/media`)
  //   setActivitiesMedia(activitiesMedia)
  // }

  useEffect(() => {
    if (contentUuid) {
      //getActivitiesMedia();
      setNumPage(1);
    }
    // eslint-disable-next-line
  }, [contentUuid]);

  return (isOpen && 
    <div className="ModalGallery" >
      <div className="modal_overlay">
        <div className="modal_body">
          <section className="gallery">
            <div className="gallery__carousel" ref={ref} onScroll={() => fnScrollMouse()}>

              {activitiesMedia.map((photo) => (
              <div className="gallery__carousel__slide" key={photo.id}>
                <div className="gallery__carousel__slide__image">
                  <div className="image">
                    <img 
                      src={photo.url}
                      alt={photo.title}
                      className="image"
                    />
                  </div>
                  <span className="gallery__carousel__slide__text">{numPage}/{activitiesMedia.length}</span>
                </div>
              </div>
              ))}
              
            </div>
            <div className="carousel__close_icon" onClick={closeModal}>
              <img 
                src="https://tui-b2c-static.imgix.net/icons/x_close_white.svg" 
                alt="close icon" 
                title="" 
                loading="lazy" 
                className="icon"
              />
            </div>
            <div className="gallery__right_nav" onClick={() => fnScrollArrow(+scrollOffset)}>
              <img 
                src="https://tui-b2c-static.imgix.net/icons/arrow_white_right.svg" 
                alt="arrow right icon" 
                title="" 
                loading="lazy" 
                className="icon"
              />
            </div>
            <div className="gallery__left_nav" onClick={() => fnScrollArrow(-scrollOffset)}>
              <img 
                src="https://tui-b2c-static.imgix.net/icons/arrow_white_left.svg" 
                alt="arrow left icon" 
                title="" 
                loading="lazy" 
                className="icon"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ModalGallery 