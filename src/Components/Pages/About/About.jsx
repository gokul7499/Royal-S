import React from 'react';
import './About.css'; // Custom CSS for About component
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  // Slider configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="about-container">
      {/* Landing Page Section */}
      <section className="landing-page">
        <div className="content-wrapper">
          <div className="text-section">
            <h1>{t('about.discover')}</h1>
            <p style={{ color: 'white' }}>{t('about.description')}</p>
            <div className="buttons">
              <button className="primary-btn">{t('about.watch_video')}</button>
              <button className="secondary-btn">{t('about.view_fact_sheet')}</button>
            </div>
          </div>
          <div className="image-section">
            <img
              src="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="People sitting on stairs"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <h2>{t('about.welcome')}</h2>
          <div className="about-content">
            <div className="about-text">
              <p dangerouslySetInnerHTML={{ __html: t('about.about_us_intro') }} />
              <p>{t('about.mission')}</p>
            </div>
            <div className="">
              <img
                src="data:image/jpeg;base64,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"
                alt="About us"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h3>{t('about.our_services')}</h3>
          <Slider {...settings}>
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="service-item">
                  <h4>{t(`about.service_${index + 1}`)}</h4>
                  <p>{t(`about.service_${index + 1}_desc`)}</p>
                </div>
              ))}
          </Slider>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h3>{t('about.our_values')}</h3>
          <ul className="values-list">
            {[
              'innovation',
              'integrity',
              'customer_centricity',
              'collaboration',
              'excellence',
            ].map((value, index) => (
              <li key={index} className="value-item">
                <h4>{t(`about.value_${value}`)}</h4>
                <p>{t(`about.value_${value}_desc`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
