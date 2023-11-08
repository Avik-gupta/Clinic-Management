import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
   
    <section className="slider_section ">
      <div className="dot_design">
        <img src="images/dots.png" alt=""/>
      </div>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    
                    <h1>
                      Indore <br/>
                      <span>
                        Hospital
                      </span>
                    </h1>
                    <p style={{color:"black"}}>
                    We, Shitla Sahai Institute Of Medical Sciences & Hospital(SSIMS Multispecialty Hospital) would like to introduce ourselves as part of a renowned Public Charitable Trust Jan Vikas Nyas founded in 1971 by Late Shri Shitla Sahay, Ex health & Home Minister , Madhya Pradesh with the vision of providing a complete cancer care facility to the population of Gwalior Division and adjoining areas of Rajasthan and Uttar Pradesh. After excelling for almost four decades in Cancer Care a need of medical expertise in other areas was felt by the Founder Trustees and the Project of SSIMS was conceptualized with the basic idea of providing this comprehensive integrated healthcare facility under one roof for the people of this region. SSIMS is a 95 beds multispecialty hospital with a future plan to expand to 150 beds . SSIMS is located at a very scenic and centric place of the city with good communication and transport facilities, adjacent to the preexisting Cancer Hospital premise and is equipped with all modern gadgets and infrastructure.
                    </p>
                    <Link to="">
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    
                    <h1>
                    Indore <br/>
                      <span>
                        Hospital
                      </span>
                    </h1>
                    <p style={{color:"black"}}>
                    We, Shitla Sahai Institute Of Medical Sciences & Hospital(SSIMS Multispecialty Hospital) would like to introduce ourselves as part of a renowned Public Charitable Trust Jan Vikas Nyas founded in 1971 by Late Shri Shitla Sahay, Ex health & Home Minister , Madhya Pradesh with the vision of providing a complete cancer care facility to the population of Gwalior Division and adjoining areas of Rajasthan and Uttar Pradesh. After excelling for almost four decades in Cancer Care a need of medical expertise in other areas was felt by the Founder Trustees and the Project of SSIMS was conceptualized with the basic idea of providing this comprehensive integrated healthcare facility under one roof for the people of this region. SSIMS is a 95 beds multispecialty hospital with a future plan to expand to 150 beds . SSIMS is located at a very scenic and centric place of the city with good communication and transport facilities, adjacent to the preexisting Cancer Hospital premise and is equipped with all modern gadgets and infrastructure.
                    </p>
                    <Link to="">
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    
                    <h1>
                      Indore <br/>
                      <span>
                        Hospital
                      </span>
                    </h1>
                    <p style={{color:"black"}}>
                    We, Shitla Sahai Institute Of Medical Sciences & Hospital(SSIMS Multispecialty Hospital) would like to introduce ourselves as part of a renowned Public Charitable Trust Jan Vikas Nyas founded in 1971 by Late Shri Shitla Sahay, Ex health & Home Minister , Madhya Pradesh with the vision of providing a complete cancer care facility to the population of Gwalior Division and adjoining areas of Rajasthan and Uttar Pradesh. After excelling for almost four decades in Cancer Care a need of medical expertise in other areas was felt by the Founder Trustees and the Project of SSIMS was conceptualized with the basic idea of providing this comprehensive integrated healthcare facility under one roof for the people of this region. SSIMS is a 95 beds multispecialty hospital with a future plan to expand to 150 beds . SSIMS is located at a very scenic and centric place of the city with good communication and transport facilities, adjacent to the preexisting Cancer Hospital premise and is equipped with all modern gadgets and infrastructure.
                    </p>
                    <Link to="">
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <Link className="carousel-control-prev" to="#customCarousel1" role="button" data-slide="prev">
            <img src="images/prev.png" alt=""/>
            <span className="sr-only">Previous</span>
          </Link>
          <Link className="carousel-control-next" to="#customCarousel1" role="button" data-slide="next">
            <img src="images/next.png" alt=""/>
            <span className="sr-only">Next</span>
          </Link>
        </div>
      </div>

    </section>

    
  </div>
   
  )
}

export default Home
