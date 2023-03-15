import React, { useEffect, useRef, useState } from "react";
import { auth } from "../firebase";
import {
  query,
  collection,
  onSnapshot,
  limit,
  orderBy,
  where
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import { useSearchParams } from "react-router-dom";
import NavBar from "./NavBar";
import { addDoc, serverTimestamp } from "firebase/firestore";
const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  const [message, setMessage] = useState("");
  const [searchparams] = useSearchParams(); 

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      where('token', '>=', searchparams.get("email")),
      orderBy('token'), orderBy('createdAt')
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, [messages]);
  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      token:searchparams.get("email"),
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="chat-box">
      <NavBar />
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls dowwn to the scroll div */}
      <span ref={scroll}></span>
      <form onSubmit={(event) => sendMessage(event)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
    </main>
  );
};

export default ChatBox;
