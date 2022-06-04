


import "./notes.scss"

const AddNote = () => {
    return(
        <div className="note new">
            <textarea  
            cols="30" 
            rows="10" 
            placeholder="Add a new note"
            
            >

            </textarea>
             <small>200 Remaning</small>
             <button className="save">Save</button>
        </div>
    )
}

export default AddNote ; 