import React from 'react'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ApiServices, { urls } from "../../Services/ApiServices"
import { patientList , checkPatient } from "../../reduxdata/patientSlice"
import { useNavigate } from 'react-router-dom'
import { updatepatient } from '../../reduxdata/updateSlice'


const ViewPatient = () => {
  const recp  = useSelector(state=> state.userinfo.value)
  const  patlist = useSelector(state =>state.patientinfo.value)
  const dispatch = useDispatch()
  const [activeview ,setaciveview] = useState(true)
  const [searchquery ,setsearchQuery] = useState("")
  const navigate = useNavigate()

  const patients = async() => {
    
    const response= await ApiServices.GetApiCall(urls.RPATIENT_LIST,recp.token)
    //console.log(response)
    if(response.data.status){
      dispatch(patientList(response.data.data))
    }
  }

  const pedit = async(ob) =>{
    dispatch(updatepatient(ob))
    navigate('/updatePatient')
  }  

  const pdelete = async(id) =>{
    const URL = urls.PATIENT_DELETE +id
    const response = await ApiServices.DeleteApiCall(URL,recp.token)
    //console.log(response)
    if(response.data.status){
      const delList = patlist.filter(ob => ob.id != id)
      dispatch(checkPatient(delList))
    }
  }
  
  
  useEffect(() => {
    patients()
  },[])

  const activePatientList = patlist.filter(ob => ob.activeStatus)
  const inActivePatientList = patlist.filter(ob => !ob.activeStatus) 

   return (
    <>
      <div className="row contact-rooo no-margin">
        <div className="container text-center justify-content-center" style={{marginTop:"30px",fontFamily:'sans-serif',fontStyle:'oblique'}}>
          <h1 style={{color:'black',marginBottom:'25px',textDecoration:'underline'}}>Patient Details</h1>
          <div className="row mb-5 mt-5">
            <div className="col-md-4">
              <button className="btn btn-info " onClick={()=>setaciveview(true)}>Active Patients</button>
            </div>
           
            <div className="col-md-4"><input placeholder="Search/Name/Phone/Address" className="form-control" value={searchquery} onChange={e => setsearchQuery(e.target.value)}/></div>
           
            
            <div className="col-md-4">
            <button className="btn btn-secondary" onClick={()=>setaciveview(false)}>Inactive Patients</button>
            </div>
          </div>

          <table className="table table-bordered table-responsive">
            <thead>
              <tr>
                <th>S No.</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Mobile</th>
                <th>daignosis</th>
                <th>Appointment Date</th>
                <th>Appointment Time</th>
                <th>Reception Address</th>
                
                <th>Active</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>

            <tbody>
                {activeview ? activePatientList.map((ob,index) => {
                  return<tr>
                    <td>{index+1}</td>
                    <td>{ob.name}</td>
                    <td>{ob.sex}</td>
                    <td>{ob.age}</td>
                    <td>{ob.phoneNumber}</td>
                    <td>{ob.daignosis}</td>
                    <td>{ob.appointmentdate}</td>
                    <td>{ob.time}</td>
                    <td>{ob.address.raddress}</td>
                    
                    <td> <button className="btn btn-warning btn-sm" onClick={()=> pedit(ob)}>Edit</button> &nbsp; <button className="btn btn-danger btn-sm" onClick={() =>pdelete(ob)}>Delete</button></td>
                    {/* <td><button className="btn btn-success btn-sm">Edit</button> <br/>&nbsp;
                    <button className="btn btn-danger btn-sm">Delete</button>
                    </td> */}
                  </tr>
                }) : 
                inActivePatientList.map((ob,index) => {
                  return<tr>
                    <td>{index+1}</td>
                    <td>{ob.name}</td>
                    <td>{ob.sex}</td>
                    <td>{ob.age}</td>
                    <td>{ob.phoneNumber}</td>
                    <td>{ob.daignosis}</td>
                    <td>{ob.appointmentdate}</td>
                    <td>{ob.time}</td>
                    <td>{ob.address.raddress}</td>
                    
                    <td> <button className="btn btn-warning btn-sm" onClick={()=> pedit(ob)}>Edit</button> &nbsp; <button className="btn btn-danger btn-sm" onClick={() =>pdelete(ob)}>Delete</button></td>
                    {/* <td><button className="btn btn-success btn-sm">Edit</button> <br/>&nbsp;
                    <button className="btn btn-danger btn-sm">Delete</button>
                    </td> */}
                  </tr>
                })}
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
  
}

export default ViewPatient
