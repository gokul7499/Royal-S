import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false); // Close menu after language change on mobile
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center"
              onClick={closeMenu}
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/final_logo-removebg-preview.png`}
                alt="Logo"
                className="h-10 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              to="/"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors duration-200 font-bold no-underline"
            >
              {t("navbar.home")}
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors duration-200 font-bold no-underline"
            >
              {t("navbar.about")}
            </Link>
            <Link
              to="/internship"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors duration-200 font-bold no-underline"
            >
              {t("navbar.internship")}
            </Link>
            <Link
              to="/crops"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors font-bold duration-200 no-underline"
            >
              Crops
            </Link>
            <Link
              to="/farming"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200 no-underline"
            >
              {t("navbar.farming")}
            </Link>
            <Link
              to="/services"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200 no-underline"
            >
              {t("navbar.services")}
            </Link>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4 ml-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 no-underline"
            >
              {t("navbar.contact")}
            </Link>

            <div className="flex space-x-1">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 rounded text-sm ${i18n.language === "en" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("hi")}
                className={`px-3 py-1 rounded text-sm ${i18n.language === "hi" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                aria-label="Switch to Hindi"
              >
                HI
              </button>
              <button
                onClick={() => changeLanguage("mr")}
                className={`px-3 py-1 rounded text-sm ${i18n.language === "mr" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                aria-label="Switch to Marathi"
              >
                MR
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 bg-transparent hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-14 w-14 text-current !important"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-8 text-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 text-center font-bold ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link
            to="/"
            className="block px-3 py-3 rounded-md text-base font-bold  text-gray-900 hover:text-blue-600 hover:bg-gray-50 no-underline"
            onClick={closeMenu}
          >
            {t("navbar.home")}
          </Link>
          <Link
            to="/about"
            className="block px-3 py-3 rounded-md text-base font-bold  text-gray-900 hover:text-blue-600 hover:bg-gray-50 no-underline"
            onClick={closeMenu}
          >
            {t("navbar.about")}
          </Link>
          <Link
            to="/internship"
            className="block px-3 py-3 rounded-md text-base font-bold  text-gray-900 hover:text-blue-600 hover:bg-gray-50 no-underline"
            onClick={closeMenu}
          >
            {t("navbar.internship")}
          </Link>
          <Link
            to="/crops"
            className="block px-3 py-3 rounded-md text-base font-bold  text-gray-900 hover:text-blue-600 hover:bg-gray-50 no-underline"
            onClick={closeMenu}
          >
            Crops
          </Link>
          <Link
            to="/farming"
            className="block px-3 py-3 rounded-md text-base font-bold  text-gray-900 hover:text-blue-600 hover:bg-gray-50 no-underline"
            onClick={closeMenu}
          >
            {t("navbar.farming")}
          </Link>
          <Link
            to="/services"
            className="block px-3 py-3 rounded-md text-base font-bold  text-gray-900 hover:text-blue-600 hover:bg-gray-50 no-underline"
            onClick={closeMenu}
          >
            {t("navbar.services")}
          </Link>

          <div className="pt-4 pb-3 border-t border-gray-200">
            <Link
              to="/contact"
              className="block w-full text-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 no-underline mb-4"
              onClick={closeMenu}
            >
              {t("navbar.contact")}
            </Link>

            <div className="flex justify-center space-x-2">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-4 py-2 rounded text-sm ${i18n.language === "en" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("hi")}
                className={`px-4 py-2 rounded text-sm ${i18n.language === "hi" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                aria-label="Switch to Hindi"
              >
                HI
              </button>
              <button
                onClick={() => changeLanguage("mr")}
                className={`px-4 py-2 rounded text-sm ${i18n.language === "mr" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                aria-label="Switch to Marathi"
              >
                MR
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;