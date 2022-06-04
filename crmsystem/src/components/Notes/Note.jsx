 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { green, red } from '@mui/material/colors';
import "./notes.scss"


const Note = ( {id , text ,date }) => {


    return <div className="note">
        
        <span>{text}</span>
        <small>{date}</small>
        < EditIcon className="Icon"style={{ color: green[500] }} />
        < DeleteIcon  className="Icon"  style={{ color: red[500] }}/>
            
       



    </div>

};

export default Note ; 