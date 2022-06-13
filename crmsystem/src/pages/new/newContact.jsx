import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import{db,storage} from "../../firebease";
import { useState } from "react";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";

const NewContract = ({inputs , title ,dataset}) => {


  const [data , setData] = useState({}); 






  const Add_Customer_Info = (e) =>{
    const id =e.target.id;
    const value = e.target.value;

    setData({...data , [id]:value});
  };

const AddDoc = async(e) =>{
  e.preventDefault()
  try{
    await addDoc(collection(db, dataset), {
      ...data,
      timestamp: serverTimestamp()
    });
  }catch(err){
    console.log(err);
  } 
}


  return (
    <div className="new">
      <Sidebar />
      <div className="newcontainer">
      <Navbar />
      <div className="top">
        <h1 className="h1">{title}</h1></div> 
      <div className="bottom">
    
        <div className="right">
          <form onSubmit={AddDoc}>
    

            {inputs.map((input)=> (

            
          <div className="formInput" key={input.id} > 
              <label > {input.label} </label>
              <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={Add_Customer_Info}/>
            </div>
            ))}
            <button type="submit">send</button>
          </form>
        </div>
         </div>
      </div>
    </div>
  )
}

export default NewContract 