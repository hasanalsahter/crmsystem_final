 
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { green, red } from '@mui/material/colors';
import "./notes.scss"


const Note = ( {id , text ,date,handleDeleteNote }) => {


    return <div className="note">
        
        <span>{text}</span>
        <small>{date}</small>
 
        < DeleteIcon  className="Icon" id="delete"  onClick={() => handleDeleteNote(id)} style={{ color: red[500]  }}/>
            
       



    </div>

};

export default Note ; 