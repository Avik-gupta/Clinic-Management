import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { userReducer } from "../reduxdata/userSlice"

function Navbar() {
  
  const user = useSelector(state => state.userinfo.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  let logout = () => {
     dispatch(userReducer({token:undefined, isLogin:false, type:undefined, name:undefined}))
     navigate("/")
  }
  
  return (
    <div>
      <div className="hero_area">
  
     <header className="header_section">
      <div className="header_top">
        <div className="container">
          <div className="contact_nav">
            <Link to="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +01 123455678990
              </span>
            </Link>
            <Link to="">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : Indore@gmail.com
              </span>
            </Link>
            <Link to="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Indore
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <Link className="navbar-brand" to="index.html">
              <img src="./1.png" alt=""/>
            </Link>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex mr-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">

                  {user.isLogin ? 
                  <>
                    {user.type == "doctor" ? 
                    <>
                      <li className="nav-item">
                       <Link className="nav-link" to="/doctor"> Home</Link>
                     </li>
                     <li className="nav-item active">
                       <Link className="nav-link" to="/addreception">Add Reception <span className="sr-only">(current)</span></Link>
                     </li>
                     <li className="nav-item">
                       <Link className="nav-link" to="/receptions"> Reception Details</Link>
                     </li>
                     <li className="nav-item">
                       <Link className="nav-link" to="/appointments"> Patient Details</Link>
                     </li>
                     
                     <b style={{cursor:"pointer",marginTop:"11px",color:"white", fontSize:"18px" , marginLeft:"350px",textDecoration:"underline"}} onClick={logout}>
                      Logout </b>
                    </> : ""}
                    
                    {user.type == "reception" ? 
                    <>
                    <li className="nav-item active">
                       <Link className="nav-link" to="/ReceptionHome">Home </Link>
                     </li>
                     <li className="nav-item active">
                       <Link className="nav-link" to="/addpatients">Add Patient <span className="sr-only">(current)</span></Link>
                     </li>
                     <li className="nav-item">
                       <Link className="nav-link" to="/patients">Patient Details</Link>
                     </li>
                     <b style={{cursor:"pointer",marginTop:"11px",color:"white", fontSize:"18px" , marginLeft:"400px",textDecoration:"underline"}} onClick={logout}>
                      Logout </b>
                    </> : ""}

                  </> : 
                  <>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about"> About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/treatment">Treatment</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/doctors">Doctors</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/testimonial">Testimonial</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>

                  <div className="quote_btn-container">
                <Link to="/login">
                  <i className="fa fa-user" aria-hidden="true" style={{marginLeft:"120px"}}></i><span>Login</span>
                </Link>
                <Link to="/register">
                  <i className="fa fa-user" aria-hidden="true"></i><span >Register </span>
                </Link>
                
              </div>
                  </>}

                  
                  
                </ul>
              </div>
              
            </div>
          </nav>
        </div>
      </div>
    </header>
   
    
</div>
    </div>
  )
}

export default Navbar
