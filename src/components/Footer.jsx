import { Link } from "react-router-dom";
import Certifications from "../pages/Certifications";
import revoxPro from "../assets/images/landing/logo/revox_pro.png";

function Footer() {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="flex-grow-1"></div>
            {/* <!-- start subscribe section --> */}
            {/* <section id="subscribe-wrap" className="subscribe p-t-b-80">
                        <div className="container">



                            <div className="row text-center">
                                {/* <!-- start::subscribe-1 --> */}
            {/* <div data-aos="fade-up" className="col-md-12">
                                    <div className="subscribe-1">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="subscribe-1__start mt-5 mb-5">
                                                    <h2 className="heading mb-5">Subscribe to Our Channel</h2>
                                                    <div className="subscribe-input">
                                                        <form className="form-inline justify-content-center">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control dexam-input h-55" placeholder="Enter your email address" required=""/>
                                                            </div>
                                                            <button type="submit" className="btn btn-gradient h-55 text-19">
                                                                Subscribe Now
                                                            </button>
                                                        </form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
            {/* <!-- end::subscribe-1 --> */}
            {/* </div>

                        </div>
                    </section>  */}
            {/* <!-- end subscribe section --> */}
            <Certifications/>

            <section className="footer_wrap" id="footer-wrap">
                <div className="container">
                    <div className="row">


                        <div data-aos="fade-up" className="col-md-4 mb-4">
                            <div className="o-hidden text-left">



                                <div className="">
                                    <h4 className="card-title font-weight-bold">SFoures</h4>
                                    <p className="">SFoures has been supporting Commercial and Civilian agencies since 2012. We are specialized in Application Development, Application Modernization, Microservices, Cloud Migration, Data analytics and Business Intelligence using Al/ML and emerging/disruptive technologies and even more innovative solutions to support our US Federal Government, State, Local and Commercial customers.
                                    </p>
                                </div>


                            </div>
                        </div>
                        {/* <!-- end of col --> */}
                        {/* <div data-aos="fade-up" className="col-md-3 mb-4">
                                    <div className="o-hidden text-left">



                                        <div className="">
                                            <h4 className="card-title font-weight-bold">Other Pages</h4>
                                            <div className="mb-5 lead">
                                                <ul className="list-inline">
                                                    <li className="mb-3"> <a href="#">Marketing</a></li>
                                                    <li className="mb-3"><a href="#">Campaign</a>
                                                    </li>
                                                    <li className="mb-3"> <a href="#"> Digital Agency</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                </div> */}
                        {/* <!-- end of col --> */}
                        <div data-aos="fade-up" className="col-md-4 mb-4 mb-lg-0 mb-md-0">
                            <div className="o-hidden text-left">

                                <div className="">
                                    <h4 className="card-title font-weight-bold">Quick Links</h4>
                                    <div className="mb-5 lead">
                                        <ul className="list-inline">
                                            <li className="mb-3"><Link to="/about"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>About Us</Link>
                                            </li>
                                            <li className="mb-3"><Link to="/services"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>Services</Link>
                                            </li>
                                            <li className="mb-3"><Link to="/capabilities"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>Capablilties</Link>
                                            </li>
                                            <li className="mb-3"><Link to="/clients"><i className="eva eva-checkmark-outline mr-2 text-warning"></i>
                                                Clients</Link></li>

                                            <li className="mb-3"><a href="/files/SFOURES_LLC_CAPABILITIES_STATEMENT.pdf" download><i className="eva eva-checkmark-outline mr-2 text-warning"></i>
                                                Download Capabilities</a></li>
                                        </ul>
                                    </div>


                                </div>
                            </div>
                        </div>
                        {/* <!-- end of col --> */}
                        <div data-aos="fade-up" className="col-md-4 mb-lg-0 mb-md-0">
                            <div className="o-hidden text-left">

                                <div className="">
                                    <h4 className="card-title font-weight-bold">Contact Info</h4>
                                    <div className="address-wrap mb-3">

                                        <ul className="list-group list-unstyled">
                                            <li className=""> <i className="eva eva-pin-outline mr-2"></i>23479 Concord Knoll Ct, Aldie, Virginia 20105-60508, United States</li>

                                        </ul>
                                    </div>
                                    <div className="address-wrap mb-3">

                                        <ul className="list-group list-unstyled">
                                            <li className=""><i className="eva eva-email-outline mr-2"></i>contact@sfoures.com
                                            </li>

                                        </ul>
                                    </div>

                                    <div className="address-wrap mb-3">

                                        <ul className="list-group list-unstyled">
                                            <li className=""><i className="eva eva-phone-call-outline mr-2"></i>
                                                +1(703) 626-6557</li>

                                        </ul>
                                    </div>


                                    <section className="social-wrap">

                                        <div className="social-btns-wrap">

                                            <a className="social-btn text-30 facebook ml-0" href="#"><i className="eva eva-facebook"></i></a>

                                            <a className="social-btn text-30 twitter" href="#"><i className="eva eva-twitter"></i></a>

                                            <a className="social-btn text-30 google" href="#"><i className="eva eva-google"></i></a>
                                            <a className="social-btn text-30 facebook" href="https://www.linkedin.com/company/sfoures" target="_blank"><i className="eva eva-linkedin"></i></a>

                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end of col --> */}
                    </div>
                </div>
            </section>
            {/* <!-- end footer --> */}

            {/* <div class="landing-gradient-blue-red"> © Genrex. All rights reserved. </div> */}
            <div className="text-center landing-gradient-blue-red">
                <div className="overlay text-white">
                <p>Copyright © 2012 - {new Date().getFullYear()} SFOURES. All rights reserved. Designed and Developed By
                    <a href="https://www.revoxpro.com/" target="_blank">
                        <img className="genrex-logo" src={revoxPro} alt="RevoX Pro"/>
                    </a>
                </p>
                </div>
            </div>

            {/* <!-- customizer start --> */}
            {/* <div className="customizer card show">
                <div className="row">
                    <div className="col-md-12">
                        <div className="handle">
                            <i className="eva eva-award-outline animated infinite rotateInUpLeft"></i>
                        </div>
                    </div>
                    <div className="col-md-12">

                        <div className="colors_wrap" data-perfect-scrollbar data-suppress-scroll-x="true">
                            <div className="card-body">
                                <p className="landing-gradient-blue-red"><strong className="eva">SBA 8(a), WOSB, MBE and SWAM Certified company</strong></p>
                                {/* <h2 className="card-title">Solid Colors</h2>
                                        <a name="" id="" data-className="teal" className="change-bg btn teal btn-circle m-2" role="button"></a>
                                        <a name="" id="" data-className="blue" className="change-bg btn blue btn-circle m-2" role="button"></a>
                                        <a data-className="midnight-blue" className="change-bg btn midnight-blue btn-circle m-2" role="button"></a>
                                        <a data-className="indigo" className="change-bg btn indigo btn-circle m-2" role="button"></a>
                                        <a data-className="indigo-light" className="change-bg btn indigo-light btn-circle m-2" role="button"></a>
                                        <a data-className="indigo-deep" className="change-bg btn indigo-deep btn-circle m-2" role="button"></a>
                                        <a data-className="indigo-ocean" className="change-bg btn indigo-ocean btn-circle m-2" role="button"></a>
                                        <a data-className="dark-purple" className="change-bg btn dark-purple btn-circle m-2" role="button"></a>
                                        <a data-className="purple" className="change-bg btn purple btn-circle m-2" role="button"></a>
                                        <a data-className="pink" className="change-bg btn pink btn-circle m-2" role="button"></a>
                                        <a data-className="pink-light" className="change-bg btn pink-light btn-circle m-2" role="button"></a>
                                        <a data-className="red" className="change-bg btn red btn-circle m-2" role="button"></a>
                                        <a data-className="red-light" className="change-bg btn red-light btn-circle m-2" role="button"></a>
                                        <a data-className="red-deep" className="change-bg btn red-deep btn-circle m-2" role="button"></a>
                                        <a data-className="red-extra" className="change-bg btn red-extra btn-circle m-2" role="button"></a>
                                        <a data-className="gray" className="change-bg btn gray btn-circle m-2" role="button"></a>
                                        <a data-className="light-black" className="change-bg btn light-black btn-circle m-2" role="button"></a>
                                        <a data-className="slate-gray" className="change-bg btn slate-gray btn-circle m-2" role="button"></a>
                                        <a data-className="orange" className="change-bg btn orange btn-circle m-2" role="button"></a>
                                        <a data-className="brown" className="change-bg btn brown btn-circle m-2" role="button"></a> */}

                            {/* </div> */}

                            {/*<div className="card-body">
                                        <h2 className="card-title">Gradient Colors</h2>
                                         <a data-className="gradient-purple-indigo" className="change-bg btn gradient-purple-indigo btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-blue-red" className="change-bg btn gradient-blue-red btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-red-orange" className="change-bg btn gradient-red-orange btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-black-blue" className="change-bg btn gradient-black-blue btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-black-gray" className="change-bg btn gradient-black-gray btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-steel-gray" className="change-bg btn gradient-steel-gray btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-grade-gray" className="change-bg btn gradient-grade-gray btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-cristal-clear" className="change-bg btn gradient-cristal-clear btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-cool-blue" className="change-bg btn gradient-cool-blue btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-moonlight-asteriod" className="change-bg btn gradient-moonlight-asteriod btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-hervey" className="change-bg btn gradient-hervey btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-altra-violet" className="change-bg btn gradient-altra-violet btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-slight-ocean" className="change-bg btn gradient-slight-ocean btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-red-sunset" className="change-bg btn gradient-red-sunset btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-quepal" className="change-bg btn gradient-quepal btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-lawrencium" className="change-bg btn gradient-lawrencium btn-circle m-2" role="button"></a>
                                        <a data-className="gradient-meridian" className="change-bg btn gradient-meridian btn-circle m-2" role="button"></a> */}
                            {/* <!-- <a data-className="gradient-altra-violet')" className="btn gradient-altra-violet btn-circle m-2" role="button"></a> -->  */}

                            {/* </div> */}
                        {/* </div>
                    </div>
                </div>
            </div> */} 
            {/* <!-- end of customizer --> */}
        </>
    );
}

export default Footer;