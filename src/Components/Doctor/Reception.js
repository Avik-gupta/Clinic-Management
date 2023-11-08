import { useDispatch, useSelector } from "react-redux"
import ApiServices, { urls } from "../../Services/ApiServices"
import { useEffect } from "react"
import { dellist, receptionList } from "../../reduxdata/receptionSlice"
import { useNavigate } from "react-router-dom"
import { updaterecep } from "../../reduxdata/updateSlice"


export default function Reception() {
  
  const doctor  = useSelector(state=> state.userinfo.value)
  const reclist = useSelector(state =>state.receptioninfo.value)
  const dispatch = useDispatch()
  const navigate= useNavigate()
  
  const receptions = async() => {
    
    const response= await ApiServices.GetApiCall(urls.RECEPTION_LIST,doctor.token)
    //console.log(response)
    if(response.data.status){
      dispatch(receptionList(response.data.data))
    }
  }

  const deleteR = async(id) => {
    const confrm = window.confirm("Are you sure you want to delete this Reception..? ")
    
    if(confrm){
      const URL = urls.RECEPTION_DELETE + id
      const response = await ApiServices.PutApiCall(URL,null,doctor.token)
      console.log(response)
      if(response.status){
        const up_list = reclist.filter(ob => ob.id != id)
        dispatch(dellist(up_list))
      }
    }
  }


  const editR = async(ob) =>{
    dispatch(updaterecep(ob))
    navigate("/updatereception")
  }


  
  useEffect(() => {
    receptions()
  },[])
  
  
  return (
    <>
      <div className="row contact-rooo no-margin">
        <div className="container text-center justify-content-center" style={{marginTop:"30px",fontFamily:'sans-serif',fontStyle:'oblique'}}>
          <h1 style={{color:'#698786'}}>Reception Details !</h1>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S No.</th>
                <th>Name</th>
                <th>Reception Address</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Password</th>
                <th>Active</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
                {reclist.map((ob,index) => {
                  return<tr>
                    <td>{index+1}</td>
                    <td>{ob.name}</td>
                    <td>{ob.raddress}</td>
                    <td>{ob.email}</td>
                    <td>{ob.phoneNumber}</td>
                    <td>{ob.password}</td>
                    <td>{ob.activeStatus ? <input type="checkbox" checked style={{background:"red"}}/> :<input type="checkbox" />}</td>
                    <td><button className="btn btn-success btn-sm" onClick={() => editR(ob)}>Edit</button> &nbsp;
                    <button className="btn btn-danger btn-sm" onClick={() => deleteR(ob.id)}>Delete</button>
                    </td>
                  </tr>
                })}
            </tbody>
          </table>
        </div>

      </div>
    </>
    
  )
}
