import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.scss"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featuered/Featured"
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

import {userRows , userColumns , proColumns , proRows , Satffcolumns , contractscolums} from"../../datatablesource"
import Datatables from "../../components/datatable/Datatable"




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
        <div className="listContainer">
          <div className="listTitle">Latst Contracts</div>
         <Datatables  colums={contractscolums}   viewbath="/contracts/single" table_collection="contracts"/>
         
        </div>
      </div>  
    </div>
  );
};


