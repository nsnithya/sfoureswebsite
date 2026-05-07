import capabilityImage from "../assets/images/landing/svg/features2.svg"
function Capabilities() {
    return (
        <section id="features-wrap" className="features_wrap p-t-b-80">
            <div className="container">
                <div className="row">


                    <div className="col-md-12 section-header mb-5">
                        <h2 className="font-weight-bold">Our Exciting Capabilities</h2>
                        <p>We deliver innovative technology and consulting solutions tailored to your business needs.
                            Our expertise spans cloud, data, and modern application development to drive measurable results.</p>

                    </div>


                    <div className="col-md-6 col-lg-6 col-sm-12 mb-4 mb-lg-0">
                        <div className="row">



                            <div data-aos="fade-up" className="col-md-6 col-lg-4 col-sm-6 mb-4">
                                <div className="card">

                                    <div className="card-body pt-4 pb-4 text-center">
                                        <i className="eva eva-cloud-upload-outline text-30"></i>
                                        <h4 className="card-title pt-2 text-16">Cloud Migration</h4>

                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-md-6 col-lg-4 col-sm-6 mb-4">
                                <div className="card">

                                    <div className="card-body pt-4 pb-4 text-center">
                                        <i className="eva eva-file-text-outline text-30"></i>
                                        <h4 className="card-title pt-2 text-16">Business Intelligence</h4>

                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-md-6 col-lg-4 col-sm-6 mb-4">
                                <div className="card">

                                    <div className="card-body pt-4 pb-4 text-center">
                                        <i className="eva eva-shopping-bag-outline text-30"></i>
                                        <h4 className="card-title pt-2 text-16">App Modernization</h4>

                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-md-6 col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                <div className="card">

                                    <div className="card-body pt-4 pb-4 text-center">
                                        <i className="eva eva-lock-outline text-30"></i>
                                        <h4 className="card-title pt-2 text-16">Data Governance</h4>

                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-md-6 col-lg-4 col-sm-6 mb-4 mb-lg-0 mb-md-0">
                                <div className="card">

                                    <div className="card-body pt-4 pb-4 text-center">
                                        <i className="eva eva-people-outline text-30"></i>
                                        <h4 className="card-title pt-2 text-16">Data Lakehouse</h4>

                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="col-md-6 col-lg-4 col-sm-6 mb-4 mb-lg-0 mb-md-0">
                                <div className="card">

                                    <div className="card-body pt-4 pb-4 text-center">
                                        <i className="eva eva-bell-outline text-30 text-gradient"></i>
                                        <h4 className="card-title pt-2 text-16">Data Visualization</h4>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end of col-6 --> */}
                    <div data-aos="fade-left" className="col-md-6 col-lg-5 col-sm-12 offset-lg-1 d-flex align-items-center">

                        <img src={capabilityImage} className="img-responsive w-100" alt="" />

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Capabilities;