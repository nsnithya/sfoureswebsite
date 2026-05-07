import { useState } from "react";
import businessManagement from "../assets/images/landing/services/Business-Management-1.png";
import cloudMigration from "../assets/images/landing/services/cloud-migration-min.jpg";
import itSupport from "..//assets/images/landing/services/ausit1-1536x1087.jpg";
import applicationDevelopment from "../assets/images/landing/services/AdobeStock_1494272021-768x512.jpeg";
import organizationalChallenge from "../assets/images/landing/services/3253.jpg";
import gatheringInformation from "../assets/images/landing/services/3257.jpg";
import implementingSolutions from "../assets/images/landing/services/images.jpg";
import aimlSolutions from "../assets/images/landing/services/ai.png";

function Services() {

    const services = [
        {
            title: "Business Management Consulting",
            desc: "We know that every organization has its own DNA - its unique set of strengths, challenges, and goals. That's why we partner with you, working hand in hand with your company's executives and business leaders. Our collaborations are marked by close communication, a deep understanding of your needs, and mutual trust.",
            img: businessManagement
        },
        {
            title: "Cloud Migration",
            desc: "We are specialized in Cloud migration from on-premise to Public Cloud (AWS, Microsoft Azure, Google Cloud). We are also specialized in Cloud based services including but not limited to (IAAS, SAAS, PAAS, IPAAS etc), Migration planning, Architectural design, Environment setup and work with the clients to fulfill their Cloud Strategy and directions and provide adequate support in Public Cloud setup, Deployment setup including CICD, pipeline etc.",
            img: cloudMigration
        },
        {
            title: "IT Support",
            desc: "We are available to consult with you or your staff when problems arise with your software. We are available for remote or on-site assistance.",
            img: itSupport
        },
        {
            title: "Application Development, Consulting and Advisory services",
            desc: "We are specialized in the application development on specialized in Java, Open source, Micro-services, Docker Containers and specialized in Data space (building Data integration patterns , database migration, specialized in building data warehouse and data mart, Big data, fast data etc) will work and partner with small and medium sized companies and provide consulting and advisory services. We  have skilled available resources to support your business.",
            img: applicationDevelopment
        },
        {
            title: "Identifying Organizational Challenges",
            desc: "The first step to successful problem-solving is identifying the root cause. Sfoures LLC dives into the heart of your organization, identifying challenges that hold you back from reaching your peak performance. Our seasoned consultants employ cutting-edge tools, techniques, and a wealth of experience to provide a comprehensive view of the hurdles standing in your way.",
            img: organizationalChallenge
        },
        {
            title: "Gathering & Analyzing Information",
            desc: "In the information age, effective decision-making is fueled by data. At Sfoures LLC, we gather information from various internal and external sources to get a comprehensive picture of your organization and its environment. We then employ advanced analytics to decode patterns, derive insights, and forecast future trends, empowering you with knowledge to make informed decisions.",
            img: gatheringInformation
        },
        {
            title: "Developing & Implementing Solutions",
            desc: "The final step is where our expertise really shines. We tailor solutions that are a perfect fit for your organization, blending your unique objectives with our strategic expertise. But we don’t stop at just developing solutions; we stay with you every step of the way, implementing these strategies and ensuring they deliver the expected results.",
            img: implementingSolutions
        },
        {
            title: "AI/ML Solutions",
            desc: "We leverage artificial intelligence and machine learning to build intelligent systems that automate workflows, analyze large datasets, and generate predictive insights. Our solutions help enhance efficiency, improve accuracy, and enable smarter, data-driven decisions.",
            img: aimlSolutions
        },
    ];
    const [expandedIndex, setExpandedIndex] = useState(null);
    return (
        <section className="services-wrap light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 section-header mb-5">
                        <h2 className="font-weight-bold">Our Services</h2>
                        <p>We provide end-to-end technology and consulting services tailored to your business needs.
                            From strategy to implementation, we help drive innovation, efficiency, and growth.</p>

                    </div>
                    {services.map((item, index) => (
                        <div key={index} data-aos="fade-up" className="service-wrap col-md-6 col-lg-3 col-sm-12">
                            <div className="card o-hidden mb-4">
                                <div className="card-header p-0 text-center">

                                    <img className="img-responsive" src={item.img} />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title text-capitalize font-weight-bold">{item.title}</h3>

                                    <p className={`card-text ${expandedIndex === index ? "expanded" : ""}`}>
                                        {item.desc}
                                    </p>

                                    <button
                                        className="btn half-button text-white btn-gradient"
                                        onClick={() =>
                                            setExpandedIndex(expandedIndex === index ? null : index)
                                        }
                                    >
                                        {expandedIndex === index ? "Show Less" : "Read More"}
                                    </button>
                                </div>

                                {/* <div className="card-footer pl-3">
                                    <a href="#" className="btn btn-lg p-1 mr-1 text-dark">
                                        <span className="eva eva-link-2-outline"></span>
                                    </a>
                                    <a href="#" className="btn btn-lg p-1 mr-1 text-dark">
                                        <span className="eva eva-share"></span>
                                    </a>
                                </div> */}

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Services;