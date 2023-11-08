import React from 'react'
import { useRef, useState } from "react"
import ApiServices, { urls } from "../../Services/ApiServices"
import { useSelector } from "react-redux"

const AddPatient = () => {
  
  const recp = useSelector(state =>  state.userinfo.value)
  const [msg ,setMsg] = useState ("")

  
  var nameBox = useRef()
  var phoneBox = useRef()
  var genBox = useRef()
  var ageBox = useRef()
  var appDateBox = useRef()
  var appTimeBox = useRef()
  var diagnobox = useRef()
  
  
  const asave = async(event) => {
    event.preventDefault()
    var rname = nameBox.current.value
    var phone = phoneBox.current.value
    var age = ageBox.current.value
    var gender = genBox.current.value
    var date = appDateBox.current.value
    var time = appTimeBox.current.value
    var diagnosis = diagnobox.current.value

   var obj = {
    name: rname , sex:gender , age:age , phoneNumber :phone , appointmentdate : date, time:time , diagnosis:diagnosis 
   }
   console.log(obj)

   const response = await ApiServices.PostWithHeader(urls.PATIENT_SAVE,obj , recp.token)
   console.log(response)
   if(response.status){
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
          <div className="col-md-6" style={{position:"absolute" ,right:"80px",justifyContent:"end",textAlign:"end"}}>
          <img src="./patient.jpeg" alt="Image" className="img-fluid "/>
        </div>  
        <div className="col-md-6 contents">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="mb-4">
              <h3 style={{textAlign:"center",fontSize:"30px",color:"black",fontWeight:"bold",fontFamily:"Lato"}}>Add New Patient..!</h3>
              
            </div>
            <form onSubmit={asave}>
              <div className="form-group first">
                <input type="text" className="form-control"  placeholder="Name" ref={nameBox} />
              </div>

              <br/>
              <div className="form-group last mb-4">
                <input type="text" className="form-control"  placeholder="Gender" ref={genBox} />
              </div>

              
              <div className="form-group last mb-4">
                <input type="text" className="form-control"  placeholder="Enter Age"  ref={ageBox}/>
              </div>
              
              <div className="form-group last mb-4">
                <input type="text" className="form-control"  placeholder=" Enter Your Problem"  ref={diagnobox}/>
              </div>
              
              <div className="form-group last mb-4">
                <input type="number" className="form-control"  placeholder="Mobile" ref={phoneBox} />
              </div>

              <div className="form-group last mb-4">
                <input type="date" className="form-control"  ref={appDateBox} />
              </div>

              <div className="form-group last mb-4">
                <input type="time" className="form-control" ref={appTimeBox} />
              </div>
              
              <input type="submit" value="Add Patient" className="btn btn-block btn-primary"/>
              <h3 style={{color:'red', fontSize:'20px'}}>{msg}</h3>
              
  
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

export default AddPatient

