import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import { productInputs, userInputs , } from "./formSource";
import {userRows , userColumns , proColumns , proRows} from"./datatablesource"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from "./pages/list/List";
import {AuthContext} from "./components/context/AuthContext";
import { useContext } from "react"
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
       

        <Route path="users"  >
        <Route index element={<ReqireAuth><List  rows={userRows} colums={userColumns} title="Users" bath="/users/new" /></ReqireAuth>} />
        <Route path=":userId" element={<ReqireAuth><Single  /></ReqireAuth>} />
        <Route path="new" element={<ReqireAuth><New inputs={userInputs} title="Add New User"/></ReqireAuth>} />
        </Route>

        <Route path="listings"  >
        <Route index element={<ReqireAuth><List  rows={proRows} colums={proColumns} title="Product" bath="/listings/new"  /></ReqireAuth>} />
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
