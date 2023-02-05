
import {Routes, Route} from "react-router-dom"

import SignUpModal from "./component/SignUpModal";
import SignInModal from "./component/SignInModal"
import LandingComponent from "./component/pages/Landing";
import Dashboard from "./component/pages/private/Dashboard/Dashboard";
import Legume from "./component/pages/private/Legume/Legume";
import Navbar from "./component/Navbar";
import Search from "./component/pages/private/Search/Search";
import Profile from "./component/pages/private/Profile/Profile";
import Chat from "./component/pages/private/Chat/Chat";



function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<LandingComponent />} />
        <Route path="/login" element={<SignInModal/>}></Route>
        <Route path="/sign" element={<SignUpModal/>}></Route>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/product" element={<Legume/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/chat" element={<Chat/>}></Route>
          
        
      </Routes>
    </>
  );
}

export default App;
