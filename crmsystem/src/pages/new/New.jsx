import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import{db} from "../../firebease";


const New = ({inputs , title }) => {
  
const AddCustomers = async(e) =>{
  e.preventDefault()
  try{
    //addDoc(collection(datbasename,(collection name))) this methode used if you dont want to have certen id for the Doc
    //create colection to add data in it doc(databaseconnecting (conf),colection,id for the table)
    const res = await addDoc(collection(db, "cities"), {
      name: "Los Angeles",
      state: "CA",
      country: "tr",
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
              <input type={input.type} placeholder={input.placeholder} />
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