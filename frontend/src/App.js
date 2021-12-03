import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Showcase from "./components/home/Showcase";
import VuilderProfile from "./components/vuilder/VuilderProfile"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Showcase />} />
            <Route exact path="/vuilder/:id" element={<VuilderProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
