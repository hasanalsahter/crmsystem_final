import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import { productInputs, StaffInput, userInputs ,contractsInputs } from "./formSource";
import {userRows , userColumns , proColumns , proRows , Satffcolumns , contractscolums} from"./datatablesource"
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
import NewContract from "./pages/new/newContact";
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
        <Route index element={<ReqireAuth>  <Home  colums={contractscolums} viewbath="/contracts/single" table_collection="contracts" /></ReqireAuth>} />
        </Route>

        <Route path="staff"  >
        <Route index element={<ReqireAuth><List  colums={Satffcolumns} title="Staff" bath="/Staff/new" viewbath="/Staff/single" table_collection="Staff"/></ReqireAuth>} />
        <Route path=":staffId" element={<ReqireAuth><Single  /></ReqireAuth>} />
        <Route path="new" element={<ReqireAuth><StaffNew inputs={StaffInput} title="Add A New Employe" dataset="staff"/></ReqireAuth>} />
        </Route>

        <Route path="users"  >
        <Route index element={<ReqireAuth><List  colums={userColumns} title="Customers" bath="/users/new"   viewbath="/users/single" table_collection="customers"/></ReqireAuth>} />
        <Route path=":userId" element={<ReqireAuth><Single  /></ReqireAuth>} />
        <Route path="new" element={<ReqireAuth><New inputs={userInputs} title="Add New User" dataset="customers"/></ReqireAuth>} />
        </Route>

        <Route path="listings"  >
        <Route index element={<ReqireAuth><List   colums={proColumns} title="listings" bath="/listings/new"  viewbath="/listings/single" table_collection="listings"/></ReqireAuth>} />
        <Route path=":listingid" element={<ReqireAuth><Single   /></ReqireAuth>} />
        <Route path="new" element={<ReqireAuth><New  inputs={productInputs} title="Add New listing" dataset="listings" /></ReqireAuth>} />
        </Route>

        <Route path="contracts"  >
        <Route index element={<ReqireAuth><List   colums={contractscolums} title="Contracts" bath="/contracts/new"  viewbath="/contracts/single" table_collection="contracts"/></ReqireAuth>} />
        <Route path=":listingid" element={<ReqireAuth><Single   /></ReqireAuth>} />
        <Route path="new" element={<ReqireAuth><NewContract  inputs={contractsInputs} title="Add New Contract" dataset="contracts" /></ReqireAuth>} />
        </Route>

       

         </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
