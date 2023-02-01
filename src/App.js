import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Home from "./component/Home/Home";
import HomeComponent from "./component/Home/Home";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent/>}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;