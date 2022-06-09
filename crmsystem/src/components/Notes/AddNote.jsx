


import { useState } from "react";
import "./notes.scss"

const AddNote = ({handleAddNote}) => {

    const [noteText ,setNotetext ] = useState('');
    const characterLimit = 200 ; 

    const handelChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setNotetext(event.target.value);
        }
       
        
    }

    const handelSaveClick = () => {
        if(noteText.trim().length > 0 ){
            handleAddNote(noteText);
            setNotetext( '' );
        }
       
        
    }

    return(
        <div className="note new">
            <textarea  
            cols="30" 
            rows="10" 
            placeholder="Add a new note"
            value={noteText}
            onChange={handelChange}
            
            >

            </textarea>
             <small>{characterLimit - noteText.length } Remaning</small>
             <button className="save" onClick={handelSaveClick}>Save</button>
        </div>
    )
}

export default AddNote ; 