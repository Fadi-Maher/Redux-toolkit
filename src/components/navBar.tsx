import { Link } from "react-router-dom";
import { selectTotalQuantity } from "../slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../slices/languageSlice";
import type { RootState } from "../store/store";
import { useState } from "react";

function NavBar() {
  const totalQuantity = useSelector(selectTotalQuantity);
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const lang = useSelector((state: RootState) => state.language.lang);

  // const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   i18n.changeLanguage(e.target.value);
  //   // Optional: for RTL support
  //   document.documentElement.dir = e.target.value === "ar" ? "rtl" : "ltr";
  // };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as "en" | "ar";
    i18n.changeLanguage(newLang);
    dispatch(setLanguage(newLang));
  };

  return (
    <header className="   p-5 flex justify-between   items-center  bg-[#1e2939] border-2 border-gray-700">
      <div className="flex gap-2 items-center justify-between">
        <img src="/assets/apex.svg" alt="React Logo" className="w-12 h-12" />
        <h1 className="text-xl font-extrabold text-white">{t("APEX")}</h1>
      </div>

      <button
        className="md:hidden  text-white cursor-pointer flex justify-start ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>


   
         <nav  className={`${
          menuOpen
            ? "flex flex-col gap-4 absolute top-20 right-5  bg-[#4984e9] opacity-80 p-4 rounded-md"
            : "hidden"
        } md:flex md:static md:flex-row md:gap-6 md:bg-transparent md:p-0 text-white font-bold`}
      >
        {" "}
        <Link to="/" className="hover:underline  ">
          {t("Home")}
        </Link>{" "}
        <Link to="/products" className="hover:underline  ">
          {t("Products")}
        </Link>{" "}
        {""}
        <Link to="/cart" className="hover:underline">
          {t("Cart")}{" "}
        </Link>
        <Link to="/categories" className="hover:underline">
          {t("Categories")}{" "}
        </Link>
        <span className="cart-count">
          {" "}
          {t("item")} {totalQuantity}🛒{" "}
        </span>
        <select
          value={lang}
          onChange={handleChange}
          className="border p-1 rounded text- bg-[#1e2939]"
        >
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
      </nav>

      {/* mobile controls */}
      <div className="flex items-center md:hidden">
        {/* <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          >
            {/* burger / close icon */}
        {/* {open ? ( */}

        {/* ) : (
              // <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              //   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              // </svg>
            )} */}
        {/* </button> */}
      </div>
    </header>
  );
}

export default NavBar;
