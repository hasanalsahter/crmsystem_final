import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns , userRows } from "../../datatablesource";
import {Link} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebease";

const actionColumn = [{ field:"action", headerName:"Action", width:200, renderCell:()=>{
  return(
      <div className="cellAction">
    <Link to="/users/test" style={{textDecoration:"none"}}><div className="viewbutton">View</div>
    </Link> 
          <div className="deleteButton">Delete</div>
      </div>
  )
}}]


const Datatable = ({rows , colums , title , bath }) => {
  
 

    return (
        <div className="datatable"> 
        <div className="datatableTitle">
          <h1>{title}</h1>
            <Link to={bath} style={{ textDecoratio:"none"}} className="link">
            Add New
            </Link>
        </div>
        <DataGrid
        rows={rows}
        columns={colums.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      /></div>
    )


}

export default Datatable