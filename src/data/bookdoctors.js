import './bookdoctors.css'
import './dist/all.css'
import './dist/styles.css'
import { useState, useEffect } from 'react'
import { dataRef } from './firebase'
function BookDoctors () {


  const[TimeSlots, setTimeSlots]=useState([])
  useEffect(()=>{
      dataRef.ref().child("TimeSlots").on('value',data=>{
          const getData = Object.values(data.val())
          setTimeSlots(getData)
      })
  },[])

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
                    <a href="#" onclick="profileToggle()" class="text-white p-2 no-underline hidden md:block lg:block">Doctor</a>
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
                      <a href="patientdashboard"
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
                        <a href=""
                           class="font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline">
                            <i class="fas fa-table float-left mx-2"></i>
                            Available doctors and timeslots
                            <span><i class="fa fa-angle-right float-right"></i></span>
                        </a>
                    </li>

         
                
                  
                  
              </ul>

          </aside>
          
{/* code here */}
<div class="container">
      <input type="text" list="doctors" placeholder="Select doctor" />
      <datalist id="doctors">
        <option value="Dr. John Doe"/>
        <option value="Dr. Jane Doe"/>
        <option value="Dr. Bob Smith"/>
      </datalist>

      <h1> Available Time Slots For Selected Doctor</h1>
      <div class="time-slot"> {TimeSlots[0].slot1} </div>
      <div class="time-slot">{TimeSlots[0].slot2}</div>
      <div class="time-slot">{TimeSlots[0].slot3}</div>
      <div class="time-slot">{TimeSlots[0].slot4}</div>
      <div class="time-slot">{TimeSlots[0].slot5}</div>
      <input type="text" list="slots" placeholder="Select Time" />
      <datalist id="slots">
        <option value={TimeSlots[0].slot1}/>
        <option value={TimeSlots[0].slot2}/>
        <option value={TimeSlots[0].slot3}/>
        <option value={TimeSlots[0].slot4}/>
        <option value={TimeSlots[0].slot5}/>
      </datalist>
    </div>



          
      </div>
  </div>

</div>

    </div>
    </>
    )
  }
  
  export default BookDoctors
 