import React,{useState} from 'react';
import './forgotpassoward.css'
import axios from 'axios';
import { useNavigate} from 'react-router-dom'; 

function Forgotpassword() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [npassword,setNpassword]=useState("");
  const history = useNavigate();
 var respons;

  const saveData = async() =>
{
    let formField = new FormData()
        formField.append('username',username)
        formField.append('password',password)
        formField.append('npassword',npassword)
         await axios({
          method: 'post',
          url:'http://127.0.0.1:8000/forgotpassword',
          data: formField
        }).then(response =>{  
           respons=response.status;
            console.log(respons);
          })
          // eslint-disable-next-line
if (respons==200){
        history("/home") 
   }
   else{ 
    history("/signup")
}}

  return (
    <div className='catch'>
    <form>
        <h1 className='header2'><b>Forgot Password</b></h1> 
        <h3 className='f1'>Username</h3>
      <input placeholder='Enter username to verify' className='i1' type="text" name="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}  /> 
      <h3 className='f1'>Old Password</h3>
      <input placeholder='Enter New password' className='i1' type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> 
      <h3 className='f1'>New Password</h3>
      <input placeholder='Enter New password' className='i1' type="password" name="password" value={npassword} onChange={(e)=>{setNpassword(e.target.value)}}/> 
      <h3 className='f1'>Repeat Password</h3>
      <input placeholder='Re Enter Password' className='i1' type="password" /> 
      <br/><br/><br/><br/>
      <button className='bu' type="button" onClick={saveData} >Verifing user</button>
      <br/><br/>
      </form>
    </div>
  );
}

export default Forgotpassword