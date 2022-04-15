import { useState, useTransition } from "react"
import "./login.scss"
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from"../../firebease";
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const [error , setError] = useState(false);
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const navitage = useNavigate()

  const Login_process = (e) =>{
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navitage("/");
  })
  .catch((error) => {
    
    setError(true)
    // ..
  });

  };
  return (

    <div className="login">
      <form onSubmit={Login_process}>
      <input type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
      <input type="password" placeholder="Password"  onChange={e=>setPassword(e.target.value)}/>
      <button type="submit">Login</button>
      {error && <span>wrong Email or Password</span>}

      </form>

    </div>
  )
}
