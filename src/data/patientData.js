import './dist/all.css'
import './dist/styles.css'
import './patientData.css'
import {dataRef} from "./firebase";
import React from "react";
import {ref, onValue} from 'firebase/database';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { orderByChild, query } from 'firebase/database';
import {equalTo} from 'firebase/database';

const db = dataRef;
const auth = getAuth();
let userEmail;
onAuthStateChanged(auth, (user) => {
    if (user) {
      userEmail = user.email;
      console.log(userEmail);
    }
  })

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

export class PatientData extends React.Component {


    constructor(){
        super();
        this.state = {
            tableData : []
        }
    }

    // componentDidMount(){
    //     const dbRef = ref(db, 'TS_ByPatient');
    //     onValue(dbRef, (snapshot)=>{
    //         let records = [];
    //         snapshot.forEach(childSnapshot=>{
    //             let keyName = childSnapshot.key;
    //             let data = childSnapshot.val();
    //             records.push({"key": keyName, "data":data});
    //         });
    //         this.setState({tableData: records});
    //     });
    // }
    componentDidMount(){
        const dbRef = ref(db, 'TS_ByPatient');
        const dba = query(ref(db, 'TS_ByPatient'), orderByChild('docEmail'),equalTo(userEmail));

        onValue(dba, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyName, "data":data});
            });
            this.setState({tableData: records});
        });
    }
    
   

render () {
  return (
      
      <>
      <div>

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
                        <a href="/chat"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fab fa-wpforms float-left mx-2"></i>
                            Chat
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                    {/* <li class="w-full h-full py-3 px-2 border-b border-light-border">
                        <a href="/timeslot"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-table float-left mx-2"></i>
                            Time slots
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li> */}
                    <li class="w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <a href="/timeslot"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-table float-left mx-2"></i>
                            Patient Data
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>
           
                  
                    
                    
                </ul>

            </aside>
            <main class="bg-white-300 flex-1 p-3 overflow-hidden">

                <div class="flex flex-col">
                    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div class="shadow bg-success border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <a href="#" class="no-underline text-white text-2xl">
                                    4
                                </a>
                                <a href="#" class="no-underline text-white text-lg">
                                    Meetings Scheduled for Today
                                </a>
                            </div>
                        </div>

                        <div class="shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <a href="#" class="no-underline text-white text-2xl">
                                    12
                                </a>
                                <a href="#" class="no-underline text-white text-lg">
                                    Total Patients
                                </a>
                            </div>
                        </div>
                    </div>


                    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">


                        <div class="rounded overflow-hidden shadow bg-white mx-2 w-full">
                            <div class="px-6 py-2 border-b border-light-grey">
                                <div class="font-bold text-xl">Patients Today</div>
                            </div>
                            <div class="table-responsive">
                                <table class="table text-grey-darkest">
                                    <thead class="bg-grey-dark text-white text-normal">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Patient Email</th>
                                        <th scope="col">Patient's preffered Timeslot</th>
                                        <th scope="col">Q1</th>
                                        <th scope="col">Q2</th>
                                        <th scope="col">Q3</th>
                                        <th scope="col">Q4</th>
                                        <th scope="col">Q5</th>
                                        <th scope="col">Q6</th>
                                        <th scope="col">Q7</th>
                                        <th scope="col">Q8</th>
                                        <th scope="col">Q9</th>
                                        <th scope="col">Total Score</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                     {this.state.tableData.map((rowdata, index)=>{
                                         return(

                        
                                             <tr key={index}>
                                             <td>{index+1}</td>
                                             {/* <td>{rowdata.data.docEmail}</td> */}
                                             <td>{rowdata.data.patientEmail}</td>
                                             <td>{rowdata.data.preferredTS}</td>   
                                             <td>{rowdata.data.q1}</td> 
                                             <td>{rowdata.data.q2}</td> 
                                             <td>{rowdata.data.q3}</td> 
                                             <td>{rowdata.data.q4}</td> 
                                             <td>{rowdata.data.q5}</td> 
                                             <td>{rowdata.data.q6}</td> 
                                             <td>{rowdata.data.q7}</td> 
                                             <td>{rowdata.data.q8}</td> 
                                             <td>{rowdata.data.q9}</td> 
                                             <td>{rowdata.data.score}</td> 
                                      </tr>
                                                 )
                                     })}
                                 </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                  
                </div>
            </main>
        </div>
    </div>

</div>

      </div>
      </>
    )
  }
}
  
  