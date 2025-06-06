 import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./i18"
import NavBar from "./components/navBar";
import Footer from "./components/footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <NavBar/>
        <App />
        <Footer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
