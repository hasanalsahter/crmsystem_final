import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import List from "../../components/table/Table"
import Chart from "../../components/chart/Chart"
import Notelist from "../../components/Notes/Noteslist"
import { useState ,useEffect  } from "react"
import { nanoid } from 'nanoid';

  
function Single({}) {

  const [notess, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '21/04/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '28/04/2021',
		},
	
	]);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);



  useEffect(() => {
    localStorage.setItem(
			'notes-app-data',
			JSON.stringify(notess)
		);
  },[notess])


  const addNote = (text) => {
		console.log(text);
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text : text ,
      date : date.toLocaleDateString()

    }
    const newNotes = [...notess , newNote];
    setNotes(newNotes);
		};

    const deleteNote = (id) => {
      const newNotes = notess.filter((note) => note.id !== id);
      setNotes(newNotes);
    };
		

    

  
  
  

  return (
    <div className="single">
    <Sidebar />
   <div className="singleContainer">
      <Navbar/>
      <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                  
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>


    

        <div className="bottom">
    <div className="Notes">
    <Notelist 
    notes={notess} 
    handleAddNote={addNote} 
    handleDeleteNote={deleteNote}
    />
    </div>
        </div>

        <div className="bottom">
        <h1 className="title">Last</h1>
          <List/>
        </div>


   </div>
 </div>
  )
}

export default Single