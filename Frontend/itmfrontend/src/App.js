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
import Setting from "./Pages/Setting/Setting"
import Videocall from  "./Pages/Video-call/Videocall.js"
import { InvesContextProvider } from "./Pages/context/GlobelInvestigationContext";
import { ContextProvider } from './Pages/Video-call/Context.js';
function App() {
  return (
    <Router>    
        <Routes>
        
          <Route exact path="/" element={<Home/> }></Route>
          <Route exact path="/loginpage" element={<InvesContextProvider><Login/></InvesContextProvider> }></Route>
           
          <Route exact path="/dashboard" element={<InvesContextProvider><Dashboard/></InvesContextProvider>}></Route>
          <Route exact path="/setting" element={<InvesContextProvider><Setting/></InvesContextProvider>}></Route>
          <Route exact path="/allCases" element={<InvesContextProvider><CrimeCases/></InvesContextProvider>}></Route>
          <Route exact path="/schedulecall" element={<Callsheduler/>}></Route>
          <Route exact path="/vediocall" element={<ContextProvider><Videocall/></ContextProvider>}></Route>
          <Route exact path="/specificcase" element={<InvesContextProvider><SpecificCrimeCase/></InvesContextProvider>}></Route>
          <Route exact path="/updatecase" element={<InvesContextProvider><Updatespecificcase/></InvesContextProvider>}></Route>
          <Route exact path="/criminaldata" element={<InvesContextProvider><Searching/></InvesContextProvider>}></Route>
          <Route exact path="/similarcrime" element={<InvesContextProvider><Similarcrime/></InvesContextProvider>}></Route>
          
          <Route exact path="/logout" element={<Dashboard/>}></Route>
           
           
        </Routes>
    </Router>
  );
}

export default App;
