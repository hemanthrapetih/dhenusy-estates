import "./App.css";
import AgriFarm from "./pages/agri-farm/agri-farm";
import Apartments from "./pages/apartments/apartments";
import FarmHouse from "./pages/farm-house/farm";
import FarmVillasResorts from "./pages/farmvillas-resort/farmvillas-resort";
import Greenvilla from "./pages/greenvilla/greenvilla";
import Landing from "./pages/landing/landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Landing /> */}

      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />}></Route>
          <Route path="Greenvilla" element={<Greenvilla />}></Route>
          <Route
            path="FarmVillasResorts"
            element={<FarmVillasResorts />}
          ></Route>
          <Route path="FarmHouse" element={<FarmHouse />}></Route>
          <Route path="Apartments" element={<Apartments />}></Route>
          <Route path="AgriFarm" element={<AgriFarm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
