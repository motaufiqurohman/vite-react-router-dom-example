import { useEffect } from "react";

const FAVICON_THEME_MAP = {
  light: "/react-router-logo-black.svg",
  dark: "/react-router-logo-white.svg",
};

const FaviconSwitcher = ({ isDarkMode }) => {
  useEffect(() => {
    let linkEl = document.querySelector("link[rel='icon']");
    if (!linkEl) {
      linkEl = document.createElement("link");
      linkEl.rel = "icon";
      linkEl.type = "image/svg+xml";
      document.head.appendChild(linkEl);
    }
    linkEl.href = isDarkMode ? FAVICON_THEME_MAP.dark : FAVICON_THEME_MAP.light;
  }, [isDarkMode]);

  return null;
};

export default FaviconSwitcher;
