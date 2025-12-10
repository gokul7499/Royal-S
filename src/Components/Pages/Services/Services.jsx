import React from 'react';
import './Services.css';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();


  const images = {
    img1: `${process.env.PUBLIC_URL}/services/img1.jpg`,
    img2: `${process.env.PUBLIC_URL}/services/img2.jpg`,
    img3: `${process.env.PUBLIC_URL}/services/img3.jpg`,
    img4: `${process.env.PUBLIC_URL}/services/img4.jpg`,
    img5: `${process.env.PUBLIC_URL}/services/img5.jpg`,
    img6: `${process.env.PUBLIC_URL}/services/img6.jpg`,
    img7: `${process.env.PUBLIC_URL}/services/img7.jpg`,
  };

  return (
    <>
 
      <div className="text-center py-5 mt-2">
        <h3 className="display-5 mt-5">{t('services.title')}</h3>
      </div>

     
      <div className="services-container">
        
        <section className="services-section">
          <h2 className="Our-Services">{t('services.our_services')}</h2>
          <div className="services-grid mt-5">
            <div className="service-card">
              <img src={images.img1} alt={t('services.web_development.title')} />
              <h3>{t('services.web_development.title')}</h3>
              <p>{t('services.web_development.description')}</p>
            </div>
            <div className="service-card">
              <img src={images.img2} alt={t('services.mobile_app_development.title')} />
              <h3>{t('services.mobile_app_development.title')}</h3>
              <p>{t('services.mobile_app_development.description')}</p>
            </div>
            <div className="service-card">
              <img src={images.img3} alt={t('services.digital_marketing.title')} />
              <h3>{t('services.digital_marketing.title')}</h3>
              <p>{t('services.digital_marketing.description')}</p>
            </div>
          </div>
        </section>

       
        <section className="services-section">
          <div className="services-grid">
            <div className="service-card">
              <img src={images.img4} alt={t('services.it_services.title')} />
              <h3>{t('services.it_services.title')}</h3>
              <p>{t('services.it_services.description')}</p>
            </div>
            <div className="service-card">
              <img src={images.img5} alt={t('services.organic_products.title')} />
              <h3>{t('services.organic_products.title')}</h3>
              <p>{t('services.organic_products.description')}</p>
            </div>
            <div className="service-card">
              <img src={images.img6} alt={t('services.soil_health_management.title')} />
              <h3>{t('services.soil_health_management.title')}</h3>
              <p>{t('services.soil_health_management.description')}</p>
            </div>
            <div className="service-card">
              <img src={images.img7} alt={t('services.internship_opportunities.title')} />
              <h3>{t('services.internship_opportunities.title')}</h3>
              <p>{t('services.internship_opportunities.description')}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Services;
