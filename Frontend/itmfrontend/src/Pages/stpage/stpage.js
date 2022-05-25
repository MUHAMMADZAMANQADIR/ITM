import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";


import Home from "./Pages/Home";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

import ScrollToTop from "./components/ScrollToTop/index";

/**const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

 * 
 * @returns import Home from "./Pages/Home";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

import ScrollToTop from "./components/ScrollToTop/index";
 */
function Stpage() {
  console.log("in stpage")
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <ScrollToTop />
        <Header />
        <Home />
        <Footer />
      </Suspense>
    </>
  );
}

export default Stpage;
