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
import  {CasesContextProvider} from "./Pages/CasesContext/CasesContext"
import {IdProvider} from "./Pages/Globelvariable/Globelvariable"
import Stpage from "./Pages/stpage/stpage"
import ForensicLab from "./Pages/ForensicLab/ForensicLab"
import NewLogin from "./Pages/Login/newlogin/NewLogin"
function App() {
  return (
    <Router>    
        <Routes>
        
          <Route exact path="/" element={<Stpage/> }></Route>
          <Route exact path="/loginpage" element={<InvesContextProvider><NewLogin/></InvesContextProvider> }></Route>
          <Route exact path="/dashboard" element={<InvesContextProvider><Dashboard/></InvesContextProvider>}></Route>
          <Route exact path="/setting" element={<InvesContextProvider><Setting/></InvesContextProvider>}></Route>
          <Route exact path="/forensicLab" element={<InvesContextProvider><ForensicLab/></InvesContextProvider>}></Route>
          <Route exact path="/allCases" element={<IdProvider><InvesContextProvider><CrimeCases/></InvesContextProvider></IdProvider>}></Route>
          <Route exact path="/schedulecall" element={<Callsheduler/>}></Route>
          <Route exact path="/vediocall" element={<InvesContextProvider><ContextProvider><Videocall/></ContextProvider></InvesContextProvider>}></Route>
          <Route exact path="/specificcase" element={<IdProvider><InvesContextProvider><SpecificCrimeCase/></InvesContextProvider></IdProvider>}></Route>
          <Route exact path="/updatecase" element={<IdProvider><InvesContextProvider><Updatespecificcase/></InvesContextProvider></IdProvider>}></Route>
          <Route exact path="/criminaldata" element={<InvesContextProvider><Searching/></InvesContextProvider>}></Route>
          <Route exact path="/similarcrime" element={<IdProvider><InvesContextProvider><Similarcrime/></InvesContextProvider></IdProvider>}></Route>
          <Route exact path="/logout" element={<Stpage/>}></Route>
           
           
        </Routes>
    </Router>
  );
}

export default App;
