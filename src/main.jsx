import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import './index.css'
import App from './App.jsx'

import $ from 'jquery'
window.$ = $
window.jQuery = $

import AOS from 'aos'
import 'aos/dist/aos.css'
window.AOS = AOS


import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
window.PerfectScrollbar = PerfectScrollbar

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './assets/styles/css/themes/lite-purple.min.css'
import './assets/styles/css/themes/custom.css'
import './assets/styles/css/themes/genrex.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <ToastContainer />
  </StrictMode>,
)
