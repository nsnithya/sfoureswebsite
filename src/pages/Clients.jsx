import { useState } from "react";
import fannieMae from "../assets/images/landing/clients/Fannie_Mae.png";
import freddieMac from "../assets/images/landing/clients/Freddie_Mac.png";
import collegeBoard from "../assets/images/landing/clients/CollegeBoard.png";
import federalMaritimeCommission from "../assets/images/landing/clients/Federal_Maritime_Commission_seal.svg.png";
import ahrq from "../assets/images/landing/clients/AHRQ.png";
import navyFederal from "../assets/images/landing/clients/Navy-Federal-Logo-White.png";
import verizon from "../assets/images/landing/clients/verizon.webp";
import censusBureau from "../assets/images/landing/clients/censusBureau.jpg";
import surfaceTransportationBoard from "../assets/images/landing/clients/surfaceTransportationBoard.png";
import hud from "../assets/images/landing/clients/hud.webp";
import uscbp from "../assets/images/landing/clients/uscbp.png";
import aocourts from "../assets/images/landing/clients/ao-courts.png";

function Clients() {

    const commercial_clients = [
        {
            name: "Fannie Mae",
            desc: "Established Multifamily Target State Initiative creating and maintaining policies, and portfolio management including front and back office support.  Sfoures was tasked with several capabilities (Transaction Management, Master Servicing, Securitization, Business Information Management) and closely working with Technology and Business Partners and playing in creating Architecture blueprints, Cloud assessment, Cloud Suitability and Cloud Fitness models, business process management, technical reference model, evaluating third party risks, doing proof of concepts when required on several technologies involved in Cloud, SOA, ECM and creating best practices for development.",
            img: fannieMae,
            twitter: "#",
            google: "#",
            facebook: "#"
        },
        {
            name: "Freddie Mac",
            desc: "Provided data domain consulting services to Single Family Data management in designing and building Corporate Data warehouse, Data Governance, Data integration and Data Modeling. Provided services to Freddie Mac users in standardizing data, promoting data sharing, managing data redundancy, and improving data integrity. Provided design and delivered the ETL processes using Informatica to load data from multiple legacy source systems using Power Center to Warehouse Foundation Layer, Financial data warehouse and to respective data marts.",
            img: freddieMac,
            twitter: "#",
            google: "#",
            facebook: "#"
        },
        {
            name: "Navy Federal Credit Union",
            desc: "Designed  and implemented scalable big data processing pipelines using Hadoop, Spark, and other distributed computing using RDD technologies to process 800+ terabytes of data for Current Expected Credit Losses project.Designed and developed several data integration projects on Teradata platform.",
            img: navyFederal,
            twitter: "#",
            google: "#",
            facebook: "#"
        },
        {
            name: "Verizon",
            desc: "We've partnered with Verizon Government Solutions to deliver mission-critical telecom, cybersecurity, and cloud solutions for federal agencies. Our track record demonstrates reliability, compliance, and results on multi-million-dollar contracts. We've partnered with Verizon Government Solutions to deliver mission-critical telecom, cybersecurity, and cloud solutions for federal agencies. Our track record demonstrates reliability, compliance, and results on multi-million-dollar contracts. Migrated 10PB of data to Verizon's FedRAMP-High cloud with zero downtime, including DMARC-secured email gateways. Ensured FISMA/NIST compliance on a $150M+ GSA MAS award, achieving 99.99% uptime. Migrated 10PB of data to Verizon's FedRAMP-High cloud with zero downtime, including DMARC-secured email gateways.",
            img: verizon,
            twitter: "#",
            google: "#",
            facebook: "#"
        },
        {
            name: "College Board",
            desc: "Designed and implemented “Advanced Placement”(AP) project that integrates the AP Students’ form, score and quartile data into College Board’s operational data store and migrate them to Enterprise Data Warehouse and DataMart to provide analytical solutions.",
            img: collegeBoard,
            twitter: "#",
            google: "#",
            facebook: "#"
        },
    ];
    const federal_clients = [
        {
            name: "U.S.Census Bureau",
            desc: "Provide target State recommendation in AWS Cloud for their CEDSCI Delivery system using Cloud native and Cloud agnostic Services. Built Shared Service Infrastructure using EKS Clusters and Kafka to support Census business applications and Department of Commerce.",
            img: censusBureau,
            twitter: "#",
            google: "#",
            facebook: "#"
        },
        {
            name: "Department of Transportation / Surface Transportation Board",
            desc: "Prime Contractor working on the implementation of their Data Management Services using AWS Ecosystem. Built Data pipelines to obtain the national rail road carriers data and ingested into their Data Management ecosystem and built a data portal using Huwise to provide the data access to their stakeholders.",
            img: surfaceTransportationBoard,
            twitter: "#",
            google: "#",
            facebook: "#"
        },
        {
            name: "Federal Maritime Commission",
            desc: "Successfully built Enterprise Data Lake using Medallion Architecture and built pipelines to move data from on-premises to Azure Cloud using Azure Data Factory and Azure Databricks for BTA business unit.",
            img: federalMaritimeCommission,
            twitter: "#",
            google: "#",
            facebook: "#"
        },
        {
            name: "HUD",
            desc: "Provide Solution Architecture recommendation of the HUD – Geocoding Service Center Modernization/Enhancement Implementation Assessment Initiative. This includes IBM Mainframe Modernization and Cloud Migration Strategies.",
            img: hud,
            twitter: "#",
            google: "#",
            facebook: "#"
        },
        {
            name: "US CBP",
            desc: "Modernization and Database administration of e3 portal to collect and transmit biographic, encounter, and biometric data of individuals encountered by U.S. Border Patrol. Data Integration between ICE and CBP database using DMS.",
            img: uscbp,
            twitter: "#",
            google: "#",
            facebook: "#"
        },
        {
            name: "A.O. Courts",
            desc: "Developed a data governance strategy and standards to support next steps in the modernization of the CM/ECF system.",
            img: aocourts,
            twitter: "#",
            google: "#",
            facebook: "#"
        },
    ];
    const [expandedIndex, setExpandedIndex] = useState(null);
    return (
        <section id="teams-wrap" className="team-wrap p-t-b-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 section-header mb-5">
                        <h2 className="font-weight-bold">Our Esteemed Customers</h2>
                        <p>We proudly partner with leading organizations across government and enterprise sectors.
                            Our solutions deliver measurable impact, innovation, and long-term value to our clients.</p>

                    </div>
                </div>
                <div className="row mb-4">
                    <h2>Federal Customers</h2>
                    {federal_clients.map((item, index) => (
                        <div key={index} data-aos="fade-right" className="col-md-6 col-lg-4 col-sm-6 mb-lg-4 mb-4">
                            <div className="card card-profile-1">
                                <div className="card-body text-center">
                                    <div className="avatar box-shadow-2 mb-3">
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <h5 className="font-weight-medium card-title m-0">{item.name}</h5>
                                    <p className={`card-text ${expandedIndex === index ? "expanded" : ""}`}>
                                        {item.desc}
                                    </p>
                                    <button className="btn half-button btn-gradient"
                                        onClick={() =>
                                            setExpandedIndex(expandedIndex === index ? null : index)
                                        } > {expandedIndex === index ? "Show Less" : "Read More"}</button>
                                    <div className="card-socials-simple mt-4">

                                        <a href={item.twitter} target="_blank" className="text-20 mr-2">
                                            <i className="eva eva-twitter twitter"></i>
                                        </a>
                                        <a href={item.google} target="_blank" className="text-20 mr-2">
                                            <i className="eva eva-google google"></i>
                                        </a>
                                        <a href={item.facebook} target="_blank" className="text-20 mr-2">
                                            <i className="eva eva-facebook facebook"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <h2>Commercial Customers</h2>
                    {commercial_clients.map((item, index) => (
                        <div key={index} data-aos="fade-right" className="col-md-6 col-lg-4 col-sm-6 mb-lg-4 mb-4">
                            <div className="card card-profile-1">
                                <div className="card-body text-center">
                                    <div className="avatar box-shadow-2 mb-3">
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <h5 className="font-weight-medium card-title m-0">{item.name}</h5>
                                    <p className={`card-text ${expandedIndex === index ? "expanded" : ""}`}>
                                        {item.desc}
                                    </p>
                                    <button className="btn half-button btn-gradient"
                                        onClick={() =>
                                            setExpandedIndex(expandedIndex === index ? null : index)
                                        } > {expandedIndex === index ? "Show Less" : "Read More"}</button>
                                    <div className="card-socials-simple mt-4">

                                        <a href={item.twitter} target="_blank" className="text-20 mr-2">
                                            <i className="eva eva-twitter twitter"></i>
                                        </a>
                                        <a href={item.google} target="_blank" className="text-20 mr-2">
                                            <i className="eva eva-google google"></i>
                                        </a>
                                        <a href={item.facebook} target="_blank" className="text-20 mr-2">
                                            <i className="eva eva-facebook facebook"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Clients;