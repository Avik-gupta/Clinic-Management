import { useRef, useState } from "react"
import ApiServices, { urls } from "../../Services/ApiServices"
import { useSelector } from "react-redux"


function AddReception() {
  
  const doctor = useSelector(state =>  state.userinfo.value)
  const [msg ,setMsg] = useState ("")
  
  var nameBox = useRef()
  var phoneBox = useRef()
  var emailBox = useRef()
  var passBox = useRef()
  var addBox = useRef()

  const rsave = async(event) => {
    event.preventDefault()
    var rname = nameBox.current.value
    var phone = phoneBox.current.value
    var email = emailBox.current.value
    var password = passBox.current.value
    var address = addBox.current.value

   var obj = {
      name:rname,  phoneNumber:phone,  email:email,  password:password,  raddress:address
   }
   console.log(obj)

   const response = await ApiServices.PostWithHeader(urls.RECEPTION,obj , doctor.token)
   console.log(response)
   if(response.status){
     setMsg(response.data.msg)
     event.target.reset()
   }
  }
  
  
  return (
    <div>
      
      <div className="content">
    <div className="container">
      <div className="row">
          <div className="col-md-6" style={{position:"absolute" ,right:"80px",justifyContent:"end",textAlign:"end"}}>
          <img src="./reception1.png" alt="Image" className="img-fluid "/>
        </div>  
        <div className="col-md-6 contents">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="mb-4">
              <h3 style={{textAlign:"center",fontSize:"30px",color:"black",fontWeight:"bold",fontFamily:"Lato"}}>Add New Reception..!</h3>
              
            </div>
            <form  onSubmit={rsave}>
              <div className="form-group first">
                <input type="text" className="form-control"  placeholder="Name"  ref={nameBox}/>
              </div>
              
              <br/>
              <div className="form-group last mb-4">
                <input type="number" className="form-control"  placeholder="Mobile" ref={phoneBox}/>
              </div>
              
             
              <div className="form-group last mb-4">
                <input type="email" className="form-control" placeholder="Email" ref={emailBox}/>
              </div>

              <div className="form-group last mb-4">
                <input type="password" className="form-control" placeholder="password" ref={passBox}/>
              </div>

              <div className="form-group last mb-4">
                <input type="text" className="form-control" placeholder="Reception Address" ref={addBox} />
              </div>

              <input type="submit" value="Add Reception" className="btn btn-block btn-primary"/>
              <b style={{color:"red"}}>{msg}</b>
  
            </form>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
    </div>
   
  )
}

export default AddReception
