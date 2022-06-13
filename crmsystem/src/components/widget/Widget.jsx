import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import { collection , query , where , getDocs} from "firebase/firestore";
import { db } from "../../firebease";


const Widget = ({ type }) => {

  const [amount , setAmount] = useState(0);
  const [diff , setDiff] = useState(null);
  let data;


  switch (type) {
    case "user":
      data = {
        title: "customers",
        isMoney: false,
        link: "See all Customers",
        query:"customers",
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
        query:"contracts",
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
        title: "Staff",
        link: "View net earnings",
        query:"Staff",
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
        title: "Listings",
        link: "See details",
        query:"listings",
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
  useEffect(() => {
    const fetchData = async () => {
      const today = new Date();
      const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

      const lastMonthQuery = query(
        collection(db, "customers"),
        where("timeStamp", "<=", today),
        where("timeStamp", ">", lastMonth)
      );
    const prevMonthQuery = query(
        collection(db, "customer"),
        where("timeStamp", "<=", lastMonth),
        where("timeStamp", ">", prevMonth)
      );
        
     
   
      let  counter = 0;
      const querySnapshot = await getDocs(collection(db, data.query));
      querySnapshot.forEach((doc) => {
        counter++;
      });
      

      const prevMonthData = await getDocs(prevMonthQuery);
      const lastMonthData = await getDocs(lastMonthQuery);
     
      setDiff(((counter - prevMonthData.docs.length) /counter) *100);
      setAmount(counter);
      

    };
    fetchData();
  }, [amount]);

   

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