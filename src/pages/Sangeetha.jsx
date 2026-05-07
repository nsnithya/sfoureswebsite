import sangeetha from "../assets/images/landing/faces/sangeetha.jpg";
function Sangeetha() {
    return (
        <section className="faqs-wrap p-t-b-80" id="faqs-wrap">
            <div className="container">

                <div className="row">
                    <div className="col-md-6 col-sm-12 mb-4 mb-lg-0 mb-md-0 mb-4">
                        <div className="section-header mb-5">
                            <h2 className="font-weight-bold">Sangeetha Chockanarayanan</h2>

                        </div>
                        <div className="accordion" id="accordionExample">

                            <p>Sangeetha Chockanarayanan is the Co-Founder and Chief Executive Officer of Sfoures LLC, where she sets the strategic vision and leads the firm’s growth in delivering enterprise-scale digital transformation solutions.</p>
                            <p>A results-driven executive with deep expertise in cloud strategy, data and AI, and large-scale application modernization, Sangeetha has built a reputation for aligning technology investments with mission-critical outcomes.</p>
                            <p>She has led high-impact initiatives across federal and commercial sectors, transforming complex legacy environments into agile, secure, and data-centric ecosystems that drive measurable business value.</p>
                            <p>Under her leadership, Sfoures has emerged as a trusted partner to government agencies and enterprises, recognized for its ability to execute with precision, innovate at scale, and deliver sustainable results.</p>
                            <p>She brings a strong focus on operational excellence, governance, and client success, ensuring every engagement is anchored in performance, accountability, and long-term impact.</p>
                        </div>
                    </div>


                    {/* <!-- end of col --> */}
                    <div data-aos="fade-left" className="col-md-5 offset-md-1 col-sm-12 d-flex align-items-center">

                        <img src={sangeetha} className="img-responsive box-shadow-2 w-100" alt="" style={{ "border-radius":"50%" }} />
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-sm-12 mb-4 mb-lg-0 mb-md-0 mb-4">
                            <p>Sangeetha is known for her ability to translate strategic vision into execution, building high-performing teams and fostering a culture of innovation and continuous improvement.</p>
                            <p>As a minority and women business leader, she is also a committed advocate for inclusive growth and leadership in the technology sector.</p>
                            <p>Her leadership is defined by a clear mandate: drive transformation, deliver outcomes, and create enduring value for clients and stakeholders</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sangeetha;