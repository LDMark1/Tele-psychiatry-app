import './bookdoctors.css'
import './TSandQuestions.css'
import './dist/all.css'
import './dist/styles.css'
import { useState, useEffect } from 'react'
import { dataRef } from './firebase'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Typography } from '@mui/material'
const auth = getAuth();

let userEmail  = '';

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

onAuthStateChanged(auth, (user) => {
  if (user) {
    userEmail = user.email;
    console.log('from TS AND QUESTIONS')
    console.log(userEmail);
  }
//   var leadsRef = db.ref('sigin').orderByChild('email').equalTo(userEmail);
//   leadsRef.on('child_added', (snapshot) => {
//   const newPost = snapshot.val();
//   setUserRole(newPost.designation);
//   console.log(userRole);
// });
})

function TSandQuestions () {

  const navigate = useNavigate();
  const [errorMsg, setErrorMsg]=useState("");
  const [values, setValues] = useState({
    patientEmail: userEmail,
    docEmail: "",
    preferredTS: "",
    q6:"",
    q5:"",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    score: "",
  });


  const handleSubmission=()=> {
   

    if(!values.docEmail || !values.preferredTS || !values.q1 || !values.q2 || !values.q3 || !values.q4 || !values.q5 || !values.q6 || !values.q7 || !values.q8 || !values.q9 ){
      setErrorMsg("Please fill all fields");
      console.log(values);
      return;
    }

    setErrorMsg("");

    console.log(values);
    values.score = parseInt(values.q1) + parseInt(values.q2) + parseInt(values.q3) + parseInt(values.q4) 
    + parseInt(values.q5) + parseInt(values.q6) + parseInt(values.q7) + parseInt(values.q8) + parseInt(values.q9)
    dataRef.ref().child("TS_ByPatient/").push(values); 
    navigate('/patientDashboard')
    
  }



  return (
      
    <>
    <div className='body'>
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


        <div class="flex flex-1 navbarsize">
        <aside id="sidebar" class="bg-side-nav w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block">

              <ul class="list-reset flex flex-col">
                  <li class=" w-full h-full py-3 px-2 border-b border-light-border">
                      <a href="patientdashboard"
                         class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                          <i class="fas fa-tachometer-alt float-left mx-2"></i>
                          Dashboard
                          <span><i class="fas fa-angle-right float-right"></i></span>
                      </a>
                  </li>
                  <li class="w-full h-full py-3 px-2 border-b border-light-border">
                      <a href="/chat"
                         class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                          <i class="fab fa-wpforms float-left mx-2"></i>
                          Chat
                          <span><i class="fa fa-angle-right float-right"></i></span>
                      </a>
                  </li>
                  <li class="w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <a href="bookdoctors"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-table float-left mx-2"></i>
                            Available doctors and timeslots
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                    <li class="w-full h-full py-3 px-2 border-b border-light-border">
                        <a href="/records"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-table float-left mx-2"></i>
                            Records
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>

         
                
                  
                  
              </ul>

          </aside>

          </div>

          {/* <form>
          
          <div className='PatientEmailLabel'><b>Enter Your Email</b></div>
          <input className='PatientEmailInput'placeholder='Enter Your Email' type="text" name="patientEmail" onChange={(event)=> setValues((prev)=>({...prev, patientEmail: event.target.value}))}  />
          <div className='docEmailLabel'><b>Enter Doctor Email You Want To Book</b></div>
      <input className='docEmailInput'placeholder='Enter Doctor Email' type="text" name="docEmail" onChange={(event)=> setValues((prev)=>({...prev, docEmail: event.target.value}))}  />
      <div className='PreferredTS'><b>Enter Your Preferred Timeslot</b></div>
      <input className='PreferredTSInput'placeholder='E.G. 4:00-5:00' type="text" name="preferredTS" onChange={(event)=> setValues((prev)=>({...prev, preferredTS: event.target.value}))} />

      <div className='MCQsHeading'><b>Please complete the following Questionnaire to proceed</b></div>
        <div class='MCQs'>
        <h2><b>Q1: Little interest or pleasure in doing things</b></h2>
        <input type="radio" name="q6" value="0" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q6: event.target.value}))}/> <label>Not at all</label> <br/>
        <input type="radio" name="q6" value="1" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q6: event.target.value}))}/> <label>Some</label><br/>
        <input type="radio" name="q6" value="2" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q6: event.target.value}))}/> <label>Often</label><br/>
        <input type="radio" name="q6" value="3" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q6: event.target.value}))}/> <label>Nearly all of the time</label>  <br/>
        <br/> <br/>
        <h2><b>Q2: Feeling down, depressed, or hopeless</b></h2>
        <input type="radio" name="q5" value="0" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q5: event.target.value}))}/> <label>Not at all</label> <br/>
        <input type="radio" name="q5" value="1" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q5: event.target.value}))}/> <label>Some</label> <br/>
        <input type="radio" name="q5" value="2" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q5: event.target.value}))}/> <label>Often</label> <br/>
        <input type="radio" name="q5" value="3" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q5: event.target.value}))}/> <label>Nearly all of the time</label> <br/>
        <br/> <br/>
        <h2><b>Q3: Trouble falling or staying asleep, or sleeping too much</b></h2>
        <input type="radio" name="q3" value="0" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q3: event.target.value}))}/> <label>Not at all</label>  <br/>
        <input type="radio" name="q3" value="1" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q3: event.target.value}))}/> <label>Some</label> <br/>
        <input type="radio" name="q3" value="2" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q3: event.target.value}))}/> <label>Often</label> <br/>
        <input type="radio" name="q3" value="3" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q3: event.target.value}))}/> <label>Nearly all of the time</label> <br/>
        <br/> <br/>
        <h2><b>Q4: Feeling tired or having little energy</b></h2>
        <input type="radio" name="q4" value="0" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q4: event.target.value}))}/> <label>Not at all</label> <br/>
        <input type="radio" name="q4" value="1" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q4: event.target.value}))}/> <label>Some</label> <br/>
        <input type="radio" name="q4" value="2" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q4: event.target.value}))}/> <label>Often</label> <br/>
        <input type="radio" name="q4" value="3" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q4: event.target.value}))}/> <label>Nearly all of the time</label> <br/>
        <br/> <br/>
        <h2><b>Q5: Poor appetite or overeating</b></h2>
        <input type="radio" name="q5" value="0" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q5: event.target.value}))}/> <label>Not at all</label> <br/>
        <input type="radio" name="q5" value="1" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q5: event.target.value}))}/> <label>Some</label> <br/>
        <input type="radio" name="q5" value="2" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q5: event.target.value}))}/> <label>Often</label> <br/>
        <input type="radio" name="q5" value="3" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q5: event.target.value}))}/> <label>Nearly all of the time</label> <br/>
        <br/> <br/>
        <h2><b>Q6: Feeling bad about yourself</b></h2>
        <input type="radio" name="q6" value="0" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q6: event.target.value}))}/> <label>Not at all</label> <br/>
        <input type="radio" name="q6" value="1" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q6: event.target.value}))}/> <label>Some</label> <br/>
        <input type="radio" name="q6" value="2" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q6: event.target.value}))}/> <label>Often</label> <br/>
        <input type="radio" name="q6" value="3" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q6: event.target.value}))}/> <label>Nearly all of the time</label> <br/>
        <br/> <br/>
        <h2><b>Q7: Trouble concentrating on things</b></h2>
        <input type="radio" name="q7" value="0" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q7: event.target.value}))}/> <label>Not at all</label> <br/>
        <input type="radio" name="q7" value="1" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q7: event.target.value}))}/> <label>Some</label> <br/>
        <input type="radio" name="q7" value="2" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q7: event.target.value}))}/> <label>Often</label> <br/>
        <input type="radio" name="q7" value="3" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q7: event.target.value}))}/> <label>Nearly all of the time</label> <br/>
        <br/> <br/>
        <h2><b>Q8: Moving or speaking slowly or the opposite</b></h2>
        <input type="radio" name="q8" value="0" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q8: event.target.value}))}/> <label>Not at all</label> <br/>
        <input type="radio" name="q8" value="1" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q8: event.target.value}))}/> <label>Some</label> <br/>
        <input type="radio" name="q8" value="2" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q8: event.target.value}))}/> <label>Often</label> <br/>
        <input type="radio" name="q8" value="3" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q8: event.target.value}))}/> <label>Nearly all of the time</label> <br/>
        <br/> <br/>
        <h2><b>Q9: Suicidal or self-harm thoughts</b></h2>
        <input type="radio" name="q9" value="0" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q9: event.target.value}))}/> <label>Not at all</label> <br/>
        <input type="radio" name="q9" value="1" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q9: event.target.value}))}/> <label>Some</label> <br/>
        <input type="radio" name="q9" value="2" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q9: event.target.value}))}/> <label>Often</label> <br/>
        <input type="radio" name="q9" value="3" className='mcqlabels' onChange={(event)=> setValues((prev)=>({...prev, q9: event.target.value}))}/> <label>Nearly all of the time</label> <br/>
        <br/> 
        <b className='error'>{errorMsg}</b>
        <br/>
        <button className='button' type="button" onClick={handleSubmission} ><b>Submit</b></button>
        </div>
       
          </form> */}


  <div class="quiz-container">
    <h1>Please fill this Questionnaire</h1>
    <p>Choose the answer most suitable to your condition:</p>
    <form>
        <h3>Enter doctor's email you want to book:</h3>
        <input className=''placeholder='Enter Doctor Email' type="text" name="docEmail" onChange={(event)=> setValues((prev)=>({...prev, docEmail: event.target.value}))}  />
        <h3>Enter doctor's email you want to book:</h3>
        <input className=''placeholder='E.G. 4:00-5:00' type="text" name="preferredTS" onChange={(event)=> setValues((prev)=>({...prev, preferredTS: event.target.value}))} />
        <h3>Question 1:</h3>
        <p>Your interest or pleasure in doing things?</p>
      <label>
          <input type="radio" name="q1" value="0" onChange={(event)=> setValues((prev)=>({...prev, q1: event.target.value}))}/>
          Not at all
      </label>
      <br/>
      <label>
      <input type="radio" name="q1" value="1" onChange={(event)=> setValues((prev)=>({...prev, q1: event.target.value}))}/>
          Some
      </label><br/>
      <label>
        <input type="radio" name="q1" value="2" onChange={(event)=> setValues((prev)=>({...prev, q1: event.target.value}))}/>
        Often
      </label>
      <label><br/>
      <input type="radio" name="q1" value="3" onChange={(event)=> setValues((prev)=>({...prev, q1: event.target.value}))}/>
          Nearly all of the time
      </label><br/>
      <br/><br/>

      <h3>Question 2:</h3>
        <p>Feeling down, depressed, or hopeless?</p>
      <label>
          <input type="radio" name="q2" value="0" onChange={(event)=> setValues((prev)=>({...prev, q2: event.target.value}))}/>
          Not at all
      </label>
      <br/>
      <label>
      <input type="radio" name="q2" value="1" onChange={(event)=> setValues((prev)=>({...prev, q2: event.target.value}))}/>
          Some
      </label><br/>
      <label>
        <input type="radio" name="q2" value="2" onChange={(event)=> setValues((prev)=>({...prev, q2: event.target.value}))}/>
        Often
      </label>
      <label><br/>
      <input type="radio" name="q2" value="3" onChange={(event)=> setValues((prev)=>({...prev, q2: event.target.value}))}/>
          Nearly all of the time
      </label><br/>
      <br/><br/>

      <h3>Question 3:</h3>
        <p>Trouble falling or staying asleep, or sleeping too much?</p>
      <label>
          <input type="radio" name="q3" value="0" onChange={(event)=> setValues((prev)=>({...prev, q3: event.target.value}))}/>
          Not at all
      </label>
      <br/>
      <label>
      <input type="radio" name="q3" value="1" onChange={(event)=> setValues((prev)=>({...prev, q3: event.target.value}))}/>
          Some
      </label><br/>
      <label>
        <input type="radio" name="q3" value="2" onChange={(event)=> setValues((prev)=>({...prev, q3: event.target.value}))}/>
        Often
      </label>
      <label><br/>
      <input type="radio" name="q3" value="3" onChange={(event)=> setValues((prev)=>({...prev, q3: event.target.value}))}/>
          Nearly all of the time
      </label><br/>
      <br/><br/>

      <h3>Question 4:</h3>
        <p>Feeling tired or having little energy?</p>
      <label>
          <input type="radio" name="q4" value="0" onChange={(event)=> setValues((prev)=>({...prev, q4: event.target.value}))}/>
          Not at all
      </label>
      <br/>
      <label>
      <input type="radio" name="q4" value="1" onChange={(event)=> setValues((prev)=>({...prev, q4: event.target.value}))}/>
          Some
      </label><br/>
      <label>
        <input type="radio" name="q4" value="2" onChange={(event)=> setValues((prev)=>({...prev, q4: event.target.value}))}/>
        Often
      </label>
      <label><br/>
      <input type="radio" name="q4" value="3" onChange={(event)=> setValues((prev)=>({...prev, q4: event.target.value}))}/>
          Nearly all of the time
      </label><br/>
      <br/><br/>

      <h3>Question 5:</h3>
        <p>Poor appetite or overeating?</p>
      <label>
          <input type="radio" name="q5" value="0" onChange={(event)=> setValues((prev)=>({...prev, q5: event.target.value}))}/>
          Not at all
      </label>
      <br/>
      <label>
      <input type="radio" name="q5" value="1" onChange={(event)=> setValues((prev)=>({...prev, q5: event.target.value}))}/>
          Some
      </label><br/>
      <label>
        <input type="radio" name="q5" value="2" onChange={(event)=> setValues((prev)=>({...prev, q5: event.target.value}))}/>
        Often
      </label>
      <label><br/>
      <input type="radio" name="q5" value="3" onChange={(event)=> setValues((prev)=>({...prev, q5: event.target.value}))}/>
          Nearly all of the time
      </label><br/>
      <br/><br/>

      <h3>Question 6:</h3>
        <p>Feeling bad about yourself?</p>
      <label>
          <input type="radio" name="q6" value="0" onChange={(event)=> setValues((prev)=>({...prev, q6: event.target.value}))}/>
          Not at all
      </label>
      <br/>
      <label>
      <input type="radio" name="q6" value="1" onChange={(event)=> setValues((prev)=>({...prev, q6: event.target.value}))}/>
          Some
      </label><br/>
      <label>
        <input type="radio" name="q6" value="2" onChange={(event)=> setValues((prev)=>({...prev, q6: event.target.value}))}/>
        Often
      </label>
      <label><br/>
      <input type="radio" name="q6" value="3" onChange={(event)=> setValues((prev)=>({...prev, q6: event.target.value}))}/>
          Nearly all of the time
      </label><br/>
      <br/><br/>

      <h3>Question 7:</h3>
        <p>Trouble concentrating on things?</p>
      <label>
          <input type="radio" name="q7" value="0" onChange={(event)=> setValues((prev)=>({...prev, q7: event.target.value}))}/>
          Not at all
      </label>
      <br/>
      <label>
      <input type="radio" name="q7" value="1" onChange={(event)=> setValues((prev)=>({...prev, q7: event.target.value}))}/>
          Some
      </label><br/>
      <label>
        <input type="radio" name="q7" value="2" onChange={(event)=> setValues((prev)=>({...prev, q7: event.target.value}))}/>
        Often
      </label>
      <label><br/>
      <input type="radio" name="q7" value="3" onChange={(event)=> setValues((prev)=>({...prev, q7: event.target.value}))}/>
          Nearly all of the time
      </label><br/>
      <br/><br/>

      <h3>Question 8:</h3>
        <p>Moving or speaking slowly or the opposite?</p>
      <label>
          <input type="radio" name="q8" value="0" onChange={(event)=> setValues((prev)=>({...prev, q8: event.target.value}))}/>
          Not at all
      </label>
      <br/>
      <label>
      <input type="radio" name="q8" value="1" onChange={(event)=> setValues((prev)=>({...prev, q8: event.target.value}))}/>
          Some
      </label><br/>
      <label>
        <input type="radio" name="q8" value="2" onChange={(event)=> setValues((prev)=>({...prev, q8: event.target.value}))}/>
        Often
      </label>
      <label><br/>
      <input type="radio" name="q8" value="3" onChange={(event)=> setValues((prev)=>({...prev, q8: event.target.value}))}/>
          Nearly all of the time
      </label><br/>
      <br/><br/>

      <h3>Question 9:</h3>
        <p>Suicidal or self-harm thoughts?</p>
      <label>
          <input type="radio" name="q9" value="0" onChange={(event)=> setValues((prev)=>({...prev, q9: event.target.value}))}/>
          Not at all
      </label>
      <br/>
      <label>
      <input type="radio" name="q9" value="1" onChange={(event)=> setValues((prev)=>({...prev, q9: event.target.value}))}/>
          Some
      </label><br/>
      <label>
        <input type="radio" name="q9" value="2" onChange={(event)=> setValues((prev)=>({...prev, q9: event.target.value}))}/>
        Often
      </label>
      <label><br/>
      <input type="radio" name="q9" value="3" onChange={(event)=> setValues((prev)=>({...prev, q9: event.target.value}))}/>
          Nearly all of the time
      </label><br/>
      <br/><br/>

      <button type="submit" className='button' onClick={handleSubmission}>Submit</button>
    </form>
  </div>
          
          
      </div>
      </div>
    </div>
    </>
    )
  }
  
  export default TSandQuestions
 