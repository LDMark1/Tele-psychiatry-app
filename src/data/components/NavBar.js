import React,{useState,useEffect} from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import HomePage from "../mainpage/index";

const NavBar = () => {
  const signOut = () => {
    auth.signOut();
    window.location.href = "http://localhost:3000/";
    // navigate('/signin');
  };
  const [user] = useAuthState(auth);
  const navigate=useNavigate();
  const [ minutes, setMinutes ] = useState();
  const [seconds, setSeconds ] =  useState();
  let [timerClock, setTimerClock] = useState(5400);   
  useEffect(() => {
    const timer = setTimeout(function() {
        setTimerClock(timerClock - 1);
    let divisor_for_minutes = timerClock % (60 * 60);
    setMinutes( Math.floor(divisor_for_minutes / 60));
    let divisor_for_seconds = divisor_for_minutes % 60;
    setSeconds( Math.ceil(divisor_for_seconds));
    }, 1000)
    if (minutes==0 &&seconds==0)
    {
      alert("Your current session is expired please come back again next week");
      signOut()
    }
    return () => { // this should work flawlessly besides some milliseconds lost here and there 
       clearTimeout(timer)
    }
   }, [timerClock]);

  

  return (
    <nav className="nav-bar">
      {user ? (
        <> <button onClick={signOut} className="sign-out" type="button">
        Sign Out
      </button>
      {minutes}:{seconds}
      </>
       
      ) : (
        <></>
      )}
    </nav>
  );
};

export default NavBar;
