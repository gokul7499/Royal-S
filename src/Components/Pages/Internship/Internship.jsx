import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Internship.css';
import "@fontsource/poppins"; 
import { useTranslation } from 'react-i18next';

function Internship() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: t('internship.real_experience'),
      content: t('internship.real_experience_content'),
    },
    {
      title: t('internship.coaching_support'),
      content: t('internship.coaching_support_content'),
    },
    {
      title: t('internship.award_winning_courses'),
      content: t('internship.award_winning_courses_content'),
    },
    {
      title: t('internship.tailored_internship'),
      content: t('internship.tailored_internship_content'),
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div>
    
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="Give mt-5">
            {t('internship.give_yourself')} <br />
            <span className="highlight">{t('internship.unbeatable_advantage')}</span>
          </h1>
          <p className="platform">{t('internship.platform_description')}</p>
          <div className="buttons">
          <button className="enroll-btn" onClick={() => navigate("/apply")}>
              {t("internship.enroll_now")}
            </button>
            <button className="how-btn" onClick={() => alert(t('internship.how_it_works') + " clicked!")}>
              {t('internship.how_it_works')}
            </button>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://www.virtualinternships.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/03/inturn-header.png.webp"
            alt={t('internship.hero_image_alt')}
          />
        </div>
      </div>


      <div className="career-section">
        <div className="background-shapes">
          <div className="shape shape-left"></div>
          <div className="shape shape-right"></div>
        </div>
        <div className="career-content">
          <h2 className="Internship-h2">{t('internship.career_reality')}</h2>
          <p style={{ fontSize: '15px', fontFamily: "monospace" }}>{t('internship.career_description')}</p>
        </div>
      </div>


      <div className="slider-container">
        <h2 style={{ fontWeight: 'bold', fontSize: '45px', color: 'white' }}>
          {t('internship.virtual_internships')} <span className="highlight">{t('internship.virtual_internships_description')}</span>
        </h2>
        <p style={{ color: 'white' }}>{t('internship.virtual_internships_description')}</p>

        <div className="slider">
          <button className="prev-btn" onClick={prevSlide}>❮</button>
          <div className="slide" key={currentSlide}>
            <h3 style={{ color: 'skyblue', fontWeight: 'bold' }}>{slides[currentSlide].title}</h3>
            <p style={{ color: "white" }}>{slides[currentSlide].content}</p>
          </div>
          <button className="next-btn" onClick={nextSlide}>❯</button>
        </div>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

  
      <div className="launch-career-container">
        <h2 className="title">{t('internship.launch_your_career')}</h2>
        <p className="subtitle">{t('internship.launch_description')}</p>
        <div className="stats-container">
          <div className="stat-box">
            <h3 className="stat-number purple">250k+</h3>
            <p className="stat-title">{t('internship.global_internships')}</p>
            <p className="stat-subtitle">{t('internship.internships_available')}</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number teal">80+</h3>
            <p className="stat-title">{t('internship.countries')}</p>
            <p className="stat-subtitle">{t('internship.internships_worldwide')}</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number red">2</h3>
            <p className="stat-title">{t('internship.professional_coaching')}</p>
            <p className="stat-subtitle">{t('internship.coaching_calls')}</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number yellow">1 in 4</h3>
            <p className="stat-title">{t('internship.interns')}</p>
            <p className="stat-subtitle">{t('internship.further_opportunities')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internship;
