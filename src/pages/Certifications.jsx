import cert1 from "../assets/images/certifications/8(a)-Certified.png";
import cert2 from "../assets/images/certifications/WOSB-Certified.png";
import cert3 from "../assets/images/certifications/EDWOSB-Certified.png";
import cert4 from "../assets/images/certifications/swam-certified.png";
import cert5 from "../assets/images/certifications/gsa-certified.png";
import cert6 from "../assets/images/certifications/nmsdc-certified.png";

const certifications = [
  {
    id: 1,
    image: cert1,
  },
  {
    id: 2,
    image: cert2,
  },
  {
    id: 3,
    image: cert3,
  },
  {
    id: 4,
    image: cert4,
  },
  {
    id: 5,
    image: cert5,
  },
  {
    id: 6,
    image: cert6,
  },
];

function Certifications() {
  return (
    <section
      id="features-wrap"
      className="features_wrap p-t-b-80"
    >
      <div className="container">

        <div className="row">

          <div className="col-md-12 section-header mb-5">

            <h2 className="font-weight-bold">
              Our certifications
            </h2>

          </div>

          <div className="row">

            {certifications.map((item) => (

              <div
                key={item.id}
                data-aos="fade-up"
                className="col-md-3 col-lg-2 col-sm-4 mb-4"
              >

                <div className="card h-100">

                  <div className="card-body pt-4 pb-4 text-center">

                    <img
                      src={item.image}
                      className="img-responsive w-100"
                      alt={`Certification ${item.id}`}
                    />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Certifications;