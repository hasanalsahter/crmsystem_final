import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import { productInputs, StaffInput, userInputs , } from "./formSource";
import {userRows , userColumns , proColumns , proRows , Satffcolumns , StaffRows} from"./datatablesource"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {AuthContext} from "./components/context/AuthContext";
import { useContext } from "react"
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import StaffNew from "./pages/new/Staffnew";
import List from "./pages/list/List";
import Messages from "./pages/messages/messages";
import Staff from "./pages/stuff/stuff";
function App() {


const {currentUser} = useContext(AuthContext)
  
const ReqireAuth = ({children}) =>{

  return currentUser ? (children) : <Navigate to="/Login"/>
};
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
      <Route path="/"  >
      <Route path="login" element={<Login />} />
        <Route index element={<ReqireAuth>  <Home /></ReqireAuth>} />
       
        <Route path="messages"  >
        <Route index element={<ReqireAuth> <Messages /></ReqireAuth>} />
        <Route index element={<ReqireAuth>  <Home /></ReqireAuth>} />
        </Route>

        <Route path="staff"  >
        <Route index element={<ReqireAuth><List rows={StaffRows} colums={Satffcolumns} title="Staff" bath="/Staff/new" viewbath="/Staff/single" /></ReqireAuth>} />
        <Route path=":staffId" element={<ReqireAuth><Single  /></ReqireAuth>} />
        <Route path="new" element={<ReqireAuth><StaffNew inputs={StaffInput} title="Add A New Employe"/></ReqireAuth>} />
        </Route>

        <Route path="users"  >
        <Route index element={<ReqireAuth><List rows={userRows} colums={userColumns} title="Customers" bath="/users/new"   viewbath="/users/single" /></ReqireAuth>} />
        <Route path=":userId" element={<ReqireAuth><Single  /></ReqireAuth>} />
        <Route path="new" element={<ReqireAuth><New inputs={userInputs} title="Add New User" dataset="customers"/></ReqireAuth>} />
        </Route>

        <Route path="listings"  >
        <Route index element={<ReqireAuth><List  rows={proRows} colums={proColumns} title="Product" bath="/listings/new"  viewbath="/listings/single" /></ReqireAuth>} />
        <Route path=":listingid" element={<ReqireAuth><Single   /></ReqireAuth>} />
        <Route path="new" element={<ReqireAuth><New  inputs={productInputs} title="Add New product" /></ReqireAuth>} />
        </Route>


         </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
