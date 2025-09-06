import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#1e2939] text-white py-6 mt-10 border-t border-gray-700">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-bold">APEX</h2>
          <p className="text-sm text-gray-400">{t("Your trusted store")}</p>
        </div>

        <ul className="flex gap-6 text-sm">
          <li>
            <a href="/" className="hover:text-gray-300">
              {t("Home")}
            </a>
          </li>
          <li>
            <a href="/products" className="hover:text-gray-300">
              {t("Products")}
            </a>
          </li>
          <li>
            <a href="/categories" className="hover:text-gray-300">
              {t("Categories")}
            </a>
          </li>
          <li>
            <a href="/cart" className="hover:text-gray-300">
              {t("Cart")}
            </a>
          </li>
        </ul>
      </div>

      <div className="text-center text-gray-500 text-xs mt-4">
        &copy; {new Date().getFullYear()} APEX. {t("All rights reserved.")}.
      </div>
      <div className="text-center text-gray-500 text-xs mt-4">
        &copy;   {t("Developed by <Fady/>")}
      </div>
    </footer>
  );
};

export default Footer;
