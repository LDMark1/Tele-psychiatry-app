import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Verification from "./components/Verification";
import "./chats.css";
function Chat() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <Verification />
        </>
      )}
    </div>
  );
}

export default Chat;
