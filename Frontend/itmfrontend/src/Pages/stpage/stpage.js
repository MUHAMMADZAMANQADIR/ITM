import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header/index"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function Stpage() {
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
