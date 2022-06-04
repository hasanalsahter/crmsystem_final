import Note from "./Note"
import AddNote from "./AddNote"


const Noteslist = ({notes}) => {

    return(
        <div className="notesList">
            { notes.map((note) => (
                <Note id={note.id} text={note.text} date={note.date}/>
            ))}
            
            
        </div>
    )
};
export default Noteslist ; 