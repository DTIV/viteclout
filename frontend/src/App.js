import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Showcase from "./components/home/Showcase";
import VuilderProfile from "./components/vuilder/VuilderProfile"
import Explore from "./components/explorer/Explore";
import EditVuilder from "./components/vuilder/EditVuilder"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route exact path="/" element={<Showcase />} />
            <Route exact path="/vuilder/:id" element={<VuilderProfile />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/vuilder/:id/edit" element={<EditVuilder />} />
          </Routes>
        <Footer />
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
