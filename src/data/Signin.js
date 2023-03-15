import React,{useState} from 'react';
import './signin.css'
import {auth} from './firebase';
import {Link, useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import 'firebase/auth';
import {dataRef} from "./firebase";
import {ref, onValue} from 'firebase/database';
let tempVar = 0;
function Signin() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email:"",
    pass: "",
  });
  const db = dataRef;
  const [errorMsg, setErrorMsg]=useState("");
 
  const handleSubmission=()=> {
    let output ;
    const dbRef = ref(db, 'sigin');
var leadsRef = dataRef.ref('sigin').orderByChild('email').equalTo(values.email);
leadsRef.on('child_added', (snapshot) => {
  const newPost = snapshot.val();
  output=newPost.designation;
  tempVar = output;
});
    onValue(dbRef, (snapshot)=>{
        let records = [];
        snapshot.forEach(childSnapshot=>{
            let keyName = childSnapshot.key;
            let data = childSnapshot.val();
            records.push({"key": keyName, "data":data});
        });
        
    });
    if(!values.email || !values.pass){
      setErrorMsg("Please fill all fields");
      return;
    }
    setErrorMsg("");
    signInWithEmailAndPassword(auth, values.email, values.pass).then(async(res)=>{
      // console.log(res);
      
      
       if(output=='admin'){
        tempVar = 1;
      navigate('/admindashboard')
       }
       if(output=='patient'){
        tempVar = 3;
        navigate('/patientdashboard')
     }
        if(output=='doctor'){
          tempVar = 2;
        navigate('/doctordashboard')
       }
        
       
      
    }).catch(err => {
      if (err.code === 'auth/invalid-email' || err.code ==='auth/wrong-password' || err.code ==='auth/user-not-found') {
        alert('Invalid Credentials');
      } else {
        console.log('Error-', err);
      }});  
  }


  return (
    <div className='lol'> 
    <h1 className='header1'>Please Login to access your dashboard</h1>
    <div className='ca'>
    
    <form>
        <h1 className='header2'><b>Sign In </b></h1> 
        <h3 className='f1'>Email</h3>
      <input className='i1' type="text" name="email"  onChange={(event)=> setValues((prev)=>({...prev, email: event.target.value}))}   /> 
      <h3 className='f1'>Password</h3>
      <input className='i1' type="password" name="pass" onChange={(event)=> setValues((prev)=>({...prev, pass: event.target.value}))}  /> <br/><br/>
      <br/>
      <b className='error'>{errorMsg}</b>
      <br/>
      <button className='b' type="button"  onClick={handleSubmission}>Sign In</button>
      <br/><br/>
      <a className='signup' href='/signup'>Don't have an account? Register yourself</a>
      </form>
    </div>
    </div>
  );

  // return (
  //   <div className='lol'>
  //   <div className='ca'>
  //   <form className='bgClr'>
  //       <h1 className='header1'><b>Sign In </b></h1> 
  //       <h3 className='f1'>Enter your Email</h3>
  //     <input className='i1' type="text" name="Email"  /> 
  //     <h3 className='f1'>Enter your Password</h3>
  //     <input className='i1' type="password" name="Password" /> <br/><br/>
  //     <input className='in' type="checkbox" />Remember Me
  //     <br/><br/>
  //     <button className='b' type="button"   >Log In</button>
  //     <br/><br/>
  //     <a className='signin' href=''>forgotpassword</a>
  //     </form>
  //   </div>
  //   </div>
  // );
}


export default Signin;
export {tempVar};