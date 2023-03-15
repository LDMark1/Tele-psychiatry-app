import React, {   useState } from "react";
import { auth,db } from "../firebase";
import { addDoc, collection  } from "firebase/firestore";
import {  query, where,onSnapshot } from "firebase/firestore";  
import {createSearchParams,useNavigate} from "react-router-dom";

const Verification = () => {
    const [user, setuser] = useState([]);
    const navigate=useNavigate();
    let em,e;
    const { email } = auth.currentUser;
    const num= Math.floor(Math.random()*100000);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState([]);
 for(let i=0;i<2;i++){
      const q = query(
        collection(db, "chats"),
        where('from', '==', email),
        where('to', '==', user)
      );
     onSnapshot(q, (QuerySnapshot) => {
        let messages = [];
        QuerySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setMessage(messages);
      });
       const qu = query(
      collection(db, "chats"),
      where('to', '==', email),
        where('from', '==', user)
    );
    onSnapshot(qu, (QuerySnapshot) => {
      let messag = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messag);
  }, [user]);
  console.log(message);
  console.log(messages);
  if(message){break}
}
    const sendMessage =  async(event) => {
        event.preventDefault();
      message?.map((message) => (
      e=message.num
        ))
        messages?.map((message) => ( em=message.num
        ))
        if(!em)
        {
          em=e
          console.log(em)
        }
      if(!message.length){
        
        if(!messages.length){
          em = num;
        console.log("khali ha")
         addDoc(collection(db, "chats"), {
          from:email,
          to: user,
          num:num
        });
        addDoc(collection(db, "chats"), {
          from:user,
          to: email,
          num:num
        });
        
      }}
    
 navigate({
        pathname:"/chatbox",
        search:createSearchParams({
          email:em
        }).toString()
      });
        
    }
    return(   
      <div className="bgClrChat">
        <main className="chat-box">
            <div className="messages-wrapper"></div>
    <form className="formss">
     
    <label className="userEmail">Enter the user's email you want to talk to :</label><br/>
    <input type="text" id="user" name="user" onChange={(event)=> setuser(event.target.value)}></input>
    <br/>
    <button className='b btnChat' type="button"  onClick={sendMessage}>Submit</button>
  </form>
  
  </main>
  </div>
  )}

  export default Verification;