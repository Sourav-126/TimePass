import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Slideshow from "./Slideshow";
import HelpButton from "./HelpButton";

const languages = {
  en: { label: "English", flag: "🇬🇧" },
  es: { label: "Español", flag: "🇪🇸" },
  fr: { label: "Français", flag: "🇫🇷" },
  de: { label: "Deutsch", flag: "🇩🇪" },
  zh: { label: "中文", flag: "🇨🇳" },
};

const Navbar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [isLanguageBarOpen, setLanguageBarOpen] = useState(false);

  const handleContact = () => {
    navigate("/ContactUs");
  };

  const toggleLanguageBar = () => {
    setLanguageBarOpen(!isLanguageBarOpen);
  };
  const handleReservation = () => {
    navigate("/reservation");
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguageBarOpen(false);
  };

  const handleSignIn = () => {
    navigate("/signIn");
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-6">
          <img
            className="h-12 w-auto"
            src="https://imgs.search.brave.com/AWEKCOeugZFC_3RZWhwEK7aHRpW_SfmgjCYwOvUzC0g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly9nUXJfSUltOUpp/NFBGZS1uXzhXbFoz/by01MTg9LzMwN3gy/MTkyOjE2MjJ4MzUw/Ny9maXQtaW4vNTAw/eDUwMC85OWRlc2ln/bnMtY29udGVzdHMt/YXR0YWNobWVudHMv/OTUvOTU2OTQvYXR0/YWNobWVudF85NTY5/NDI3NA.jpeg"
            alt="Logo"
          />
          <input
            type="text"
            className="p-2 rounded bg-gray-700 text-white placeholder-gray-400 flex-grow w-96"
            placeholder={t("Places to go, Things to do, Hotels")}
          />
          <button className="p-2 px-4 rounded bg-gray-700 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-ou ">
            Search{" "}
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <a href="Home" className="text-white hover:underline">
            {t("Home")}
          </a>
          <button
            className="text-white mx-2 flex items-center"
            onClick={handleReservation}
          >
            Reservation
          </button>
          <a href="Guide" className="text-white hover:underline">
            {t("Book a Travel Guide")}
          </a>
          <button
            onClick={handleContact}
            className="text-white hover:underline"
          >
            {t("Contact Us")}
          </button>
          <div className="relative">
            <button
              onClick={toggleLanguageBar}
              className="text-white mx-2 flex items-center"
            >
              🌐
            </button>
            {isLanguageBarOpen && (
              <div className="absolute top-full right-0 mt-2 py-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                {Object.keys(languages).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    {languages[lang].flag} {languages[lang].label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="bg-blue-500 text-white border-none py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleSignIn}
          >
            {t("Sign-In")}
          </button>
        </div>
      </nav>
      <Slideshow />
      <HelpButton />
      {/* <CardSection /> */}
    </div>
  );
};

export default Navbar;
