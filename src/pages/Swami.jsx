import sns from "../assets/images/landing/faces/sns.jpg";
function Swami() {
    return (
        <section className="faqs-wrap p-t-b-80" id="faqs-wrap">
            <div className="container">

                <div className="row">
                    <div className="col-md-6 col-sm-12 mb-4 mb-lg-0 mb-md-0 mb-4">
                        <div className="section-header mb-5">
                            <h2 className="font-weight-bold">Swami Nithiyanandham</h2>

                        </div>
                        <div className="accordion" id="accordionExample">

                            <p>As the CTO and Co-Founder of an SBA 8(a) certified federal contracting firm, I lead the company’s technology strategy, solution architecture, and delivery excellence across civilian, defense, and national-security focused missions.</p>
                            <p>I oversee all aspects of technical execution, innovation, compliance, and growth. Key Responsibilities: Technology Strategy & Vision Define and execute the company’s technical roadmap aligned with federal agency needs, modernization initiatives, and partner ecosystems.</p>
                            <p>Lead R&D efforts in cloud, AI/ML, data engineering, cybersecurity, and automation to differentiate offerings in competitive federal markets. Federal Solution Architecture Architect secure, scalable solutions across AWS, Azure, and hybrid environments, ensuring compliance with FedRAMP, FISMA, NIST 800-53, CMMC, HIPAA, and agency-specific requirements.</p>
                            <p>Oversee end-to-end design of mission-critical systems including data pipelines, AI/ML workflows, zero-trust architectures, and cloud-native platforms. Program Delivery & Technical Leadership Provide technical oversight of ongoing federal programs, ensuring high-quality delivery, SLAs, and customer satisfaction.</p>
                            <p>Establish engineering standards, DevSecOps practices, CI/CD pipelines, SRE frameworks, and quality assurance processes.</p>
                        </div>
                    </div>


                    {/* <!-- end of col --> */}
                    <div data-aos="fade-left" className="col-md-5 offset-md-1 col-sm-12 d-flex align-items-center">

                        <img src={sns} className="img-responsive box-shadow-2 w-100" alt="" style={{ "border-radius":"50%" }} />
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-sm-12 mb-4 mb-lg-0 mb-md-0 mb-4">
                            <p>Growth, Capture, and Proposal Support Partner with CEO and BD teams to shape capture strategies, build proposal technical volumes, write solution narratives, and participate in orals. </p>
                            <p>Develop technical differentiators, compliance matrices, staffing strategies, and cost models for competitive procurements (IDIQs, GWACs, SBIR/STTR, BPAs). Cybersecurity & Compliance Governance Serve as executive owner for all internal compliance programs, including security policies, audit readiness, and continuous monitoring.</p>
                            <p>Build strategic relationships with prime contractors, OEMs, federal program offices, and cloud service providers. Drive technology partnerships to strengthen capability offerings and pipeline growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Swami;