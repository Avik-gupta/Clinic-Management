import React from "react";

export default function DoctorHome() {
  return (
    <section className="slider_section " >
      <div className="dot_design" style={{marginRight:"200px" ,height:"700px",width:"600px",justifyContent:"center",textAlign:"center"}}>
        <img src="./doctor1.png" alt="npt found" />
      </div>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" >
          <div className="carousel-item active">
            <div className="container " >
              <div className="row" >
                <div className="col-md-6" >
                  <div className="detail-box" >
                    <div className="play_btn">
                      <button>
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>Doctors</h1>
                    <p style={{ color: "black" }}>
                    ith the amount of pollution in our atmosphere, all of us tend to fall sick every now and then. Like our parents, doctors see to it that we are cured of whatever ailments we go to them with by giving us the right medications and after-care. Becoming a good doctor requires years of education and experience. They are dedicated and spend their entire lives serving people, both young and old. The number of diseases keeps increasing every day, and the efforts doctors, pharmaceutical scientists and pharmacists put into creating remedies for the various diseases are commendable. Doctors treat patients like family. Nobody likes getting ill. Being sick is when a person feels their lowest, and for the same reason, patients will never forget a doctor who helped them get healthy. During the pandemic, doctors, nurses and other healthcare professionals worked so hard to keep people from dying; they were considered the unsung heroes of the world. There are many doctors and nurses who lost their lives taking care of people who were affected by the coronavirus. Most doctors consider their patients’ lives more important than their own; that is how much they care for those who come to them.
                    </p>
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
