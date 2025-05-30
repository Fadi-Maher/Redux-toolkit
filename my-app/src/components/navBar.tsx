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
    const newLang = e.target.value as 'en' | 'ar';
    i18n.changeLanguage(newLang);
    dispatch(setLanguage(newLang));
  };

  return (
    <header className="bg-white shadow p-5 flex justify-between items-center">
      <h1 className="text-xl font-bold">{t("My Shop")}</h1>
      <nav className="space-x-6">
        <Link to="/" className="hover:underline  ">
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
           className="border p-1 rounded"
        >
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
      </nav>
    </header>
  );
}

export default NavBar;
