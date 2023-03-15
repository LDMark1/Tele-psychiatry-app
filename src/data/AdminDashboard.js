import './dist/all.css'
import './dist/styles.css'
import {dataRef} from "./firebase";
import React from "react";
import {ref, onValue} from 'firebase/database';
import { getAuth, signOut } from "firebase/auth";

const db = dataRef;

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

export class AdminDashboard extends React.Component {

    constructor(){
        super();
        this.state = {
            tableData : []
        }
    }

    componentDidMount(){
        const dbRef = ref(db, 'Doctors');
        onValue(dbRef, (snapshot)=>{
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
                    <button class="text-white p-2 no-underline hidden md:block lg:block" onClick={Logout} >Logout</button>
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
                    <li class=" w-full h-full py-3 px-2 border-b border-light-border bg-white">
                        <a href="admindashboard"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-tachometer-alt float-left mx-2"></i>
                            Dashboard
                            <span><i class="fas fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                    <li class="w-full h-full py-3 px-2 border-b border-light-border">
                        <a href="doctorregister"
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fab fa-wpforms float-left mx-2"></i>
                            Doctor Registration
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>
                   
                   
                  
                    
                    
                </ul>

            </aside>
         
            <main class="bg-white-300 flex-1 p-3 overflow-hidden">

                <div class="flex flex-col">
            
                    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div class="shadow-lg bg-red-vibrant border-l-8 hover:bg-red-vibrant-dark border-red-vibrant-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <a href="#" class="no-underline text-white text-2xl">
                                    167
                                </a>
                                <a href="#" class="no-underline text-white text-lg">
                                    Total Doctors 
                                </a>
                            </div>
                        </div>

                        <div class="shadow bg-info border-l-8 hover:bg-info-dark border-info-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <a href="#" class="no-underline text-white text-2xl">
                                    376
                                </a>
                                <a href="#" class="no-underline text-white text-lg">
                                    Total Patients
                                </a>
                            </div>
                        </div>

                        <div class="shadow bg-warning border-l-8 hover:bg-warning-dark border-warning-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <a href="#" class="no-underline text-white text-2xl">
                                    167
                                </a>
                                <a href="#" class="no-underline text-white text-lg">
                                    Active Users
                                </a>
                            </div>
                        </div>

                        <div class="shadow bg-success border-l-8 hover:bg-success-dark border-success-dark mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <a href="#" class="no-underline text-white text-2xl">
                                    0
                                </a>
                                <a href="#" class="no-underline text-white text-lg">
                                   Blocked Users
                                </a>
                            </div>
                        </div>
                    </div>

               
                    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">

                     

                        <div class="rounded overflow-hidden shadow bg-white mx-2 w-full">
                            <div class="px-6 py-2 border-b border-light-grey">
                                <div class="font-bold text-xl">Doctors' Data</div>
                            </div>
                            <div class="table-responsive">
                                <table class="table text-grey-darkest">
                                    <thead class="bg-grey-dark text-white text-normal">
                                    <tr>
                                        <th scope="col"> Name</th>
                                        <th scope="col"> Email</th>
                                        <th scope="col">CNIC</th>
                                        <th scope="col">Phone</th>
                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                     {this.state.tableData.map((rowdata, index)=>{
                                         return(

                        
                                             <tr key={index}>
                                             <td>{index+1}</td>
                                             <td>{rowdata.data.name}</td>
                                             <td>{rowdata.data.phone}</td>
                                             <td>{rowdata.data.email}</td>   
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
<script src="./main.js"></script>

      </div>
      </>
    )
  }
}

  