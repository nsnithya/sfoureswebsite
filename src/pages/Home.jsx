import Capabilities from "./Capabilities";
import Services from "./Services";
import Works from "./Works";
import Best from "./Best";
import Provide from "./Provide";
import Love from "./Love";
import Pricing from "./Pricing";
import Team from "./Clients";
import Testimonials from "./Testimonials";
import News from "./News";
import Faq from "./Faq";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import Clients from "./Clients";
import introImage from "../assets/images/landing/svg/v6-header.svg"

function Home() {
    return (
        <>
            {/* <!-- ============ Main content start ============= --> */}
            <div className="main-content-wrap">

                {/* <!-- intro-section --> */}

                <section id="intro-wrap" className="intro-six-Wrap text-left text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 intro-six-LeftSection pb-5">
                                <h1 className="introTitle font-weight-bold text-white text-42 mb-3 t-shadow">Build
                                    Relationships That infulence Your Business
                                </h1>
                                <p className="introDescription text-20 mb-4">Meet SFOURES fastest-growing Business Management, and IT consulting companies in Northern Virginia.</p>
                                <div className="mb-5 lead">
                                    <ul className="list-inline">
                                        <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>Application Development,
                                            Application Modernization
                                        </li>

                                        <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>
                                            Microservices, Cloud Migration</li>
                                        <li className="mb-3"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>
                                            Data Analytics, Business Intelligence</li>
                                    </ul>
                                </div>
                                <div className="intro-six-Buttons">
                                    <Link name="" id="" to="/contact" className="btn half-button btn-outline-white btn-lg pl-5 pr-5 pb-2 mr-2 mb-4 text-uppercase" role="button">

                                       Reach Us
                                    </Link>
                                    {/* <a id="" routerlink="/sessions/signup" className="btn half-button btn-warning btn-lg pl-5 pr-5 pb-2 mb-4 text-uppercase" href="#" role="button">

                                        Sign up
                                    </a> */}

                                </div>

                            </div>
                            <div className="col-md-6 intro-six-RightSection d-flex align-items-center">

                                <div className="intro-six-ProductImage">

                                    <img src={introImage} className="img-responsive" alt="img-intro" />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlay">

                    </div>

                </section>

                {/* <!-- start-features --> */}
                < Capabilities />
                {/* <!-- end-features --> */}

                {/* <!-- start-services --> */}
                < Services />
                {/* <!-- end-services --> */}


                {/* <!-- our-works --> */}
                {/* < Works /> */}

                {/* <!-- end::our-works --> */}


                {/* <!-- start::left-img --> */}
                < Provide />
                {/* <!-- end::left-img --> */}

                {/* <!-- best --> */}
                < Best />
                {/* <!-- end::best --> */}



                {/* <!-- start::faq --> */}
                < Faq />
                {/* <!-- end::faq --> */}


                {/* <!-- start::right-img --> */}
                < Love />

                {/* <!-- end::right-img --> */}

                {/* <!-- start::price-1 --> */}
                {/* < Pricing /> */}
                {/* <!-- end::price-1 --> */}

                {/* <!-- start::team --> */}
                {/* < Team /> */}
                {/* <!-- end::team --> */}


                {/* <!-- start::testimonial --> */}
                < Clients />
                {/* <!-- end::testimonial --> */}


                {/* <!-- start::news-2 --> */}
                < News />
                {/* <!-- end::news-2 --> */}



                {/* <!-- start::contact-form --> */}
                {/* < Contact /> */}
            </div>
        </>
    );
}

export default Home;