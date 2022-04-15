import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featuered/Featured"
import Chart from "../../components/chart/Chart";


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
      <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />

        </div>
      </div>

  
       
    </div>
  )
}
