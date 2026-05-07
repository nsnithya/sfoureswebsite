import Faq from "./Faq";
import about from "../assets/images/landing/about/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg"
import News from "./News";

function About() {
    return (
        <section className="right-image-wrap p-t-b-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={about} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-12 section-header mb-5">
                            <h2 className="font-weight-bold mb-2">About SFOURES</h2>
                            <p className="mb-4">SFoures has been supporting Commercial and Civilian agencies since 2012.
                                We are specialized in Application Development, Application Modernization, Microservices, Cloud Migration, Data analytics and Business Intelligence using Al/ML and emerging/disruptive technologies and even more innovative solutions to support our US Federal Government, State, Local and Commercial customers.</p>
                            <p className="mb-4">Our approach using SAFe (Scaled Agile Framework) methodologies is key in solving complex clients problems in an incremental fashion which has significant value proposition to our Customers.</p>
                        </div>
                    </div>

                    <Faq />
                    <News />

                </div>
            </div>
        </section>
    );
}

export default About;