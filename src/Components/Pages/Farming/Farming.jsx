import React from 'react';
import './Farming.css';
import { useTranslation } from 'react-i18next';

function Farming() {
  const { t } = useTranslation();

  const videos = {
    video1: `${process.env.PUBLIC_URL}/Farming/farmer.mp4`,
  };

  const images = {
    img1: `${process.env.PUBLIC_URL}/Farming/IMG-1.jpg`,
    img2: `${process.env.PUBLIC_URL}/Farming/IMG-2.JPG`,
    img3: `${process.env.PUBLIC_URL}/Farming/IMG-3.JPG`,
    img4: `${process.env.PUBLIC_URL}/Farming/IMG-4.JPG`,
    img5: `${process.env.PUBLIC_URL}/Farming/IMG-5.JPG`,
  };

  return (
    <div className="farming-container">
      <div className="farming-empowering text-center py-5">
        <h3 className="display-5 mt-5">{t('farming.title')}</h3>
        <p className="Contact-Royal highlight">{t('farming.company')}</p>
      </div>

      <div className="container">
        <p className="farming-purpose text-center mt-4">{t('farming.purpose')}</p>
      </div>

      <div className="container mt-5">
        <div className="row">
          {/* Video Card */}
          <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card">
              <video autoPlay loop playsInline controls className="card-video">
                <source src={videos.video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t('farming.card_titles.traditional_farming')}</h5>
                <p className="card-text">{t('farming.card_descriptions.traditional_farming_desc')}</p>
                <a href="#!" className="btn btn-primary mt-auto">{t('farming.go_somewhere')}</a>
              </div>
            </div>
          </div>

          {/* Image Cards */}
          {[images.img1, images.img2, images.img3, images.img4, images.img5].map((img, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
              <div className="card">
                <img src={img} className="card-img-top" alt={`Farming Image ${index + 1}`} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{t(`farming.card_titles.traditional_farming`)}</h5>
                  <p className="card-text">{t(`farming.card_descriptions.traditional_farming_desc`)}</p>
                  <a href="#!" className="btn btn-primary mt-auto">{t('farming.go_somewhere')}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Farming;
