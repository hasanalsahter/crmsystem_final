import Note from "./Note"
import AddNote from "./AddNote"


const Noteslist = ({notes , handleAddNote ,handleDeleteNote, }) => {

    return(
        <div className="notesList">

<AddNote  handleAddNote= {handleAddNote}  />
            { notes.map((note) => (
                <Note 
                id={note.id} 
                text={note.text} 
                date={note.date} 
                handleDeleteNote={handleDeleteNote}
                />
            ))}
            
         
            
        </div>
    )
};
export default Noteslist ; 