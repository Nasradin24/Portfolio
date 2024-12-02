import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../css/Footer.css";
import imageAZ from "../assets/images/az-flag.png";
import imageEN from "../assets/images/en-flag.png";
import imageGE from "../assets/images/geo-flag.png";
import imagePLN from "../assets/images/pln-flag.png";

function Footer() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang =
      i18n.language === "az"
        ? "en"
        : i18n.language === "en"
        ? "ge"
        : i18n.language === "ge"
        ? "pln"
        : "az";
    i18n.changeLanguage(newLang);
  };

  const getFlag = () => {
    const language = i18n.language;
    if (language === "az") return imageAZ;
    if (language === "en") return imageEN;
    if (language === "ge") return imageGE;
    return imagePLN;
  };

  return (
    <footer className="footer-last">
      <p>© 2024 Guseinovi Nasradin.</p>
    </footer>
  );
}

export default Footer;