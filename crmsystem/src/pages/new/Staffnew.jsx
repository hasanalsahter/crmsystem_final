import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { addDoc, collection, serverTimestamp, setDoc ,doc} from "firebase/firestore"; 
import { db , storage , auth} from "../../firebease";
import { useState } from "react";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";


const StaffNew = ({inputs , title ,dataset}) => {

  const [file , setFile] = useState("");
  const [data , setData] = useState({}); 
  const [per, setPerc] = useState(null);

  useEffect(()=>{
    const uploadFile = ()=>{
    const Pic_name= new Date().getTime() + file.name
    const storageRef = ref(storage, Pic_name);
    const uploadTask = uploadBytesResumable(storageRef, file);



uploadTask.on('state_changed', 
  (snapshot) => {

    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setPerc(progress);
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
      default:
        break;
    }
  }, 
  (error) => {
    console.log(error);
  }, 
  () => {
   
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setData((perv)=>({...perv , img:downloadURL}))
    });
  }
);

    }
    file && uploadFile();
  },[file])






  const Add_Staff_Info = (e) =>{
    const id =e.target.id;
    const value = e.target.value;

    setData({...data , [id]:value});
  };





const AddStaff = async(e) =>{
  e.preventDefault()
  try{
    const res =await createUserWithEmailAndPassword(auth, data.Staff_Email, data.Staff_password);
    await setDoc(doc(db, "Staff" , res.user.uid), {
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
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="" />
        </div>
        <div className="right">
          <form onSubmit={AddStaff}>
          <div className="formInput">
              <label htmlFor="file">
                 Image:   <DriveFolderUploadIcon className="icon" />  
              </label>
              <input
               type="file"
               id="file"
               onChange={(e)=> setFile(e.target.files[0])}
               style={{ display: "none" }}
               />
            </div>

            {inputs.map((input)=> (

            
          <div className="formInput" key={input.id} > 
              <label > {input.label} </label>
              <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={Add_Staff_Info}/>
            </div>
            ))}
            <button disabled={per !== null && per < 100} type="submit" >send</button>
          </form>
        </div>
         </div>
      </div>
    </div>
  )
}

export default StaffNew 