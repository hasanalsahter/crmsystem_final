import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import { collection , query , where , getDocs} from "firebase/firestore";
import {  db } from "../../firebease";
const Widget = ({ type }) => {
  const [amount , setAmount] = useState(null)
  const [diff , setDiff] = useState(null)
  let data;


  switch (type) {
    case "user":
      data = {
        title: "Customers",
        isMoney: false,
        link: "See all Customers",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Contracts",
        isMoney: false,
        link: "View all Contracts",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
useEffect (() =>{
const fatchData = async () =>{
const today = new Date();
const prevMonth =new Date (new Date().setMonth(today.getMonth() -2))
const lastMonth =new Date (new Date().setMonth(today.getMonth() -1))


const lastMonthQuery =query(collection(db , "customers") , where ("timeStamp","<=",today) , where ("timeStamp",">",lastMonth));
const prevMonthQuery =query(collection(db , "customers") , where ("timeStamp","<=",lastMonth) , where ("timeStamp",">",prevMonth));


const lastMonthDate = await getDocs(lastMonthQuery);
const prevMonthDate = await getDocs(prevMonthQuery);

setAmount(lastMonthDate.docs.length);

};
fatchData();

},[])
   

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;