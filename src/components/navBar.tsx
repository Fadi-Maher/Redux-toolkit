import { Link } from "react-router-dom";
import { selectTotalQuantity } from "../slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../slices/languageSlice";
import type { RootState } from "../store/store";

function NavBar() {
  const totalQuantity = useSelector(selectTotalQuantity);
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
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
    <header className="   p-5 flex justify-between items-center  bg-[#1e2939] border-2 border-gray-700">
      <div className="flex gap-2 items-center">
        <img src="/assets/apex.svg" alt="React Logo" className="w-12 h-12" />

        <h1 className="text-xl font-extrabold text-white">{t("APEX")}</h1>
      </div>

      <nav className="space-x-6 text-white font-bold">
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
        🛒{" "}
        <span className="cart-count">
          {" "}
          {t("item")} {totalQuantity}
        </span>
        <select
          value={lang}
          onChange={handleChange}
          className="border p-1 rounded text- bg-[#1e2939]"
        >
          <option  value="en">EN</option>
          <option value="ar">AR</option>
        </select>
      </nav>
    </header>
  );
}

export default NavBar;
