import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"
import Widget from "../../components/widget/Widget"

export default function Home() {
  return (
    <div className="home">
        <Sidebar />
       
      <div className="homeContiner">
      <Navbar />

      <div className="widgets">
         <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
      </div>
      
      </div>

  
       
    </div>
  )
}
