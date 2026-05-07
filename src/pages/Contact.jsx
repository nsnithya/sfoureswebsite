import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Message sent successfully!");

                setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });

            } else {
                toast.error("Failed to send message");
            }

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };
    return (
        <section id="contacts-wrap" className="contact-form-wrap light-gray p-t-b-80">
            <div className="container">
                <div className="row">
                    <div data-aos="fade-right" className="form-wrap col-md-6 mb-4">
                        <div className="section-header mb-5">
                            <h2 className="font-weight-bold">Get in Touch With Us !</h2>
                            {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam
                                laborum, ducimus, laboriosam sint dolorum aspernatur libero</p> */}

                        </div>
                        {/* <div className="alert alert-success alert-dismissible fade show" role="alert" [@animate]="{value:'*',params:{y:'-120px',opacity:'0',delay:'100ms', duration: '400ms'}}">
                                        <button type="button" className="close" (click)="success=false">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        <strong>Your Message Sent succefully</strong>
                                    </div> */}


                        <form className="row form" role="form" onSubmit={handleSubmit}>
                            <div className="form-group mb-4 col-md-6">
                                <label htmlFor="">
                                    <i className="eva eva-person-outline"></i>
                                </label>
                                <input type="text" name="name" id="" className="form-control" placeholder="Your Name" value={form.name}
                                    onChange={handleChange}
                                    required />

                            </div>
                            <div className="form-group mb-4 col-md-6">
                                <label htmlFor="">
                                    <i className="eva eva-email-outline"></i>
                                </label>
                                <input type="email" required name="email" className="form-control" placeholder="Your  email" value={form.email}
                                    onChange={handleChange}
                                    aria-describedby="helpId" />

                            </div>
                            <div className="form-group mb-4 col-md-12">
                                <label htmlFor="">
                                    <i className="eva eva-edit-2-outline"></i>
                                </label>
                                <input type="text" required name="subject" className="form-control" placeholder="Your subject here" value={form.subject}
                                    onChange={handleChange} aria-describedby="helpId" />

                            </div>

                            <div className="form-group mb-4 col-md-12">

                                <label htmlFor="">
                                    <i className="eva eva-edit-outline"></i>
                                </label>
                                <textarea className="form-control" placeholder="Your message here" required value={form.message}
                                    onChange={handleChange} name="message" rows="5"></textarea>


                            </div>

                            <div className="form-group col-md-12">
                                <button disabled={loading} type="submit" className="btn btn-block half-button form-submit-button btn-large btn-gradient">
                                    {loading ? "Sending..." : "Send Message"}
                                </button>

                            </div>



                        </form>



                    </div>
                    <div data-aos="fade-left" className="col-lg-6 right-contact-wrap">
                        <h2 className="font-weight-bold">Company Details</h2>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet
                            illo,
                            placeat dolorum delectus nam error itaque ratione facilis quod praesentium.
                        </p> */}

                        <div className="row mt-5">
                            <div className="col-md-6 mb-4">
                                <div className="benefits-contents d-flex">
                                    <i className="eva eva-globe-2-outline mr-2 text-28"></i>
                                    <div className="benefits-contents__info">
                                        <h3 className="card-title font-weight-bold">DUNS</h3>
                                        <span className="text-15">022074043</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="benefits-contents d-flex">
                                    <i className="eva eva-flag-outline mr-2 text-28"></i>
                                    <div className="benefits-contents__info">
                                        <h3 className="card-title font-weight-bold">CAGE</h3>
                                        <span className="text-15">84JQ9</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-4 mb-4">
                                <div className="benefits-contents d-flex">
                                    <i className="eva eva-hash-outline mr-2 text-28"></i>
                                    <div className="benefits-contents__info">
                                        <h3 className="card-title font-weight-bold">UEI</h3>
                                        <span className="text-15">TT91M7NK7A98</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 mt-4 mb-4">
                                <div className="benefits-contents d-flex">
                                    <i className="eva eva-book-open-outline mr-2 text-28"></i>
                                    <div className="benefits-contents__info">
                                        <h3 className="card-title font-weight-bold">GSA MAS Schedule</h3>
                                        <span className="text-15">47QTCA24D00FX</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-4">
                                <div className="benefits-contents d-flex">
                                    <i className="eva eva-browser-outline mr-2 text-28"></i>
                                    <div className="benefits-contents__info">
                                        <h3 className="card-title font-weight-bold">NAICS Code</h3>
                                        <span className="text-15">541512, 541511, 541519, 518210, 541611, 541618, 611430, 518210C, 54151S</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-4">
                                <div className="benefits-contents d-flex">
                                    <i className="eva eva-clock-outline mr-2 text-28"></i>
                                    <div className="benefits-contents__info">
                                        <h3 className="card-title font-weight-bold">Hours</h3>
                                        <span className="text-15">Monday - Friday: 9am - 5pm </span><br/>
                                        <span className="text-15">Saturday - Sunday: Closed</span>
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

export default Contact;