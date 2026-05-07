import slider6 from "../assets/images/landing/svg/slider6.svg";
function Love() {
    return (
        <section className="right-image-wrap p-t-b-80 light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 section-header mb-5">
                        <h2 className="font-weight-bold">What Customer Love Most</h2>
                        <p>Our customers value our commitment to quality, reliability, and innovation.
                            We consistently deliver solutions that exceed expectations and drive real results.</p>

                    </div>

                    <div className="col-md-12 col-lg-6 col-sm-12 mb-4 mb-lg-0">
                        <div className="row m-0">
                            <div data-aos="fade-right" className="col-md-6 col-sm-6 mb-4">
                                <div className="card">

                                    <div className="card-body d-flex pt-4 pb-4">
                                        <div className="mr-2">
                                            <i className="eva eva-pie-chart-outline mr-1 text-36"></i>
                                        </div>
                                        <div className="">
                                            <h4 className="card-title font-weight-bold">Full Analytics
                                            </h4>
                                            <p className="m-0">Contrary to popular belief, Lorem Ipsum is not
                                                simply
                                                random text.</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            {/* <!-- end of col  --> */}
                            <div data-aos="fade-left" className="col-md-6 col-sm-6 mb-4">
                                <div className="card">

                                    <div className="card-body d-flex pt-4 pb-4">
                                        <div className="mr-2"><i className="eva eva-clock-outline mr-1 text-36"></i>
                                        </div>
                                        <div className="">
                                            <h4 className="card-title font-weight-bold"> Diagnose quickly</h4>
                                            <p className="m-0">Contrary to popular belief, Lorem Ipsum is not
                                                simply
                                                random text.</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            {/* <!-- end of col  --> */}
                            <div data-aos="fade-up" className="col-md-6 col-sm-6 mb-4 mb-lg-0 mb-md-0 mb-sm-0">
                                <div className="card">

                                    <div className="card-body d-flex pt-4 pb-4">
                                        <div className="mr-2"><i className="eva eva-lock-outline mr-1 text-36"></i>
                                        </div>
                                        <div className="">
                                            <h4 className="card-title font-weight-bold">Safe & Secure</h4>
                                            <p className="m-0">Contrary to popular belief, Lorem Ipsum is not
                                                simply
                                                random text.</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            {/* <!-- end of col  --> */}
                            <div data-aos="fade-up" className="col-md-6 col-sm-6 mb-0 mb-lg-0 mb-md-0 mb-sm-0">
                                <div className="card">

                                    <div className="card-body d-flex pt-4 pb-4">
                                        <div className="mr-2"><i className="eva eva-pricetags-outline mr-1 text-36"></i>
                                        </div>
                                        <div className="">
                                            <h4 className="card-title font-weight-bold">Best Pricing
                                            </h4>
                                            <p className="m-0">Contrary to popular belief, Lorem Ipsum is not
                                                simply
                                                random text.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- end of col  --> */}

                        </div>
                    </div>
                    {/* <!-- end of col6 row --> */}
                    <div className="col-md-12 col-lg-5 col-sm-12 offset-lg-1">

                        <div className="right-image-carousel">

                            <div>
                                <img alt="Card image cap" className="img-responsive w-100 mb-4" src={slider6} />
                            </div>
                            {/* <div><img alt="Card image cap" className="img-responsive w-100 mb-4" src="https://demos.ui-lib.com/dexam-angular-html/assets/images/landing/svg/slider9.svg" /></div>
                            <div>
                                <img alt="Card image cap" className="img-responsive w-100 mb-4" src="https://demos.ui-lib.com/dexam-angular-html/assets/images/landing/svg/slider8.svg" />
                            </div> */}
                        </div>
                        {/* <div className="slick_control_wrap text-center">


                            <button type="button" className="ngu_control_button half-button right-image-arrow-left leftRs btn btn-circle btn-white btn-shadow"><i className="eva eva-chevron-left-outline"></i></button>
                            <button type="button" className="ngu_control_button half-button right-image-arrow-right rightRs btn btn-circle btn-white btn-shadow"><i className="eva eva-chevron-right-outline"></i></button>
                        </div> */}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Love;