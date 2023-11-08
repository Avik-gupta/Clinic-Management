import {  useRef, useState } from "react"
import "../CSS/Login.css"
import { Link, useNavigate } from "react-router-dom"
import ApiServices, { urls } from "../Services/ApiServices"
import { useDispatch } from "react-redux"
import { userReducer } from "../reduxdata/userSlice"

function Login() {
  
  const emailBox = useRef()
  const passBox = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //const [msg , setMsg] = useState("")
  
  const login = async(event) =>{
    event.preventDefault()
    
    var obj= {
      email : emailBox.current.value,
      password : passBox.current.value
    }

    const response = await ApiServices.PostApiCall(urls.LOGIN,obj)
    console.log(response)
    if(response.status){
      
      if(response.data.type == "doctor"){
        const d = dispatch(userReducer({token:response.data.msg, isLogin:true, type:response.data.type, 
        name:response.data.data.name}))
      console.log(d)
      navigate("/doctor")}

      if(response.data.type == "reception"){
        const d = dispatch(userReducer({token:response.data.msg, isLogin:true, type:response.data.type, 
        name:response.data.data.name}))
        console.log(d)
      navigate("/ReceptionHome")}
    }

  }
  
  
  
  
  return (
    <div>
      <div>
      <div className="content">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="/images/1.jpeg" alt="Image" className="img-fluid"/>
        </div>
        <div className="col-md-6 contents">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="mb-4">
              <h3 style={{textAlign:"center",fontSize:"30px",color:"black",fontWeight:"bold",fontFamily:"Lato"}}>Log In</h3>
              
            </div>
            <form action="#" onSubmit={login}>
              <div className="form-group first">
                {/* <label htmlFor="username">Username</label> */}
                <input type="text" className="form-control" id="username" placeholder="Email" ref={emailBox}/>

              </div>
              <br/>
              <div className="form-group last mb-4">
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" className="form-control" id="password" placeholder="Password" ref={passBox}/>
                
              </div>
              
              <div className="d-flex mb-5 align-items-center" >
                <span className="caption"style={{marginTop:"5px"}}>Don't have an account?</span>
              
                
                <span className="ml-auto"><Link to="/register" className="forgot-pass" style={{fontSize:"16px",fontWeight:'bold',color:'black',textDecoration:"none"}}>Register Here !</Link></span> 
              </div>

              <input type="submit" value="Log In" className="btn btn-block btn-primary"/>
              {/* &nbsp;&nbsp;<b className="text-success">{msg}</b> */}

             
              
             
            </form>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}

export default Login
