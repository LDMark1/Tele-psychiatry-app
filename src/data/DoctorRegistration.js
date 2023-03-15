import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'; 
import {auth, dataRef} from "./firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import 'firebase/auth'
import './DoctorRegistration.css';


function DoctorRegister () {

    


const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    cnic: "",
    email:"",
    pass: "",
  });


  
  const [errorMsg, setErrorMsg]=useState("");

 

  const handleSubmission=()=> {
    if(!values.email || !values.pass){
      setErrorMsg("Please fill all fields");
      return;
    }
    const value1 = ({
      email:values.email,
      pass: values.pass,
      designation: "doctor",
      status:"0"
    });
    dataRef.ref().child("Doctors/").push(values); 
    dataRef.ref().child("sigin/").push(value1);
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, values.email, values.pass).then(async(res)=>{
      console.log(res);
      navigate('/admindashboard');
   
    }).catch(err=>console.log("Error-", err));

  }
  // console.log(auth.currentUser.email);

  return (
      
      <>
      <div>

<div className="mx-auto bg-grey-lightest">
    <div className="min-h-screen flex flex-col">
        <header className="bg-nav">
            <div className="flex justify-between">
                <div className="p-1 mx-3 inline-flex items-center">
                    <i className="fas fa-bars pr-2 text-white"></i>
                    <h1 className="text-white p-2">MediCare</h1>
                </div>
                <div className="p-1 flex flex-row items-center">
                    <img className="inline-block h-8 w-8 rounded-full" src="https://avatars0.githubusercontent.com/u/4323180?s=460&v=4" alt=""/>
                    <a href="#" className="text-white p-2 no-underline hidden md:block lg:block">Super Admin</a>
                    <div id="ProfileDropDown" className="rounded hidden shadow-md bg-white absolute pin-t mt-12 mr-1 pin-r">
                        <ul className="list-reset">
                          <li><a href="#" className="no-underline px-4 py-2 block text-black hover:bg-grey-light">My account</a></li>
                          <li><a href="#" className="no-underline px-4 py-2 block text-black hover:bg-grey-light">Notifications</a></li>
                          <li><hr className="border-t mx-2 border-grey-ligght"/></li>
                          <li><a href="#" className="no-underline px-4 py-2 block text-black hover:bg-grey-light">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

        <div className="flex flex-1">
            <aside id="sidebar" className="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">
                <div className="flex">

                </div>
                <ul className="list-reset flex flex-col">
                    <li className=" w-full h-full py-3 px-2 border-b border-light-border ">
                        <a href="admindashboard"
                           className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i className="fas fa-tachometer-alt float-left mx-2"></i>
                            Dashboard
                            <span><i className="fas fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                    <li className="w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <a href="doctorregister"
                           className="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i className="fab fa-wpforms float-left mx-2"></i>
                            Doctor registration
                            <span><i className="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                   
                   
                  
                  
                  
                </ul>

            </aside>
          
         
        </div>
       

    </div>

</div>


    <div className='registration'>
    <h1 className='header1'>Please Provide Details to Register Doctor</h1>
    <div className='formSetting'>
    <form className='formSize'>
        <h1 className='header3'><b>Register Doctor </b></h1> 
        <h3 className='f1 header3'>Email</h3>
      <input className='i1 header3' t type="text" placeholder='Enter Doctor Email' name="email"  onChange={(event)=> setValues((prev)=>({...prev, email: event.target.value}))}   /> 
      <h3 className='f1 header3'>Password</h3>
      <input className='i1'  placeholder='Enter Doctor Password' type="password" name="pass" onChange={(event)=> setValues((prev)=>({...prev, pass: event.target.value}))}   /> <br/><br/>
      <h3 className='f1 header3'>Doctor's Name</h3>
      <input className='i1' placeholder='Enter Doctor Fullname' type="text" name="name" onChange={(event)=> setValues((prev)=>({...prev, name: event.target.value}))}  /> <br/><br/>
      <h3 className='f1 header3'>Doctor's Phone Number</h3>
      <input className='i1'placeholder='Enter Doctor Phone' type="text" name="phone" onChange={(event)=> setValues((prev)=>({...prev, phone: event.target.value}))}   /> <br/><br/>
      <h3 className='f1 header3'>Doctor's CNIC</h3>
      <input className='i1'placeholder='Enter Doctor CNIC' type="text" name="cnic" onChange={(event)=> setValues((prev)=>({...prev, cnic: event.target.value}))}   /> <br/><br/>
      <br/>
      <br/>
      <b className='error'>{errorMsg}</b>
      <br/> 
      <button className='b' type="button"  onClick={handleSubmission}>Create Doctor</button>
      <br/><br/>
      </form>
    </div>
    </div>
    </div>
<script src="./main.js"></script>

    
      </>
    )
  }
  
  export default DoctorRegister
  