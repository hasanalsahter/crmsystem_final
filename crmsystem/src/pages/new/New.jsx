import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import{db} from "../../firebease";
import { useState } from "react";


const New = ({inputs , title }) => {

  const [file , setFile] = useState("");
  const [data , setData] = useState({}); 

  const Add_Customer_Info = (e) =>{
    const id =e.target.id;
    const value = e.target.value;

    setData({...data , [id]:value});
  };

const AddCustomers = async(e) =>{
  e.preventDefault()
  try{
    await addDoc(collection(db, "customers"), {
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
        <div className="left">
          <img 
          src="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
           alt="" />
        </div>
        <div className="right">
          <form onSubmit={AddCustomers}>
          <div className="formInput">
              <label htmlFor="file">
                 Image:   <DriveFolderUploadIcon className="icon" />  
              </label>
              <input
               type="file"
               id="file"
               style={{ display: "none" }}
               />
            </div>

            {inputs.map((input)=> (

            
          <div className="formInput" key={input.id} > 
              <label > {input.label} </label>
              <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={Add_Customer_Info}/>
            </div>
            ))}
            <button>send</button>
          </form>
        </div>
         </div>
      </div>
    </div>
  )
}

export default New 