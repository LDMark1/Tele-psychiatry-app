import './dist/all.css'
import './dist/styles.css'
import './Timeslot.css'
import React,{useState} from 'react';
import { useNavigate} from 'react-router-dom'; 
import { dataRef } from './firebase';
import { getAuth, signOut } from "firebase/auth";

function Logout()
{
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log('done')
        window.location.href = 'http://localhost:3000/signin';
    }).catch((error) => {
      // An error happened.
    });
}



function TimeSlot () {

    const navigate = useNavigate();

  const [values, setValues] = useState({
    slot1:"",
    slot2:"",
    slot3: "",
    slot4: "",
    slot5: "",
  });

  const handleSubmission=()=> {
    dataRef.ref().child("TimeSlots/").push(values); 
    navigate('/doctordashboard')
  }
  return (  

    
      <>
      <div class="mx-auto bg-grey-400">
    <div class="min-h-screen flex flex-col">
    <header class="bg-nav">
            <div class="flex justify-between">
                <div class="p-1 mx-3 inline-flex items-center">
                    <i class="fas fa-bars pr-2 text-white" onclick="sidebarToggle()"></i>
                    <h1 class="text-white p-2">MediCare</h1>
                </div>
                <div class="p-1 flex flex-row items-center">
                    <img onclick="profileToggle()" class="inline-block h-8 w-8 rounded-full" src="https://avatars0.githubusercontent.com/u/4323180?s=460&v=4" alt=""/>
                    <button class="text-white p-2 no-underline hidden md:block lg:block" onClick={Logout}>Logout</button>
                    <div id="ProfileDropDown" class="rounded hidden shadow-md bg-white absolute pin-t mt-12 mr-1 pin-r">
                        <ul class="list-reset">
                          <li><a href="#" class="no-underline px-4 py-2 block text-black hover:bg-grey-light">My account</a></li>
                          <li><a href="#" class="no-underline px-4 py-2 block text-black hover:bg-grey-light">Notifications</a></li>
                          <li><hr class="border-t mx-2 border-grey-ligght"/></li>
                          <li><a href="#" class="no-underline px-4 py-2 block text-black hover:bg-grey-light">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

        <div class="flex flex-1">
          
      <aside id="sidebar" class="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">

<ul class="list-reset flex flex-col">
    <li class=" w-full h-full py-3 px-2 border-b border-light-border">
        <a href="doctordashboard"
           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
            <i class="fas fa-tachometer-alt float-left mx-2"></i>
            Dashboard
            <span><i class="fas fa-angle-right float-right"></i></span>
        </a>
    </li>
    <li class="w-full h-full py-3 px-2 border-b border-light-border">
        <a href=""
           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
            <i class="fab fa-wpforms float-left mx-2"></i>
            Chat
            <span><i class="fa fa-angle-right float-right"></i></span>
        </a>
    </li>
    <li class="w-full h-full py-3 px-2 border-b border-light-border bg-white">
        <a href="/timeslot"
           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
            <i class="fas fa-table float-left mx-2"></i>
            Time slots
            <span><i class="fa fa-angle-right float-right"></i></span>
        </a>
    </li>
   
    <li class="w-full h-full py-3 px-2 border-b border-light-border">
                        <a href="/patientData"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-table float-left mx-2"></i>
                            Patient Data
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>
  
    
    
</ul>

</aside>
      <h1 className="availability">Please Enter your availability (HH-MM): </h1>
      <form class="asd"> 
      
      <label for="timeslot1" className="slot labels">Time slot 1:</label> 
      <input type="text" id="timeslot1" name="timeslot1"   onChange={(event)=> setValues((prev)=>({...prev, slot1: event.target.value}))} /> 
      <br/><br/> 
      <label for="timeslot2" className="slot labels">Time slot 2:</label> 
      <input type="text" id="timeslot2" name="timeslot2"  onChange={(event)=> setValues((prev)=>({...prev, slot2: event.target.value}))} /> 
      <br/><br/> 
      <label for="timeslot3" className="slot labels">Time slot 3:</label> 
      <input type="text" id="timeslot3" name="timeslot3"  onChange={(event)=> setValues((prev)=>({...prev, slot3: event.target.value}))} /> 
      <br/><br/> 
      <label for="timeslot4" className="slot labels">Time slot 4:</label> 
      <input type="text" id="timeslot3" name="timeslot3"  onChange={(event)=> setValues((prev)=>({...prev, slot4: event.target.value}))} /> 
      <br/><br/> 
      <label for="timeslot5" className="slot labels">Time slot 5:</label> 
      <input type="text" id="timeslot3" name="timeslot3"  onChange={(event)=> setValues((prev)=>({...prev, slot5: event.target.value}))} /> 
      <br/><br/> 
      <input type="submit" onClick={handleSubmission}></input>
   
    </form> 
    </div>
    </div>
    </div>
      </>
    )
  }
  
  export default TimeSlot
  