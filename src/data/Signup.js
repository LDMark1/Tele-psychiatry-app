import React,{useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import './signup.css'
import {auth, dataRef} from "./firebase";

function Signup() {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    name:"",
    email:"",
    pass: "",
    phone: "",
  });
  const [errorMsg, setErrorMsg]=useState("");

  const handleSubmission=()=> {
    if(!values.name || !values.email || !values.pass || !values.phone){
      setErrorMsg("Please fill all fields");
      return;
    }
    const value1 = ({
      email:values.email,
      pass: values.pass,
      designation: "patient",
      status:"0"
    });
    dataRef.ref().child("Patient/").push(values); 
    dataRef.ref().child("sigin/").push(value1); 
    // dataRef.ref().child("Patient").push(values.email); for writing data to realtime database
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, values.email, values.pass).then(async(res)=>{
      console.log(res);
      const user = res.user;
      await updateProfile(user, {
        displayName: values.name,
      });
      navigate('/signin');
    }).catch(err=>console.log("Error-", err));

  }

  return (
    <div className='lol'> 
    <h1 className='header1'>Please Register to access your dashboard</h1>
    <div className='ca'>
    
    <form>
        <h1 className='header2'><b>Sign Up </b></h1> 
        <h3 className='f1'>Email</h3>
      <input className='i1' type="text" name="email" placeholder='Enter Your Email' onChange={(event)=> setValues((prev)=>({...prev, email: event.target.value}))}   /> 
      <h3 className='f1'>Password</h3>
      <input className='i1' type="password" name="pass"  placeholder='Enter Your Password' onChange={(event)=> setValues((prev)=>({...prev, pass: event.target.value}))}  /> <br/><br/>
      <h3 className='f1'>Full Name</h3>
      <input className='i1' type="text" name="name" placeholder='Enter Your FullName' onChange={(event)=> setValues((prev)=>({...prev, name: event.target.value}))}  /> <br/><br/>
      <h3 className='f1'>Phone</h3>
      <input className='i1' type="text" name="phone" placeholder='Enter Your Phone' onChange={(event)=> setValues((prev)=>({...prev, phone: event.target.value}))}  /> <br/><br/>
      <br/>
      <br/>
      <b className='error'>{errorMsg}</b>
      <br/> 
      <button className='b' type="button"  onClick={handleSubmission}>Sign Up</button>
      <br/><br/>
      <a className='signup' href='/signin'>Already Have An Account? Sign in</a>
      </form>
    </div>
    </div>
  );
}

export default Signup