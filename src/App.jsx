import Home from "./Components/Home";
import Login from "./Components/Authentication/Login";
import "./styles/index.css";
import SignUp from "./Components/Authentication/SignUp";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../src/Components/Pages/Dashboard/Dashboard";
import Company from "../src/Components/Pages/Company";
import Orders from "../src/Components/Pages/Orders";
import Drivers from "../src/Components/Pages/Drivers";
import Devices from "../src/Components/Pages/Devices";
import Accounts from "../src/Components/Pages/Accounts";
import Settings from "../src/Components/Pages/Settings";



function App() {


  return (
    <>

          <Routes>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
            }>
              <Route index element={<Dashboard />} />
              <Route path="orders" element={<Orders />} />
              <Route path="company" element={<Company />} />
              <Route path="drivers" element={<Drivers />} />
              <Route path="devices" element={<Devices />} />
              <Route path="accounts" element={<Accounts />} />
              <Route path="settings" element={<Settings />} />  
            </Route>
          </Routes>
   
     
    </>
  );


}

export default App;
