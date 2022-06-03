import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import {Link} from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns , userRows } from "../../datatablesource";





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



/*
function List( {rows , colums , title ,bath } ) {



  const actionColumn = [{ field:"action", headerName:"Action", width:200, renderCell:()=>{
    return(
        <div className="cellAction">
      <Link to={bath} style={{textDecoration:"none"}}><div className="viewbutton">View</div>
      </Link> 
            <div className="deleteButton">Delete</div>
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
        rows={rows}
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

*/

