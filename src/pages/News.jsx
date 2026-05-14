import sangeetha from "../assets/images/landing/faces/sangeetha.jpg";
import sns from "../assets/images/landing/faces/sns.jpg";
import { Link } from "react-router-dom";
function News() {
    return (
        <section id="news-wrap" className="news-two-wrap light-gray p-t-b-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 section-header mb-5">
                        <h2 className="font-weight-bold">Meet Our Team</h2>
                        <p>Our team brings together expertise, innovation, and a passion for delivering results.
                            We work collaboratively to create solutions that drive success for our clients.</p>

                    </div>
                </div>

                <div className="row">
                    <div data-aos="fade-right" className="col-md-6 col-sm-12 mb-lg-0 mb-md-0 mb-4">
                        <div className="card text-left o-hidden">
                            <div className="card_img_left w-40 float-left">
                                <img className="card-img" src={sangeetha} alt="Card image" />
                            </div>

                            <div className="card_right_content w-60 p-3 float-right">
                                <div className="pt-3 pb-4">
                                    <h3 className="m-0 text-capitalize font-weight-bold">Ms. Sangeetha Chockanarayanan</h3>
                                    <h5 className="font-weight-light text-uppercase">Co-Founder & CEO</h5>
                                </div>

                                <div className="font-weight-light pb-3">
                                    
                                    <p>Sangeetha Chockanarayanan is the Co-Founder and Chief Executive Officer of Sfoures LLC, where she sets the strategic vision and leads the firm’s growth in delivering enterprise-scale digital transformation solutions
                                    </p>

                                    <Link to="/team/sangeetha"><button className="btn half-button text-white btn-gradient">Read More</button></Link>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* <!-- end of col --> */}
                    <div data-aos="fade-left" className="col-md-6 col-sm-12 mb-lg-0 mb-md-0 mb-0">
                        <div className="card text-left o-hidden">
                            <div className="card_img_left w-40 float-left">
                                <img className="card-img" src={sns} alt="Card image" />
                            </div>

                            <div className="card_right_content w-60 p-3 float-right">
                                <div className="pt-3 pb-4">
                                    <h3 className="m-0 text-capitalize font-weight-bold">Mr. Swami Nithiyanandham
                                    </h3>
                                    <h5 className="font-weight-light text-uppercase">Co-Founder & CTO</h5>
                                </div>

                                <div className="font-weight-light pb-3">
                                    <p>As the CTO and Co-Founder of an SBA 8(a) certified federal contracting firm, I lead the company’s technology strategy, solution architecture, and delivery excellence across civilian, defense, and national-security focused missions.
                                    </p>

                                    <Link to="/team/swami"><button className="btn half-button btn-gradient text-white">Read More</button></Link>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* <!-- end of col --> */}


                </div>

            </div>
        </section>
    );
}

export default News;