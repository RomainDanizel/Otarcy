
import {Routes, Route} from "react-router-dom"

import SignUpModal from "./component/SignUpModal";
import SignInModal from "./component/SignInModal"
import LandingComponent from "./component/pages/Landing";
import Dashboard from "./component/pages/private/Dashboard/Dashboard";
import Legume from "./component/pages/private/Legume/Legume";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingComponent />} />
        <Route path="/login" element={<SignInModal/>}></Route>
        <Route path="/sign" element={<SignUpModal/>}></Route>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/product" element={<Legume/>}></Route>
          
        
      </Routes>
    </>
  );
}

export default App;
