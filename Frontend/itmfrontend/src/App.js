import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/login"; 
import Home from "./Pages/HomeScreen/homepage"
import Dashboard from "./Pages/Dashboard/Dashboard"
import CrimeCases from "./Pages/CrimeCase/AllCrimeCases"
import SpecificCrimeCase from "./Pages/CrimeCase/viewspecificcase" 
import Updatespecificcase from "./Pages/CrimeCase/updatespecificcase"
import Callsheduler from "./Pages/Scheduler/Callsheduler"
import Searching from "./Pages/Searching/mainsearching";
import Similarcrime from "./Pages/Similarcrime/Similarcrime"
import Videocall from  "./Pages/Video-call/Videocall.js"
import Chatpage from "./Pages/Chat/Chatpage";
function App() {
  return (
    <Router>    
        <Routes>
          <Route exact path="/" element={<Home/> }></Route>
          <Route exact path="/loginpage" element={<Login/> }></Route>
          <Route exact path="/dashboard" element={<Dashboard/>}></Route>
          <Route exact path="/allCases" element={<CrimeCases/>}></Route>
          <Route exact path="/schedulecall" element={<Callsheduler/>}></Route>
          <Route exact path="/vediocall" element={<Videocall/>}></Route>
          <Route exact path="/specificcase" element={<SpecificCrimeCase/>}></Route>
          <Route exact path="/updatecase" element={<Updatespecificcase/>}></Route>
          <Route exact path="/criminaldata" element={<Searching/>}></Route>
          <Route exact path="/similarcrime" element={<Similarcrime/>}></Route>
          <Route exact path="/setting" element={<Dashboard/>}></Route>
          <Route exact path="/Chat" element={<Chatpage/>}></Route>
          <Route exact path="/logout" element={<Dashboard/>}></Route>
          
        </Routes>
    </Router>
  );
}

export default App;
