import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import {Link} from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns , userRows } from "../../datatablesource";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebease";
import { async } from "@firebase/util";


/*

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable  rows={userRows} colums={userColumns} title="Users" bath="/users/new" />
      </div>
    </div>
  )
}

export default List


*/

function List( {  colums , title ,bath , viewbath, table_collection} ) {
  const [data , setData] = useState([]);
  useEffect(()=>{
    const fetchData = async ()=>{
      let list_table =[];
      try{

        const querySnapshot = await getDocs(collection(db, table_collection));
        querySnapshot.forEach((doc) => {
        
          list_table.push({id: doc.id, ...doc.data()});
        });
        setData(list_table);
      }catch(err){
       console.log(err);
      }
    }
    fetchData();
  },[data])

const Delete_datatable = async(id) => {
  try {
    await deleteDoc(doc(db, table_collection, id));
    setData(data.filter((item) => item.id != id))
  }catch(err){
console.log(err)
  }
}

  const actionColumn = [{ field:"action", headerName:"Action", width:200, renderCell:(params)=>{
    return(
        <div className="cellAction">
      <Link to={viewbath} style={{textDecoration:"none"}}><div className="viewbutton">View</div>
      </Link> 
            <div className="deleteButton" onClick={() => Delete_datatable(params.row.id)}>Delete</div>
        </div>
    )
  }}]
  

  return (

   
  
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
     
        <div className="datatable"> 
        <div className="datatableTitle">
          <h1>{title}</h1>
            <Link to={bath} style={{ textDecoratio:"none"}} className="link">
            Add New
            </Link>
        </div>
        <DataGrid
        rows={data}
        columns={colums.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      /></div>



      </div>
    </div>
    
  )
}

export default List



