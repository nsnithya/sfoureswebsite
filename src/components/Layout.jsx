import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  const location = useLocation();

  const isHome = location.pathname === "/";
  return (
    <>
      <Header />
      {!isHome && (
        <div className="main-content-wrap">
          <section id="intro-wrap" className="intro-six-Wrap text-left text-white">
             <div className="overlay"></div>
          </section>
        </div>
      )}
      {children}
      {/* </main> */}
      <Footer />
    </>
  );
}

export default Layout;