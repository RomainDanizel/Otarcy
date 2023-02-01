import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment, useState } from "react";
import Dashboard from "./component/Dashboard/Dashboard";
import Preference from "./component/Preference/Preference";
import Login from "./component/Login/Login";
import useToken from "./component/service/useToken";


function App() {
  const {token, setToken} = useToken()

  if (!token) {
    return <Login setToken= {setToken}/>
  }
  return (
    <Fragment>
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path='/preference' element={<Preference/>}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;