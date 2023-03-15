import "./App.css";
import React from "react";
import {Routes, Route} from 'react-router-dom';

import Signin from "./data/Signin";
import Signup from "./data/Signup";

import {DoctorDashboard} from "./data/DoctorDashboard"
import {PatientDashboard} from "./data/PatientDashboard"
import {AdminDashboard} from "./data/AdminDashboard"
import DoctorRegister from "./data/DoctorRegistration";
// import TimeSlot from "./data/Timeslot";
import Chat from "./data/chat"

// import { auth } from "./data/firebase";

import HomePage from "./data/mainpage";
import TSandQuestions from "./data/TSandQuestions";
import { PatientData } from "./data/patientData";
import ChatBox from "./data/components/ChatBox";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from 'firebase/compat/app';
import { Records } from "./data/records";


function App() {


  const [userRole, setUserRole] = useState('normaluser');
  
const db = firebase.database();
const auth = getAuth();
let userEmail  = '';
onAuthStateChanged(auth, (user) => {
  if (user) {
    userEmail = user.email;
    console.log(userEmail);
  }
  var leadsRef = db.ref('sigin').orderByChild('email').equalTo(userEmail);
  leadsRef.on('child_added', (snapshot) => {
  const newPost = snapshot.val();
  setUserRole(newPost.designation);
  console.log(userRole);
});
})
if(!userRole){return ("")}

  
  return (
    <>
   
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/doctorregister" element={<><DoctorRegister/></>}/>
        <Route path="/doctordashboard" element={<DoctorDashboard />} />
        <Route path="/patientData/"  element={<><PatientData/></>}/>
        <Route path="/chat/"  element={<><Chat/></>}/>
        <Route path="/chatbox/"  element={<><ChatBox/></>}/>
        <Route path="/patientdashboard" element={<><PatientDashboard/></>}/>
        <Route path="/bookdoctors" element={<><TSandQuestions/></>}/> 
        <Route path="/chat/"  element={<><Chat/></>}/>
        <Route path="/chatbox/"  element={<><ChatBox/></>}/>
        <Route path="/records"  element={<><Records/></>}/>
      </Routes> */}


        <Routes>
        {userRole === 'normaluser'
        && ( 
        <>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        </>
        )}
        
        {userRole === 'admin'
        && ( 
        <>
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/doctorregister" element={<><DoctorRegister/></>}/>
        </>
        )}
        {userRole === 'doctor'
        && ( 
        <>
        <Route path="/doctordashboard" element={<DoctorDashboard />} />
        <Route path="/patientData/"  element={<><PatientData/></>}/>
        <Route path="/chat/"  element={<><Chat/></>}/>
        <Route path="/chatbox/"  element={<><ChatBox/></>}/>
        </>
        )}
        {userRole === 'patient'
        && ( 
        <>
        <Route path="/patientdashboard" element={<><PatientDashboard/></>}/>
        <Route path="/bookdoctors" element={<><TSandQuestions/></>}/> 
        <Route path="/chat/"  element={<><Chat/></>}/>
        <Route path="/chatbox/"  element={<><ChatBox/></>}/>
        <Route path="/records"  element={<><Records/></>}/>
        </>
        )}
        </Routes>

        
   
    </>
  );
}

export default App;
