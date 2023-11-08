import React from 'react'
import { useRef, useState } from "react"
import ApiServices, { urls } from "../../Services/ApiServices"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { patientList } from '../../reduxdata/patientSlice'

const UpdatePatient = () => {
  
    const recp = useSelector(state =>  state.userinfo.value)
    const pat = useSelector(state => state.updateinfo.value)
    const [msg ,setMsg] = useState ("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    
    var nameBox = useRef()
    var phoneBox = useRef()
    var appDateBox = useRef()
    
    
    
    const asave = async(event) => {
      event.preventDefault()
      var rname = nameBox.current.value
      var phone = phoneBox.current.value
      var date = appDateBox.current.value
      
  
     var obj = {
      name: rname , phoneNumber :phone , appointmentdate : date,  
     }
     const URL = urls.RPATIENT_EDIT + pat.id
     const response = await ApiServices.PutApiCall(URL,obj , recp.token)
     console.log(response)
     if(response.status){
    dispatch(patientList([response.data]))
       setMsg(response.data.msg) 
       event.target.reset()
       navigate("/patients")
     
     }
    }
    
    return (
      <div>
        <div>
        
        <div className="content">
      <div className="container">
        <div className="row">
             
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="mb-4">
                <h3 style={{textAlign:"center",fontSize:"30px",color:"black",fontWeight:"bold",fontFamily:"Lato"}}>Update Patient...</h3>
                
              </div>
              <form onSubmit={asave} style={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center'}}>
                <div className="form-group first">
                  <input type="text" className="form-control"  placeholder="Name" ref={nameBox} defaultValue={pat.name} />
                </div>

                <br/>
  
                <div className="form-group last mb-4">
                  <input type="number" className="form-control"  placeholder="Mobile" ref={phoneBox}  defaultValue={pat.phoneNumber}/>
                </div>
  
                <div className="form-group last mb-4">
                  <input type="date" className="form-control"  ref={appDateBox} defaultValue={pat.appointmentdate} />
                </div>
  
                
                
                <input type="submit" value="Update Patient" className="btn btn-block btn-primary"/>
                <h3>{msg}</h3>
                
    
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

export default UpdatePatient
