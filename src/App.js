import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
// import Appointment from './Components/Appointment';
import Home from './Components/Home';
import About from './Components/About';
import Treatment from './Components/Treatment';
import Doctors from './Components/Doctors'
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import { useSelector } from 'react-redux';
import AddReception from './Components/Doctor/AddReception';
import WrongURL from './Components/WrongURL';
import DoctorHome from './Components/Doctor/DoctorHome';
import Appointment from './Components/Appointment';
import ViewAppointments from './Components/Doctor/ViewAppointments';
import AddPatient from './Components/Reception/AddPatient';
import ViewPatient from './Components/Reception/ViewPatient';
import Reception from './Components/Doctor/Reception'
import UpdateReception from './Components/Doctor/UpdateReception';
import ReceptionHome from './Components/Reception/ReceptionHome'
import UpdatePatient from './Components/Reception/UpdatePatient';

function App() {
  
  const user = useSelector(state => state.userinfo.value)
  
  return (
    <div>
    <Navbar/>
    <Routes>
     
      {user.isLogin ? 
      <>
      <Route path='/addreception' element={<AddReception />}></Route>
      <Route path='/doctor' element={<DoctorHome />}></Route>
      <Route path='/appointments' element={<ViewAppointments />}></Route>
      <Route path='/addpatients' element={<AddPatient />}></Route>
      <Route path='/patients' element={<ViewPatient />}></Route>
      <Route path='/receptions' element={<Reception />}></Route>
      <Route path='/updatereception' element={<UpdateReception />}></Route>
      <Route path='/ReceptionHome' element={<ReceptionHome />}></Route>
      <Route path='//updatePatient' element={<UpdatePatient />}></Route>

      </> :
      <>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/treatment' element={<Treatment />}></Route>
      <Route path='/doctors' element={<Doctors />}></Route>
      <Route path='/testimonial' element={<Testimonial />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>

      <Route path='*' element={<WrongURL />}></Route>
      

      </>}  
    
    </Routes>
    <Appointment/>
    <Footer/>
    </div>
  );
}

export default App;
