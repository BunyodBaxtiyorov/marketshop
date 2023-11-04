import "./App.css";
import Header from "./components/Header";
// import Main from "./components/main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/home/index";
import Productlist from "./components/productlist";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product" element={<Productlist />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
