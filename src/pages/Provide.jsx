import provide1 from "../assets/images/landing/provide/12135.jpg";
function Provide() {
    return (
        <section className="left-image-wrap p-t-b-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 section-header mb-5">
                        <h2 className="font-weight-bold">We are Ready to Provide</h2>
                        <p>We are ready to deliver reliable, scalable solutions tailored to your business needs.
                            Our team combines expertise and innovation to ensure successful outcomes.</p>

                    </div>
                    <div className="col-md-6 col-sm-12 mb-5 mb-lg-0 mb-md-0 mt-mb-5">
                        <div className="left-image-carousel">

                            <div>
                                <img alt="Card image cap" className="img-responsive w-100 mb-4" src={provide1} height={350} />
                            </div>
                            {/* <div><img alt="Card image cap" className="img-responsive w-100 mb-4" src="/assets/images/landing/provide/QzOdGn3.jpg" height={350} /></div>
                            <div>
                                <img alt="Card image cap" className="img-responsive w-100 mb-4" src="/assets/images/landing/provide/ThinkstockPhotos-179747897-A-ENTERPRISE-APPLICATIONS.jpg" height={350} />
                            </div> */}
                        </div>
                        {/* <div className="slick_control_wrap text-center">


                            <button type="button" className="ngu_control_button half-button leftRs btn btn-circle btn-white btn-shadow"><i className="eva eva-chevron-left-outline"></i></button>
                            <button type="button" className="ngu_control_button half-button rightRs btn btn-circle btn-white btn-shadow"><i className="eva eva-chevron-right-outline"></i></button>
                        </div> */}

                    </div>



                    <div className="col-md-5 offset-md-1 col-sm-12">
                        <div className="row">


                            <div data-aos="fade-left" className="col-md-12 col-sm-6 mb-4">
                                <div className="card">

                                    <div className="card-body pt-3 pb-3">

                                        <h4 className="card-title font-weight-bold">Business Management Consulting
                                        </h4>
                                        <p className="m-0">Strategy, Operations, Marketing, Digital Transformation, Change Management, Risk Management, Sustainability, Data Analytics and Business Intelligence, and Executive Coaching and Leadership Consulting</p>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- end of col  --> */}
                            <div data-aos="fade-right" className="col-md-12 col-sm-6 mb-4">
                                <div className="card">

                                    <div className="card-body pt-3 pb-3">

                                        <h4 className="card-title font-weight-bold">Cloud Migration Framework
                                        </h4>
                                        <p className="m-0">Discovery Process, Initial Assessment, Cloud Migration Planning, Migration Strategies, Migrate and Modernize</p>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- end of col  --> */}
                            <div data-aos="fade-up" className="col-md-12 col-sm-6 mb-lg-0 mb-md-0 mb-sm-0">
                                <div className="card">

                                    <div className="card-body pt-3 pb-3">

                                        <h4 className="card-title font-weight-bold">Application Modernization and Digital Transformation</h4>
                                        <p className="m-0">Migrate from monolithic applications to Micro services based implementation using API First approach.</p>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- end of col  --> */}
                        </div>
                    </div>
                    {/* <!-- end of col6 row --> */}
                </div>
            </div>
        </section>
    );
}

export default Provide;