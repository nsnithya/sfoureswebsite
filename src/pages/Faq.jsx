import faqImage from "../assets/images/crw_730,h_730.jpg";
function Faq() {
    return (
        <section className="faqs-wrap p-t-b-80" id="faqs-wrap">
            <div className="container">

                <div className="row">
                    <div className="col-md-6 col-sm-12 mb-4 mb-lg-0 mb-md-0 mb-4">
                        <div className="section-header mb-5">
                            <h2 className="font-weight-bold">Additional Information</h2>
                            {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam
                                laborum, ducimus, laboriosam sint dolorum aspernatur libero.</p> */}

                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="card ul-card__border-radius mb-4">
                                <div className="card-header">
                                    <h6 className="card-title mb-0">
                                        <a data-toggle="collapse" className="text-default" href="#accordion-item-group1">About</a>
                                    </h6>
                                </div>

                                <div id="accordion-item-group1" className="collapse show" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <p>Sfoures Inc is one of the fastest-growing Business Management, and IT consulting companies in Northern Virginia providing cost-effective IT solutions and offering services in the space of strategic, operations, marketing, change management, risk management, and sustainability consulting.  Choosing Sfoures LLC means choosing a partner who's committed to your success. Our consultants bring a rich blend of industry knowledge, functional expertise, and a passion for making a difference. We have a proven track record of delivering lasting results, making us a trusted partner for businesses seeking to navigate change and growth.</p>



                                        <p>We offer more technical services such as enterprise architecture, solution recommendation, application development, Cloud migration, Dev-SecOps space, and Docker Containerization, migrating applications from monolithic to micro-services-based architecture.</p>

                                        <p>We work very closely with company executives and business leaders to identify organizational challenges, gather and analyze information, and develop and implement solutions.</p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="card ul-card__border-radius">
                                <div className="card-header">
                                    <h6 className="card-title mb-0">
                                        <a className="collapsed text-default" data-toggle="collapse" href="#accordion-item-group2">Experience</a>
                                    </h6>
                                </div>

                                <div id="accordion-item-group2" className="collapse" data-parent="#accordionExample">
                                    <div className="card-body">
                                        We've guided numerous organizations through complex digital transformations, helping them to leverage the latest technologies and improve their operations significantly. Our work in the banking sector has seen us revitalizing ailing business units and turning them into highly functional teams by implementing cutting-edge organizational strategies.  At Sfoures, we transform businesses with incisive strategies, actionable insights, and practical solutions tailored to your organization's unique needs. Our goal is simple: help you maximize your potential and achieve your strategic objectives. 
                                    </div>
                                </div>
                            </div>

                            <div className="card ul-card__border-radius">
                                <div className="card-header">
                                    <h6 className="card-title mb-0">
                                        <a className="collapsed text-default" data-toggle="collapse" href="#accordion-item-default3">High ROI</a>
                                    </h6>
                                </div>

                                <div id="accordion-item-default3" className="collapse" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Do you spend most of your IT budget on maintaining your current system? Many companies find that constant maintenance eats into their budget for new technology. By outsourcing your IT management to us, you can focus on what you do best--running your business.
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* <!-- end of col --> */}
                    <div data-aos="fade-left" className="col-md-5 offset-md-1 col-sm-12 d-flex align-items-center">

                        <img src={faqImage} className="img-responsive w-100" alt="" />
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-sm-12 mb-4 mb-lg-0 mb-md-0 mb-4">
                            <div className="section-header mb-5">

                                <div className="accordion" id="accordionExample2">
                                    <div className="card ul-card__border-radius">
                                        <div className="card-header">
                                            <h6 className="card-title mb-0">
                                                <a className="collapsed text-default" data-toggle="collapse" href="#accordion-item-group2">Experience</a>
                                            </h6>
                                        </div>

                                        <div id="accordion-item-group2" className="collapse show" data-parent="#accordionExample">
                                            <div className="card-body">
                                                We've guided numerous organizations through complex digital transformations, helping them to leverage the latest technologies and improve their operations significantly. Our work in the banking sector has seen us revitalizing ailing business units and turning them into highly functional teams by implementing cutting-edge organizational strategies.  At Sfoures, we transform businesses with incisive strategies, actionable insights, and practical solutions tailored to your organization's unique needs. Our goal is simple: help you maximize your potential and achieve your strategic objectives.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 mb-4 mb-lg-0 mb-md-0 mb-4">
                            <div className="section-header mb-5">

                                <div className="accordion" id="accordionExamplee">
                                    <div className="card ul-card__border-radius">
                                        <div className="card-header">
                                            <h6 className="card-title mb-0">
                                                <a className="collapsed text-default" data-toggle="collapse" href="#accordion-item-default3">High ROI</a>
                                            </h6>
                                        </div>

                                        <div id="accordion-item-default3" className="collapse show" data-parent="#accordionExample">
                                            <div className="card-body">
                                                Do you spend most of your IT budget on maintaining your current system? Many companies find that constant maintenance eats into their budget for new technology. By outsourcing your IT management to us, you can focus on what you do best--running your business.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Faq;