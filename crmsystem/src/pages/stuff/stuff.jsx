import "./stuff.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import{db} from "../../firebease";
import Datatable from "../../components/datatable/Datatable";

const staff = () => {
  
const AddStuff = async(e) =>{
  e.preventDefault()
  try{
    //addDoc(collection(datbasename,(collection name))) this methode used if you dont want to have certen id for the Doc
    //create colection to add data in it doc(databaseconnecting (conf),colection,id for the table)
    const res = await addDoc(collection(db, "users"), {
      displayname: "Los Angeles",
      adress: "CA",
      phone: "tr",
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
        <h1 className="h1">Add new stuff account</h1></div> 
      <div className="bottom">
        <div className="left">
          <img 
          src="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
           alt="" />
        </div>
        <div className="right">
          <form onSubmit={AddStuff}>
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
            <div className="formInput">
              <label > Name and surname </label>
              <input type="text" placeholder="kamil koc" />
            </div>   
            <div className="formInput">
              <label > Email </label>
              <input type="email" placeholder="kamil_koc@forica.com" />
            </div> 
            <div className="formInput">
              <label > Phone </label>
              <input type="text" placeholder="+90 541 463 39 03" />
            </div>
            <div className="formInput">
              <label > Password </label>
              <input type="password"  />
            </div>
            <div className="formInput">
              <label > Address </label>
              <input type="text" placeholder="Beşyol, İnönü Cd. No:38, 34295 Küçükçekmece/İstanbul" />
            </div>
            
            <button type="submit">send</button>
          </form>
        </div>
         </div>
         <Datatable />
      </div>
     
    </div>
  )
}

export default staff; 