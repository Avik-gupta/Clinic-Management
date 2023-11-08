import { useRef, useState } from "react"
import { useSelector } from "react-redux"
import ApiServices, { urls } from "../../Services/ApiServices"
import { useNavigate } from "react-router-dom"


export default function UpdateReception() {
  
    const doctor = useSelector(state => state.userinfo.value)
    const rec = useSelector(state => state.updateinfo.value)
    const navigate = useNavigate()
    const [msg ,setMsg] = useState ("")
    
    var nameBox = useRef()
    var phoneBox = useRef()
   // var emailBox = useRef()
    var passBox = useRef()
    //var addBox = useRef()
  
    const rupdate = async(event) => {
      event.preventDefault()
      var rname = nameBox.current.value
      var phone = phoneBox.current.value
     // var email = emailBox.current.value
      var password = passBox.current.value
      //var address = addBox.current.value
  
     var obj = {
        name:rname,  phoneNumber:phone,   oldPassword:password,  
     }
     console.log(obj)
  
     const URL = urls.RECEPTION_UPDATE + rec.id
     const response = await ApiServices.PutApiCall(URL,obj , doctor.token)
     console.log(response)
     if(response.status){
       setMsg(response.data.msg)
       event.target.reset()
       navigate("/receptions")
     }
    }
  
    return (
    <>
      <div>
      <div className="content">
    <div className="container">
      <div className="row"  style={{position:'relative',justifyContent:'center',textAlign:'center'}}>
          
        <div className="col-md-6 contents" >
          <div className="row justify-content-center" >
            <div className="col-md-8" >
              <div className="mb-4">
              <h3 style={{textAlign:"center",fontSize:"30px",color:"black",fontWeight:"bold",fontFamily:"Lato"}}>Update Reception..!</h3>
              
            </div>
            <form  onSubmit={rupdate} >
              <div className="form-group first">
                <input type="text" className="form-control"  placeholder="Name"  ref={nameBox} defaultValue={rec.name}/>
              </div>
              
              <br/>
              <div className="form-group last mb-4">
                <input type="number" className="form-control"  placeholder="Mobile" ref={phoneBox} defaultValue={rec.phoneNumber}/>
              </div>
              
             
              {/* <div className="form-group last mb-4">
                <input type="email" className="form-control" placeholder="Email" ref={emailBox} value={rec.email}/>
              </div> */}

              <div className="form-group last mb-4">
                <input type="password" className="form-control" placeholder="password" ref={passBox} defaultValue={rec.password}/>
              </div>

              {/* <div className="form-group last mb-4">
                <input type="text" className="form-control" placeholder="Reception Address" ref={addBox} defaultValue={rec.raddress} />
              </div> */}

              <input type="submit" value="Update Reception" className="btn btn-block btn-primary"/>
              <b style={{color:"red"}}>{msg}</b>
              

             
              
             
            </form>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
    </div>
    
    </>
  )
}
