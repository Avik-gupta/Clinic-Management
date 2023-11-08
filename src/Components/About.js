import { Link } from "react-router-dom"

function About() {
  return (
    <div>
      <section className="about_section">
    <div className="container  ">
      <div className="row">
        <div className="col-md-6 ">
          <div className="img-box" style={{marginTop:"10px"}}>
            <img src="images/about-img.jpg" alt=""/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2 style={{marginTop:"20px"}}>
                About <span>Hospital</span>
              </h2>
            </div>
            <p style={{color:"black"}}>
            The e-Hospital application is being offered as an as-is product to the government hospitals across the country through SaaS (Software as a service) model. The modules of e-Hospital application which are currently available on cloud are Patient Registration (OPD & Casualty), IPD (Admission, Discharge & Transfer), Billing, Lab Information System, Radiology Information System, Clinic, Dietary, Laundry, Store & Pharmacy and OT Management.
            </p>
            <Link to="">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default About
