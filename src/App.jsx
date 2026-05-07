import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { useEffect, useState } from 'react'
import './App.css'
import Works from "./pages/Works";
import Services from "./pages/Services";
import Capabilities from "./pages/Capabilities";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Clients from "./pages/Clients";

import $ from 'jquery'
import AOS from 'aos';
import PerfectScrollbar from 'perfect-scrollbar'
import Sangeetha from "./pages/sangeetha";
import Swami from "./pages/Swami";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [count, setCount] = useState(0)
   useEffect(() => {
     $("#preloader").fadeOut()

    AOS.init({
      duration: 1200
    })

    $(".perfect-scrollbar, [data-perfect-scrollbar]").each(function () {

      const ps = new PerfectScrollbar(this, {
        suppressScrollX: $(this).data("suppress-scroll-x"),
        suppressScrollY: $(this).data("suppress-scroll-y")
      })

    })

    $(".handle").on("click", function () {
      $(".customizer").toggleClass("show")
    })

    $(".change-bg").on("click", function () {

      const bg = $(this).attr("data-class")

      $("#landing_wrap")
        .removeClass()
        .addClass("landing-" + bg)
    })

    $(window).on("load", function () {
      $("#loader").fadeOut()
      $("#preloader").delay(500).fadeOut("slow")
    })

    return () => {
      $(window).off("load")
      $(".handle").off("click")
      $(".change-bg").off("click")
    }

  }, [])
  return (
    <>
      <BrowserRouter>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/services" element={<Services />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team/sangeetha" element={<Sangeetha />} />
            <Route path="/team/swami" element={<Swami />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
