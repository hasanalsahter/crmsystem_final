import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { doc, setDoc } from "firebase/firestore"; 

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newcontainer">
      <Navbar />
      <div className="top">
        <h1 className="h1">Add new user</h1></div> 
      <div className="bottom">
        <div className="left">
          <img 
          src="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
           alt="" />
        </div>
        <div className="right">
          <form >
          <div className="formInput">
              <label > <DriveFolderUploadIcon />  </label>
              <input type="file"  />
            </div>
          <div className="formInput">
              <label > Username </label>
              <input type="text" placeholder="kamil_koc" />
            </div>
            <div className="formInput">
              <label > Name and surname </label>
              <input type="text" placeholder="kamil_koc" />
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
            <div className="formInput">
              <label > Country </label>
              <input type="text" placeholder="Turkey" />
            </div>
            <button>send</button>
          </form>
        </div>
         </div>
      </div>
    </div>
  )
}

export default New 