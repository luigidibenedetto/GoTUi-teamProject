import { useState, useEffect, useRef } from "react";
import axios from "axios"

import ModalGallery from '../ModalGallery'

import './style.scss';

function ActivityHero({ contentUuid }) {

  const widthPanel = window.innerWidth - 28 //larghezza div - padding

  const [ activitiesMedia, setActivitiesMedia ] = useState([]);
  const [ photoInModal, setPhotoInModal ] = useState(null);
  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ active, setActive ] = useState(0);

  const ref = useRef(null);

  const getActivitiesMedia = async () => {
    const { data: activitiesMedia } = await axios.get(`https://fe-tui-apiproxy.musement.com/activities/${contentUuid}/media`)
    setActivitiesMedia(activitiesMedia)
  }

  function fnScrollMouse () {
    if (ref.current.scrollLeft % widthPanel === 0) {
      setActive((ref.current.scrollLeft/widthPanel))
    }
  }

  useEffect(() => {
    if (contentUuid) {
      getActivitiesMedia();
    }
    // eslint-disable-next-line
  }, [contentUuid]);

  function openPhotoModal(contentUuid) {
    setPhotoInModal(contentUuid);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setPhotoInModal(null);
  }

  return (
    <div className="ActivityHero">

      {widthPanel > 768 ? 
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
          <button className="button" onClick={() => openPhotoModal(contentUuid)}>
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
      : <div className="hero_wrapper">
          <div className="hero_carousel">
            <section className="gallery">
              <div className="gallery_carousel" ref={ref} onScroll={() => fnScrollMouse()}>
                {activitiesMedia.map((photo) => (
                  <picture className="image gallery_carousel_image" key={photo.id}>
                    <source 
                      media="(max-width:320px)"
                      srcSet={`${photo.url}?q=50&fit=crop&auto=format&w=320&h=200 1x, ${photo.url}?q=50&fit=crop&auto=format&w=640&h=400 2x`}
                    />
                    <source 
                      media="(max-width:430px)"
                      srcSet={`${photo.url}?q=50&fit=crop&auto=format&w=430&h=268.75 1x, ${photo.url}?q=50&fit=crop&auto=format&w=860&h=537.5 2x`}
                    />
                    <source 
                      media="(max-width:1024px)"
                      srcSet={`${photo.url}?q=50&fit=crop&auto=format&w=1024&h=400 1x, ${photo.url}?q=50&fit=crop&auto=format&w=2048&h=800 2x`}
                    />
                    <img
                      className="image" 
                      src={photo.url}
                      alt={photo.title}
                    />
                  </picture>
                ))}
               
              </div>

              <div className="gallery_dots_box">
                {activitiesMedia.map((photo, index) => (
                  <div className={`dot ${index === active ? "dot__active" : ""}`} key={photo.id}>

                  </div>
                ))}
              </div>

            </section>
          
          </div>
      </div>
      }

      <ModalGallery
        activitiesMedia={activitiesMedia}
        isOpen={modalIsOpen}
        contentUuid={photoInModal}
        closeModal={closeModal}
      />

    </div>
  )
}

export default ActivityHero;
