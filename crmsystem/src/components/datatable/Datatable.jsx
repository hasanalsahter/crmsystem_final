import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns , userRows } from "../../datatablesource";
import {Link} from "react-router-dom";
const Datatable = ({rows , colums , title}) => {

    
    const actionColumn = [{ field:"action", headerName:"Action", width:200, renderCell:()=>{
        return(
            <div className="cellAction">
          <Link to="/users/test" style={{textDecoration:"none"}}><div className="viewbutton">View</div>
          </Link> 
                <div className="deleteButton">Delete</div>
            </div>
        )
    }}]

    return (
        <div className="datatable"> 
        <div className="datatableTitle">
          <h1>{title}</h1>
            <Link to="/New" style={{ textDecoratio:"none"}} className="link">
            Add New
            </Link>
        </div>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      /></div>
    )


}

export default Datatable