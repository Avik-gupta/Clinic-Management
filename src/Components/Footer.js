import { Link } from "react-router-dom"

function Footer() {
  return (
    <div>
       {/* info section */}
  <section className="info_section " style={{marginTop:"30px"}}>
    <div className="container">
      <div className="info_top">
        <div className="info_logo">
          <Link to="">
            <img src="./1.png" alt=""/>
          </Link>
        </div>
        <div className="info_form">
          <form action="">
            <input type="email" placeholder="Your email"/>
            <button>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="info_bottom layout_padding2">
        <div className="row info_main_row">
          <div className="col-md-6 col-lg-3">
            <h5>
              Address
            </h5>
            <div className="info_contact">
              <Link to="">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Indore
                </span>
              </Link>
              <Link to="">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call +01 1234567890
                </span>
              </Link>
              <Link to="">
                <i className="fa fa-envelope"></i>
                <span>
                  demo@gmail.com
                </span>
              </Link>
            </div>
            <div className="social_box">
              <Link to="">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </Link>
              <Link to="">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </Link>
              <Link to="">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </Link>
              <Link to="">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info_links">
              <h5>
                Useful link
              </h5>
              <div className="info_links_menu">
                <Link className="active" to="index.html">
                  Home
                </Link>
                <Link to="about.html">
                  About
                </Link>
                <Link to="treatment.html">
                  Treatment
                </Link>
                <Link to="doctor.html">
                  Doctors
                </Link>
                <Link to="testimonial.html">
                  Testimonial
                </Link>
                <Link to="contact.html">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info_post">
              <h5>
                LATEST POSTS
              </h5>
              <div className="post_box">
                <div className="img-box">
                  <img src="images/post1.jpg" alt=""/>
                </div>
                <p>
                  Normal
                  distribution
                </p>
              </div>
              <div className="post_box">
                <div className="img-box">
                  <img src="images/post2.jpg" alt=""/>
                </div>
                <p>
                  Normal
                  distribution
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="info_post">
              <h5>
                News
              </h5>
              <div className="post_box">
                <div className="img-box">
                  <img src="images/post3.jpg" alt=""/>
                </div>
                <p>
                  Normal
                  distribution
                </p>
              </div>
              <div className="post_box">
                <div className="img-box">
                  <img src="images/post4.png" alt=""/>
                </div>
                <p>
                  Normal
                  distribution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end info_section  */}


   {/* footer section  */}
  <footer className="footer_section">
    
  </footer>
   {/* footer section  */}
    </div>
  )
}

export default Footer
