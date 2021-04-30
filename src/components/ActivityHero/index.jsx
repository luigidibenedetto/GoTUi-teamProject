import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { translateSelector } from '../../utils/translations'

import ModalGallery from '../ModalGallery'

import './style.scss';

function ActivityHero({ activities, activitiesMedia }) {
  const widthPanel = window.innerWidth - 28 //larghezza div - padding
  const imageHero = activities.cover_image_url;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [active, setActive] = useState(0);
  const newImageHero = {
    id: 1,
    is_cover: true,
    title: 'prova',
    type: 'image',
    url: `${imageHero}`
  }
  const arr1 = [newImageHero]
  const NewActivitiesMedia = arr1.concat(activitiesMedia)
  const ref = useRef(null);

  const $t = useSelector(translateSelector)

  function fnScrollMouse () {
    if (ref.current.scrollLeft % widthPanel === 0) {
      setActive((ref.current.scrollLeft / widthPanel))
    }
  }

  function openPhotoModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.height = `100vh`
      document.body.style.overflow = `hidden`
    } else {
      document.body.style.height = ``
      document.body.style.overflow = ``
    }
  }, [modalIsOpen]);

  return (
    <div className="ActivityHero">

      {widthPanel > 768 ?
        <div className="hero_wrapper">
          <div className="hero_image">
            <picture className="image">
              <source
                media="(max-width:320px)"
                srcSet={`${imageHero}?q=50&fit=crop&auto=format&w=320&h=200 1x, ${imageHero}?q=50&fit=crop&auto=format&w=640&h=400 2x`}
              />
              <source
                media="(max-width:430px)"
                srcSet={`${imageHero}?q=50&fit=crop&auto=format&w=430&h=268.75 1x, ${imageHero}?q=50&fit=crop&auto=format&w=860&h=537.5 2x`}
              />
              <source
                media="(max-width:1024px)"
                srcSet={`${imageHero}?q=50&fit=crop&auto=format&w=1024&h=400 1x, ${imageHero}?q=50&fit=crop&auto=format&w=2048&h=800 2x`}
              />
              <source
                media="(max-width:1441px)"
                srcSet={`${imageHero}?q=50&fit=crop&auto=format&w=1441&h=400 1x, ${imageHero}?q=50&fit=crop&auto=format&w=2882&h=800 2x`}
              />
              <source
                media="(min-width:1441px)"
                srcSet={`${imageHero}?q=50&fit=crop&auto=format&w=1680&h=600 1x, ${imageHero}?q=50&fit=crop&auto=format&w=3360&h=1200 2x`}
              />
              <img
                className="image" alt={activities.title}
                src={`${imageHero}?q=50&fit=crop&auto=format&w=1024&h=400`}
              />
            </picture>
          </div>

          <section className="button_wrapper">
            {activitiesMedia.length !== 0 && <button className="button" onClick={() => openPhotoModal()}>
              <div className="button_icoBox">
                <div className="icoBox_icon">
                  <img
                    className="icon"
                    src="https://tui-b2c-static.imgix.net/icons/gallery.svg"
                    alt="prova"
                  />
                </div>
                <span>{$t('event.lightbox.btn.view')}</span>
              </div>
            </button>}
          </section>

        </div>
        : <div className="hero_wrapper">
          <div className="hero_carousel">
            <section className="gallery">
            {activitiesMedia.length === 0 &&
                  <div className="hero_image">
                    <picture className="image">
                      <source
                        media="(max-width:320px)"
                        srcSet={`${imageHero}?q=50&fit=crop&auto=format&w=320&h=200 1x, ${imageHero}?q=50&fit=crop&auto=format&w=640&h=400 2x`}
                      />
                      <source
                        media="(max-width:430px)"
                        srcSet={`${imageHero}?q=50&fit=crop&auto=format&w=430&h=268.75 1x, ${imageHero}?q=50&fit=crop&auto=format&w=860&h=537.5 2x`}
                      />
                      <source
                        media="(max-width:1024px)"
                        srcSet={`${imageHero}?q=50&fit=crop&auto=format&w=1024&h=400 1x, ${imageHero}?q=50&fit=crop&auto=format&w=2048&h=800 2x`}
                      />
                      <source
                        media="(max-width:1441px)"
                        srcSet={`${imageHero}?q=50&fit=crop&auto=format&w=1441&h=400 1x, ${imageHero}?q=50&fit=crop&auto=format&w=2882&h=800 2x`}
                      />
                      <source
                        media="(min-width:1441px)"
                        srcSet={`${imageHero}?q=50&fit=crop&auto=format&w=1680&h=600 1x, ${imageHero}?q=50&fit=crop&auto=format&w=3360&h=1200 2x`}
                      />
                      <img
                        className="image" alt={activities.title}
                        src={`${imageHero}?q=50&fit=crop&auto=format&w=1024&h=400`}
                      />
                    </picture>
                  </div>
                }
              <div className="gallery_carousel" ref={ref} onScroll={() => fnScrollMouse()}>
                {NewActivitiesMedia.map((photo) => (
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
                {NewActivitiesMedia.map((photo, index) => (
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
        closeModal={closeModal}
      />

    </div>
  )
}

export default ActivityHero;
