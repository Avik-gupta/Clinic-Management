import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ApiServices, { urls } from "../../Services/ApiServices"
import { patientList , checkPatient } from "../../reduxdata/patientSlice"


export default function ViewAppointments() {
  
  const doctor  = useSelector(state=> state.userinfo.value)
  const  patlist = useSelector(state =>state.patientinfo.value)
  const dispatch = useDispatch()
  const [activeview ,setaciveview] = useState(true)
  const [searchquery ,setsearchQuery] = useState("")
  
  const patients = async() => {
    
    const response= await ApiServices.GetApiCall(urls.PATIENT_LIST,doctor.token)
    //console.log(response)
    if(response.data.status){
      dispatch(patientList(response.data.data))
    }
  }

  const done = async(id) =>{
    const URL = urls.PATIENT_DONE + id
    const response = await ApiServices.PutApiCall(URL ,null,doctor.token)
    // console.log(response)
    if(response.data.status){
      const doneList = patlist.filter(ob => ob.id != id)
      dispatch(checkPatient(doneList))
    }
  }  

  const undo = async(id) =>{
    const URL = urls.PATIENT_UNDO +id
    const response = await ApiServices.PutApiCall(URL,null,doctor.token)
    //console.log(response)
    if(response.data.status){
      const doneList = patlist.filter(ob => ob.id != id)
      dispatch(checkPatient(doneList))
    }
  }
  
  
  useEffect(() => {
    patients()
  },[])

  const activePatientList = patlist.filter(ob => ob.activeStatus)
  const inActivePatientList = patlist.filter(ob => !ob.activeStatus) 

  // const filterPatients = (patients , query) =>{
  //   patients.filter(ob => ob.name.toLowerCase().includes(query.toLowerCase()) || ob.phoneNumber.toLowerCase().includes(query) || ob.address.raddress.toLowerCase().includes(query.toLowerCase())) 
  // }
  
  // const filterActivePatients = filterPatients(activePatientList , searchquery)
  // const filterinActivePatients = filterPatients(inActivePatientList , searchquery)
  
  
  return (
    <>
      <div className="row contact-rooo no-margin">
        <div className="container text-center justify-content-center" style={{marginTop:"30px",fontFamily:'sans-serif',fontStyle:'oblique'}}>
          <h1 style={{color:'black',marginBottom:'25px',textDecoration:'underline'}}>Appointments</h1>
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
                    
                    <td>{ob.activeStatus ? <button className="btn btn-danger btn-sm" onClick={()=> done(ob.id)}>Check</button> :<button className="btn btn-warning btn-sm" onClick={() =>undo(ob.id)}>UnCheck</button>}</td>
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
                    
                    <td>{ob.activeStatus ? <button className="btn btn-danger btn-sm" onClick={()=> done(ob.id)}>Check</button> :<button className="btn btn-warning btn-sm" onClick={() =>undo(ob.id)}>UnCheck</button>}</td>
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
