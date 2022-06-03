import React ,{useState , useEffect} from "react";

import {db} from "../../firebease";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./messages.scss";
export default function Home() {
    const [messages , setMessages] = useState([]);
    useEffect(() =>{

    
    },[])
  return (
    <div className="home">
        <Sidebar />
       
      <div className="homeContiner">
      <Navbar />

        <div className="chat">

        </div>

       
      </div>  
    </div>
  );
};


