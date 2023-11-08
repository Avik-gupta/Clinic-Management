import { useRef, useState } from "react"
import ApiServices, { urls } from "../Services/ApiServices"


function Register() {

  const[msg , setMsg] = useState("")
  
  const nameBox = useRef()
  const emailBox = useRef()
  const phoneBox = useRef()
  const passBox = useRef()

  const register = async(event) =>{
    
    setMsg("")
    
    event.preventDefault()
    var obj ={
      name: nameBox.current.value,
      phoneNumber: phoneBox.current.value,
      email: emailBox.current.value,
      password:passBox.current.value
    }
    
    const response = await ApiServices.PostApiCall(urls.DOCTOR_REGISTER,obj)
    console.log(response)
    if(response.data.status){
      setMsg(response.data.msg)
      event.target.reset()
    }
  }


  return (
    <div>
       <div>
      <div className="content">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="/images/1.jpeg" alt="" className="img-fluid"/>
        </div>
        <div className="col-md-6 contents">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="mb-4">
              <h3 style={{textAlign:"center",fontSize:"30px",color:"black",fontWeight:"bold",fontFamily:"Lato"}}>Register !</h3>
              
            </div>
            <form action="#" onSubmit={register}>
              <div className="form-group first" >
                {/* <label htmlFor="username">Username</label> */}
                <input type="text" className="form-control"  placeholder="Enter Name" ref={nameBox}/>

              </div>
              <br/>
              <div className="form-group last mb-4" >
                {/* <label htmlFor="password">Password</label> */}
                <input type="email" className="form-control"  placeholder="Email" ref={emailBox}/>
              </div>

              <div className="form-group last mb-4" >
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" className="form-control"  placeholder="Password" ref={passBox}/>
              </div>

              <div className="form-group last mb-4" >
                {/* <label htmlFor="password">Password</label> */}
                <input type="number" className="form-control"  placeholder="Mobile" ref={phoneBox}/>
              </div>
              <button style={{width:"300px",height:"50px",marginTop:"10px"}} className="btn btn-block btn-primary" type="submit">Log In</button>             
             
              
              </form>
              &nbsp;&nbsp;<b className="text-success">{msg}</b>
                
                
              </div>

              {/* <input type="submit" value="Log In" className="btn btn-block btn-primary"/> */}

              
             
            
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
    </div>
  )
}

export default Register
